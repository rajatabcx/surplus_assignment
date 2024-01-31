import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { graphCarouselData } from './utils/constants';
import { Carousel } from './components/Carousel';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <ScrollView
        style={styles.scrollStyles}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollInnerContainer}
      >
        <Carousel
          data={graphCarouselData}
          width={Dimensions.get('window').width}
          height={350}
          heading='Spending Graphs'
          renderItem={({ item: { Component } }) => Component}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollStyles: { flex: 1 },
  scrollInnerContainer: {
    gap: 16,
    flex: 1,
    justifyContent: 'center',
  },
});
