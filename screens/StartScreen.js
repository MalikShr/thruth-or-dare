import React, {useState, useEffect} from 'react';
import {  Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Starter from '../components/Starter';

export default function StartScreen({ navigation }) {
  

  const opacity = useState(new Animated.Value(0))[0]

  function start() {
    Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
    }).start()
  }

  function pulseGrowth() {
    Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
    }).start(() => {
      setTimeout(function() {pulseSmaller()}, 100);
    })
  }

  function pulseSmaller() {
    Animated.timing(opacity, {
        toValue: 0.95,
        duration: 600,
        useNativeDriver: true,
    }).start(() => {
      setTimeout(function() {pulseGrowth()}, 100);
    })
  }

    const navigateToProfil = () => {
        navigation.navigate('Profil');
    }


    useEffect(() => {
  setTimeout(function() {start()}, 700);
  setTimeout(function() {pulseGrowth()}, 1400);
 }, [])

  return(
    <View style={styles.container}>
        <Starter/>

        <Animated.View style={{position: 'absolute', bottom:'25%', opacity: opacity, transform:[{scale:opacity}]}}>
          <TouchableOpacity onPress={navigateToProfil}>
            <Text style={{color: 'black', fontSize: 80, fontFamily: 'Montserrat-Black', textAlign: 'center'}}>Spielen</Text>
          </TouchableOpacity>
        </Animated.View>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  playButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    fontSize: 55,
    fontFamily: 'Montserrat-Black',
  },
  
  })

