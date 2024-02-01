import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface PropTypes {
  month: string;
}

// month tab to show the month name with icon, this component is used by Month Selector for further customizations
export const MonthTab = (props: PropTypes) => {
  return (
    <View style={styles.tab}>
      <Feather name='calendar' size={22} color='#207268' />
      <Text style={styles.tabText}>{props.month}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#207268',
    fontSize: 16,
    fontWeight: '600',
  },
});
