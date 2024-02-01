import { Text, View, StyleSheet, Pressable } from 'react-native';
import { percentageCalculation } from '../../utils/helpers';
import { TopCategory } from '../../types/topCategories.type';

// to show what percentage of allocated amount is used in percentage format
export const UsedAmountGraph = (props: TopCategory) => {
  const percentage = percentageCalculation(
    props.usedUpAmount,
    props.allocatedAmount
  );
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.left}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.percentage}>{percentage}%</Text>
        </View>
        <View style={styles.right}>
          <Pressable>
            <Text style={styles.allocated}>${props.allocatedAmount}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.fullBar}>
        <View
          style={[styles.percentageFilled, { width: `${percentage}%` }]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullBar: {
    backgroundColor: '#20726820',
    width: '100%',
    height: 8,
    borderRadius: 6,
  },
  percentageFilled: {
    backgroundColor: '#207268',
    height: 8,
    borderRadius: 6,
  },
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },
  topBar: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: { flexDirection: 'row', gap: 4, alignItems: 'center' },
  right: {},
  name: {
    fontSize: 14,
    fontWeight: '700',
  },
  percentage: {
    color: '#207268',
    fontSize: 18,
    fontWeight: 'bold',
  },
  allocated: {
    fontSize: 16,
    fontWeight: '500',
  },
});
