import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BarChart, LineChart } from 'react-native-gifted-charts';
import { MonthlySpent } from '../../types/monthlySpent.type';
import { useMemo, useState } from 'react';
import { MonthSelector } from '../common/MonthSelector';
import { BarChartType } from '../../types/barChart.type';
import { MoneyPill } from '../common/MoneyPill';

const WEEKLY_SPENDING_LIMIT = 30;

interface PropTypes {
  data: MonthlySpent;
}

// component to show monthly spending
export const MonthlySpending = (props: PropTypes) => {
  const [selected, setSelected] = useState(0);
  const [graphType, setGraphType] = useState(0);
  // extracting data
  const months = Object.keys(props.data);
  const totalSpent = props.data[months[selected]].spending.reduce(
    (acc, item) => {
      return (acc += item.spent);
    },
    0
  );

  // modifying data to use it with the BarChart/AreaChart component from the package
  const data: BarChartType = useMemo(() => {
    const modifiedData: BarChartType = props.data[
      months[selected]
    ].spending.map((spending) =>
      spending.spent > WEEKLY_SPENDING_LIMIT
        ? {
            label: spending.date,
            value: spending.spent,
            frontColor: '#207268',
            topLabelComponent: () => <MoneyPill spent={spending.spent} />,
          }
        : {
            label: spending.date,
            value: spending.spent,
            frontColor: '#20726820',
            topLabelComponent: () => <MoneyPill spent={spending.spent} />,
          }
    );
    return modifiedData;
  }, [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Monthly Spent</Text>
        <Text style={styles.heading}>${totalSpent}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <MonthSelector
          selected={months[selected]}
          handlePrevClicked={() => {
            setSelected((prev) => (prev === 0 ? months.length - 1 : prev - 1));
          }}
          handleNextClicked={() => {
            setSelected((prev) => (prev + 1) % months.length);
          }}
        />
        <View style={styles.graphTypeButtonContainer}>
          <Pressable
            style={[
              styles.chartPicker,
              graphType === 0 ? styles.activeGraph : {},
            ]}
            onPress={() => setGraphType(0)}
          >
            <Text style={[graphType === 0 ? styles.activeText : {}]}>Bar</Text>
          </Pressable>
          <Pressable
            style={[
              styles.chartPicker,
              graphType === 1 ? styles.activeGraph : {},
            ]}
            onPress={() => setGraphType(1)}
          >
            <Text style={[graphType === 1 ? styles.activeText : {}]}>Area</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.graphContainer}>
        {graphType === 0 ? (
          <BarChart
            barWidth={25}
            spacing={40}
            barBorderRadius={6}
            data={data}
            hideYAxisText
            hideAxesAndRules
            isAnimated
            disableScroll
            overflowTop={24}
          />
        ) : (
          <LineChart
            data={data}
            color='#207268'
            startFillColor='#207268'
            endFillColor='#20726820'
            startOpacity={0.6}
            endOpacity={0.1}
            curved
            areaChart
            spacing={80}
            hideYAxisText
            hideAxesAndRules
            disableScroll
            xAxisLabelTextStyle={{
              fontSize: 12,
            }}
            endSpacing={0}
            adjustToWidth
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingBottom: 32,
    paddingTop: 24,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  graphContainer: {
    paddingTop: 24,
  },
  chartPicker: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: '#20726820',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  activeGraph: {
    backgroundColor: '#207268',
  },
  activeText: {
    color: 'white',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  graphTypeButtonContainer: { flexDirection: 'row', gap: 8 },
});
