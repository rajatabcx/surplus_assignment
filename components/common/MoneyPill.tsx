import { StyleSheet, Text, View } from 'react-native';
interface PropTypes {
  spent: number;
}

// small pill component to show the value on top of bar chart
export const MoneyPill = (props: PropTypes) => {
  return (
    <View style={styles.pill}>
      <Text style={styles.pillText}>${props.spent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    borderRadius: 999,
    backgroundColor: '#207268',
    marginBottom: 4,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillText: {
    color: 'white',
    fontSize: 16,
  },
});
