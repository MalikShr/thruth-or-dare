import React  from 'react';
import { useWindowDimensions, Animated, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {MenuHeader} from './Header'


export const MenuItem = ({ item, scrollX, setShowBG }) => {
  const { height, width } = useWindowDimensions();

    const YOLO = Animated.modulo(
      Animated.divide(
        Animated.modulo(scrollX, width),
      new Animated.Value(width)),
      1
    );
        const navigation = useNavigation()
      const scale = YOLO.interpolate({
        inputRange: [0, 0.5, 1],
      outputRange: [1, 0.6, 1]
    })
    const handleOpacity = () => {
      setShowBG(0)
    }

    const playHandler = () => {
      if (item.status === 'unready') {
        Alert.alert('Coming soon...')
        return;
      }
      else if (item.name === 'ownTask') {
        navigation.navigate('ownTask')
        return
        }
        navigation.navigate(item.name)
      }

        
  return(
    <Animated.View style={{
      opacity: scale,
      alignItems: 'center',
      transform: [{scale}] 
      }}
      >
      <View style={{width: width, flex:1, alignItems: 'center'}}>
          <View style={{right:'40%'}}>
            <MenuHeader scrollX={scrollX} handleOpacity={handleOpacity}/>
          </View>
          <View style={{bottom: '9%'}}><Text>{item.icon}</Text></View>
            <View style={styles.itemWrapper}>
              <Text style={styles.itemText}>{item.component}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text> 
              <TouchableOpacity style={styles.playButton} onPress={() => {playHandler()}}>
                <Text style={styles.playButtonText}>{item.buttonText}</Text>
              </TouchableOpacity>
            </View>
      </View>
    </Animated.View>
 
  )}


  export const Square = ({scrollX, showBG}) => {
    const { height, width } = useWindowDimensions();
    const YOLO = Animated.modulo(
      Animated.divide(
        Animated.modulo(scrollX, width),
      new Animated.Value(width)),
      1
    );

      const rotate = YOLO.interpolate({
        inputRange: [0, 0.5, 1],
      outputRange: ['35deg', '0deg', '35deg']
    })
        const translateX = YOLO.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -height, 0]

        })
  
    return(
    <Animated.View style={{
      left: -height * 0.3,
      bottom: '75%', 
      width: height,
      height: height, 
      backgroundColor: 'white', 
      borderRadius: 86, 
      position: 'absolute',
      opacity: showBG,
      transform: [
      {
        rotate,
      }, 
      {
        translateX,
      }
      ]}}
      />
    )    
  }

  export const Backdrop = ({scrollX}) => {
    const { width } = useWindowDimensions();
    const bgs = ['#F199FF', '#BC6BFF', '#8050FF', '#4600FF']
    const backgroundColor = scrollX.interpolate({
      inputRange: bgs.map((_, i) => i * width),
      outputRange: bgs.map((bg) => bg)
    })

    return(
      <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
        backgroundColor,
        },
      ]}
      />
    )
  }

const styles = StyleSheet.create({
  xButton: {
    alignItems: 'flex-end',
    padding: 10,  
  },
  modalText: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'JetBrainsMono-Regular',
    textAlign: 'center',
    marginHorizontal: 15,
    bottom: '18%'
  },
  select: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'JetBrainsMono-Regular',
    padding: 10
  },
  button: {
    width: '100%', 
    alignItems: 'center'
  },
  line: {
    height: 2, 
    width: '100%', 
    backgroundColor: 'white', 
    opacity: 0.7, 
},
  itemWrapper: {
    top: '3%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 20
  },
  itemText: {
    fontSize: 60,
    fontWeight: '800',
      textAlign: 'left',
      color: 'white',
      marginVertical: 5,
      fontFamily: 'Montserrat-Black',
    },
    itemDescription: {
      fontSize: 30,
      fontWeight: '800',
      textAlign: 'left',
      color: 'white',
      marginBottom: 30,
      fontFamily: 'Montserrat-Regular',
    },
    playButton: {
      backgroundColor: 'white',
      padding: 30,
      borderRadius: 20,
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    playButtonText: {
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'Montserrat-Black',
    }
  })
