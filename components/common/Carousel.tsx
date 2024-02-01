import { ReactElement, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarouselComponent from 'react-native-reanimated-carousel';
import { CarouselRenderItemInfo } from 'react-native-reanimated-carousel/lib/typescript/types';
import Dots from 'react-native-dots-pagination';
import { checkIOS } from '../../utils/helpers';

interface PropsType<Type> {
  data: Type[];
  renderItem: (data: CarouselRenderItemInfo<Type>) => ReactElement;
  loop?: boolean;
  heading?: string;
  width: number;
  height?: number;
}

export function Carousel<Type>(props: PropsType<Type>) {
  const [index, setIndex] = useState(0);
  return (
    <>
      {/* if heading available showing it, with the slide number */}
      {props.heading ? (
        <View style={styles.header}>
          <Text style={styles.heading}>{props.heading}</Text>
          <Text style={styles.slideNum}>
            {index + 1}/{props.data.length}
          </Text>
        </View>
      ) : null}
      {/* making custom carousel component using reanimated carousel library */}
      <CarouselComponent
        loop={!!props.loop}
        width={props.width}
        height={props.height || props.width / 2}
        style={{ overflow: 'visible' }}
        data={props.data}
        renderItem={props.renderItem}
        onProgressChange={(_, absoluteProgress) => {
          setIndex(Math.round(absoluteProgress));
        }}
        pagingEnabled={true}
        snapEnabled={true}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: checkIOS() ? 50 : 46,
        }}
        scrollAnimationDuration={500}
      />
      {/* the dots on bottom of carousel to keep the track of slides */}
      <View>
        <Dots
          length={props.data.length}
          active={index}
          activeColor='#207268'
          paddingVertical={16}
          activeDotWidth={8}
          activeDotHeight={8}
          passiveDotHeight={8}
          passiveDotWidth={8}
          marginHorizontal={4}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: checkIOS() ? 0 : 2,
  },
  slideNum: {
    fontSize: 16,
    fontWeight: '500',
  },
  heading: {
    fontSize: checkIOS() ? 20 : 18,
    fontWeight: 'bold',
  },
});
