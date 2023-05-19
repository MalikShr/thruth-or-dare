import React, {useState, useEffect} from 'react';
import { Animated, View } from 'react-native'

export default function Ball() {

    const one = useState(new Animated.Value(0))[0]
    const two = useState(new Animated.Value(0))[0]
    const three = useState(new Animated.Value(0))[0]

    function onAshow(animation) {
        Animated.timing(animation, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start()
    }

    function onAhide(animationHide) {
        Animated.timing(animationHide, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }

    function startA() {
        onAshow(one)
        setTimeout(function() {onAshow(two)}, 250);
        setTimeout(function() {onAshow(three)}, 500);

        setTimeout(function() {onAhide(three)}, 800);
        setTimeout(function() {onAhide(two)}, 800);
        setTimeout(function() {onAhide(one)}, 800);
        setTimeout(function() {startA()}, 1050);
    }

    useEffect(() => {
        startA()
       }, [])

  return(
    <View style={{flexDirection: 'row', top: '65%'}}>
        <Animated.View style={{
            width: 8,
            height: 8,
            backgroundColor: 'white',
            borderRadius: 7,
            marginHorizontal: 3,
            opacity: one,
            transform: [
                {
                  scale: one
                }
              ],
        }}>

        </Animated.View>
        <Animated.View style={{
            width: 8,
            height: 8,
            backgroundColor: 'white',
            borderRadius: 7,
            marginHorizontal: 3,
            opacity: two,
            transform: [
                {
                  scale: two
                }
              ],
        }}>

        </Animated.View>
        <Animated.View style={{
            width: 8,
            height: 8,
            backgroundColor: 'white',
            borderRadius: 7,
            marginHorizontal: 3,
            opacity: three,
            transform: [
                {
                  scale: three
                }
              ],
        }}>

        </Animated.View>
   
      </View>
    
  )
}

