import { StyleSheet, Text, View } from 'react-native';
import { TopCategories as TopCategoriesType } from '../../types/topCategories.type';
import { UsedAmountGraph } from '../common/UsedAmountGraph';
import { checkIOS } from '../../utils/helpers';

interface PropTypes {
  data: TopCategoriesType;
}

// TOp Categories component
export const TopCategories = (props: PropTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Top Categories</Text>
        <Text style={styles.subHeading}>View All</Text>
      </View>
      <View style={styles.graphContainer}>
        {props.data.map((topCategory, index) => (
          <UsedAmountGraph key={index} {...topCategory} />
        ))}
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
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: checkIOS() ? 22 : 18,
  },
  graphContainer: {
    gap: checkIOS() ? 24 : 22,
  },
});
