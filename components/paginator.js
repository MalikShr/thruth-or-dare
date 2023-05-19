import { useWindowDimensions, Animated, StyleSheet, View } from 'react-native'

export default function Paginator({ data, scrollX }) {
const {width} = useWindowDimensions()
  return(
    <View style={{ flexDirection: 'row', height: 64}}>
        {data.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

            const dotScale = scrollX.interpolate({
                inputRange,
                outputRange: [0.8 , 1.2, 0.8],
                extrapolate: 'clamp'
            })
            const dotOpacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.6 , 0.9, 0.6],
              extrapolate: 'clamp'
          })

            return <Animated.View style={[styles.dot, { transform: [
              {
                scale: dotScale
              }
            ], opacity: dotOpacity, backgroundColor: 'white'}]} key={i.toString()}/>
        })}

      </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 12,
    width: 12,
    borderRadius: 10,
    marginHorizontal: 8,
    bottom: '23%'
  }
  })
