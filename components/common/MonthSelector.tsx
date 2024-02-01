import { Pressable, StyleSheet, View } from 'react-native';
import { MonthTab } from './MonthTab';
import { Entypo } from '@expo/vector-icons';

interface PropTypes {
  selected: string;
  handlePrevClicked: () => void;
  handleNextClicked: () => void;
}

// months selector component to change between months and see different trends
export const MonthSelector = (props: PropTypes) => {
  return (
    <View style={styles.monthSelectorContainer}>
      <Pressable style={styles.button} onPress={props.handlePrevClicked}>
        <Entypo name='chevron-left' size={24} color='black' />
      </Pressable>
      <MonthTab month={props.selected} />
      <Pressable style={styles.button} onPress={props.handleNextClicked}>
        <Entypo name='chevron-right' size={24} color='black' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  monthSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  button: {
    padding: 4,
  },
});
