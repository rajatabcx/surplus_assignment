import { AverageSpent } from '../../types/averageSpent.type';
import { StackedBarChart as StackedBarChartType } from '../../types/barChart.type';
import { StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { MonthSelector } from '../common/MonthSelector';
import { useMemo, useState } from 'react';
import { MoneyPill } from '../common/MoneyPill';

interface PropTypes {
  data: AverageSpent;
}

// This component shows the average Spending
export function DailyAverageSpent(props: PropTypes) {
  const [selected, setSelected] = useState(0);
  const months = Object.keys(props.data);

  // modifying the data to use it with BarChart component from package
  const data: StackedBarChartType = useMemo(() => {
    const monthData = props.data[months[selected]];
    const averageSpent = monthData.averageSpent;
    const modifiedData: StackedBarChartType = monthData.spending.map(
      (spend) => ({
        label: spend.date,
        stacks: [
          {
            color: '#207268',
            value: spend.spent,
          },
          { color: '#20726820', value: averageSpent - spend.spent },
        ],
        topLabelComponent: () => <MoneyPill spent={spend.spent} />,
      })
    );
    return modifiedData;
  }, [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Daily Average Spent</Text>
        <Text style={styles.heading}>
          ${props.data[months[selected]].averageSpent}
        </Text>
      </View>
      <MonthSelector
        selected={months[selected]}
        handlePrevClicked={() => {
          setSelected((prev) => (prev === 0 ? months.length - 1 : prev - 1));
        }}
        handleNextClicked={() => {
          setSelected((prev) => (prev + 1) % months.length);
        }}
      />
      <View style={styles.graphContainer}>
        <BarChart
          barWidth={25}
          spacing={50}
          barBorderRadius={6}
          stackData={data}
          hideRules
          hideYAxisText
          hideAxesAndRules
          // isAnimated
          disableScroll
          xAxisLabelTextStyle={{
            fontSize: 10,
          }}
        />
      </View>
    </View>
  );
}

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
});
