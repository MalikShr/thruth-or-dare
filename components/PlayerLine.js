import React, {useState} from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 


export default function PlayerLine({ item, pressHandler }) {

const [M, setM] = useState(true)
const [icon, setIcon] = useState(<Fontisto name="male" size={32} color="white" />)
const scaleLine = useState(new Animated.Value(1))[0]

function checkGender() {
    if (item.gender == 'f') {
        setM(false)
        setIcon(<Fontisto name="female" size={32} color="white" />)
        return
    }
    setM(true)
    setIcon(<Fontisto name="male" size={32} color="white" />)
}


const genderProps = {
    style: M ? styles.PlayerLineM : styles.PlayerLineF
  };

  function handleScaleLine() {
    Animated.timing(scaleLine, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
    }).start()
  }

return (  
    <Animated.View style={{
        paddingTop: 18,
        paddingHorizontal: 10,
        justifyContent: 'space-between', 
        transform: [{scale: scaleLine}]  
     }}>
        <View {...genderProps} onLayout={() => checkGender()}>
            <View style={{flexDirection: 'row'}}>
                <Text style= {{left: '15%', top: '1%'}}> {icon} </Text>
                <Text style={styles.item}> {item.text} </Text>
            </View>
                <TouchableOpacity 
                    style={styles.removeItemWrapper}
                    onPress={() => {handleScaleLine(),  setTimeout(function() {pressHandler(item.key)}, 250);}}
                    hitSlop={{top: 5, bottom: 5, left: 20, right: 20}}> 
                    <FontAwesome name="remove" size={45} color="white" />
                </TouchableOpacity>
        </View>
    </Animated.View>
)
}

const styles = StyleSheet.create({
 PlayerLineM: {
    backgroundColor: '#00BBC7',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
},
PlayerLineF: {
    backgroundColor: '#D43AFC',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
},
item: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'JetBrainsMono-Regular',
},
removeItemWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 2,

},
removeItem: {
    fontSize: 40,
    color: 'white',


},

})