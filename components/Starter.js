import React, {useState, useEffect} from "react";
import { Animated, View, Text, StyleSheet, useWindowDimensions } from "react-native"
import DropShadow from 'react-native-drop-shadow'

export default function Starter() {
    const {height, width} = useWindowDimensions();
    const translateY = useState(new Animated.Value(0))[0]
    const opacity = useState(new Animated.Value(0))[0]
  
    function onTop() {
      Animated.timing(translateY, {
          toValue: -90,
          duration: 800,
          useNativeDriver: true,
      }).start()
    }
    
    function opacityStart() {
      Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
      }).start()
    }




    useEffect(() => {
        opacityStart()
        onTop()
       }, [])

    return(
    <Animated.View style={{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%', 
        width: '100%',
        opacity,
        transform: [{translateY}]
    }}>
        
        <View style={{height: '50%', width: '100%', backgroundColor: '#151515', position: 'absolute', top: '0%'}}></View>
        <View style={styles.red}></View>
        
        <DropShadow style={{
            width: '75%', height: '35%', borderRadius: 40, borderWidth: 10, 
            borderColor: '#ff4747', shadowColor:"#000", shadowOffset: { width:0, height:3 }, 
            shadowOpacity:0.3, shadowRadius:5, elevation:10     
        }}>
        
            <View style={{height: '35%', backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.W}>W</Text>
            </View>

            <View style={styles.curtain}>
                <Text style={styles.O}>O</Text>
            </View>

            <View style={{height: '35%', backgroundColor: '#151515', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.P}>P</Text>
            </View>
        </DropShadow>

    </Animated.View>
    )
}

const styles = StyleSheet.create({
    W: {
       fontSize: 100,
       fontFamily: 'Montserrat-Black',
       color: '#151515',
       position: 'absolute'
    },
    O: {
        fontSize: 100,
        fontFamily: 'Montserrat-Black',
        color: 'white',
        position: 'absolute'
         },

    P: {
        fontSize: 100,
        fontFamily: 'Montserrat-Black',
        color: 'white',
        position: 'absolute'
         },
    red: {
        height: '10%', 
        width: '100%',
        backgroundColor: '#ff4747', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'absolute',
    },
    curtain: {
        height: '30%', 
        backgroundColor: '#ff4747', 
        justifyContent: 'center', 
        alignItems: 'center'},

})