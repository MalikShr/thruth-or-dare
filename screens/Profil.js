import React, { useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, TextInput } from 'react-native'
import PlayerLine from '../components/PlayerLine'
import { Players, GendersM, GendersF } from '../data/Aufgaben';

export default function Profil({navigation}) {
  const [players, setPlayers] = useState([])
  const [text, setText] = useState('')
  const [gender, setGender] = useState('m')
  const scaleMale = useState(new Animated.Value(1))[0]
  const scaleFemale = useState(new Animated.Value(1))[0]

  const pressHandler = (key) => {
    setPlayers((prevPlayers) =>{
      
      return prevPlayers.filter(player => player.key !== key)
    })
  }

  const anotherFunc = (val) => {
    setText('')
    if (players.length === 0) return;
    const filteredData = players.filter(item => {
      return item.text === val.trim();
    });
    if (filteredData.length === 0) {
      return;
    } 

    Alert.alert('Spielernamen dürfen nicht doppelt vergeben werden')
      setPlayers((prevPlayers) =>{
        return prevPlayers = [...new Set(players)]
      })
    }
  
  const submitHandler = (text, gender) => {
    if (!text.trim())  {
      Alert.alert('Spielernamen dürfen keine leere Eingabe sein!')
      return;
    } else {
      setPlayers((prevPlayers) => {
        return[
          ...prevPlayers,
          { text: text.trim(), gender: gender, punish: [0], key: Math.random().toString() },
        ]  
      })
      Keyboard.dismiss()
    }
  }

  const flatListRef = useRef();
  const playHandler = () => {

    if (players.length > 1) {
      const gendersM = players.filter(item => {
        return item.gender === 'm'
      })
      const gendersF = players.filter(item => {
        return item.gender === 'f'
      })

    Players.length = 0
    GendersM.length = 0
    GendersF.length = 0
    for (let i=0; i < players.length; i++) {
      Players.push(players[i])
    }
    for (let j=0; j < gendersM.length; j++) {
      GendersM.push(gendersM[j])
    }
    for (let k=0; k < gendersF.length; k++) {
      GendersF.push(gendersF[k])
    }
    navigation.navigate('Menu')
  }
  else {
    Alert.alert('Es müssen mindestens 2 Spieler hinzugefügt werden!')
  }
}
  const [M, setM] = useState(true)
  const setGenderM = () => {
    setGender(() => 'm')
  }
  const setGenderF = () => {
    setGender(() => 'f')
  }

  useEffect(() => {
    if (gender === 'f') {
      setM(false)
      scaleMaleSmaller()
      scaleFemaleBigger()
      return;
    }
      setM(true)
      scaleFemaleSmaller()
      scaleMaleBigger()
  }, [gender])



  function scaleMaleBigger() {
    Animated.timing(scaleMale, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
    }).start()
  }
  function scaleMaleSmaller() {
    Animated.timing(scaleMale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
    }).start()
  }
  function scaleFemaleBigger() {
    Animated.timing(scaleFemale, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
    }).start()
  }
  function scaleFemaleSmaller() {
    Animated.timing(scaleFemale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
    }).start()
  }

  const scrollToBottom = () => {
    if(players.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }

  };

return (
    <View style={styles.container}>
        
        <View style={styles.inputWrapper}>

            
          <View style={{flexDirection:'row'}}>
            <Animated.View style={{
              backgroundColor: M? '#00BBC7' : '#CACACA', 
              width: 55, 
              height: 55, 
              borderRadius: 30, 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginLeft: 12,
              transform: [{scale:scaleMale}]
              }}>

            <TouchableOpacity 
              hitSlop={{top: 20, bottom: 20, left: 50, right: 8}}
              onPress={() =>{setGenderM()}}>

              <Text style={{
                fontSize: 48,
                fontFamily: 'JetBrainsMono-Regular',
                color: M? 'white' : 'black'
              }}>♂</Text>

            </TouchableOpacity>

          </Animated.View>

          <Animated.View style={{
            backgroundColor: !M? '#D43AFC': '#CACACA', 
            width: 55, height: 55, 
            borderRadius: 30, 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginHorizontal: 10,
            transform: [{scale:scaleFemale}]
            }}>

            <TouchableOpacity 
            hitSlop={{top: 20, bottom: 20, left: 8, right: 50}}
            onPress={() =>{setGenderF()}}>

              <Text style={{
                fontSize: 48,
                fontFamily: 'JetBrainsMono-Regular',
                color: !M? 'white' : 'black'
              }}>♀</Text>

            </TouchableOpacity>

          </Animated.View>
          </View>
          <TextInput
                style={styles.inputName}
                placeholder='Spieler'
                onChangeText={val => setText(val)}
                value={text}
                maxLength={11}
                hitSlop={{top: 30, bottom: 30, left: 8, right: 5}}
                />

            <TouchableOpacity 
            style={styles.addButton}
            onPress={() => {submitHandler(text, gender), anotherFunc(text)}}>
              <Text style={styles.addButtonText}>+</Text>  
            </TouchableOpacity>
        </View>
        <View style={styles.list}>

          <FlatList
          ref={flatListRef}
          data={players}
          onContentSizeChange={scrollToBottom}
          renderItem={({ item }) => (
            <PlayerLine item= {item} pressHandler = {pressHandler} players={players}/>
          )
        }
          />
        </View>
        <View style={{alignItems: 'center', top: '16%'}}>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={playHandler}>
            <Text style={styles.playButtonText}>Spielen</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#151515',
},
content: {
  padding: 40,
},
list: {
  marginVertical: 20,
  height: '55%',
  width: '100%',
  top: '18%',
},
inputWrapper: {
  backgroundColor: 'white',
    width: '100%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: '10%'
},
inputName: {
  fontSize: 28,
    fontFamily: 'JetBrainsMono-Regular',
    width: '40%',
    borderColor: 'black',
},

addButton: {
  borderRadius: 10,
    backgroundColor: '#80D662',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,

},
addButtonText: {
  fontSize: 60,
  textAlign: 'center',
  color: 'white',
  bottom: '18%',
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.15,
  shadowRadius: 3,
},
playButton: {
  backgroundColor: '#7BFF90',
  alignItems: 'center',
  borderRadius: 10,
  width: '85%',
  top: '10%',
  height: 120,
  justifyContent: 'center',
},
playButtonText: {
  fontSize: 45,
  fontFamily: 'Montserrat-Black',
  color: 'white',
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.25,
  shadowRadius: 3,
  transform: [{ rotate: '-3deg' }]
},
})
export { Players, GendersF, GendersM }