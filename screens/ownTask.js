import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, TextInput, StyleSheet, Text, View, ScrollView } from 'react-native' 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {ListType, ListMode, ListGender} from '../components/Select'


export default function OwnTask({  }) {

const type = [
  {key: '1', value: 'Wahrheit', icon: <FontAwesome5 name="question" size={50} color="black" />},
  {key: '2', value: 'Pflicht', icon: <FontAwesome5 name="exclamation" size={50} color="black" />}
]
const mode = [
  {key: '1', value: 'Einfach', icon: <FontAwesome5 name="laugh-beam" size={50} color="black" />},
  {key: '2', value: 'Party', icon: <MaterialCommunityIcons name="party-popper" size={50} color="black" />},
  {key: '3', value: 'Hart!', icon: <FontAwesome5 name="hammer" size={50} color="black" />},
  {key: '4', value: 'Alle', icon: <Entypo name="circle" size={50} color="black" />}
]

const gender = [
  {key: '1', value: 'm', icon: <Fontisto name="male" size={50} color="black" />},
  {key: '2', value: 'w', icon: <Fontisto name="female" size={50} color="black" />},
  {key: '3', value: 'egal', icon: <Entypo name="circle" size={50} color="black" />}
]

const [WahrheitSelected, setWahrheitSelected] = useState(true)
const [PflichtSelected, setPflichtSelected] = useState(true)

const [EinfachSelected, setEinfachSelected] = useState(true)
const [PartySelected, setPartySelected] = useState(false)
const [HartSelected, setHartSelected] = useState(false)
const [allModesSelected, setAllModesSelected] = useState(false)

const [mSelected, setMSelected] = useState(true)
const [wSelected, setWSelected] = useState(false)
const [allGenderSelected, setallGenderSelected] = useState(false)

 useEffect(() => {
  if (WahrheitSelected === true) {
    setPflichtSelected(false)
  } else if (PflichtSelected === true) {
    setWahrheitSelected(false)
  }
 }, [])

useEffect(() => {
  if (EinfachSelected === true) {
    setPartySelected(false)
    setHartSelected(false)
    setAllModesSelected(false)
  } else if (PartySelected === true) {
    setEinfachSelected(false)
    setHartSelected(false)
    setAllModesSelected(false)
  } else if (HartSelected === true) {
    setEinfachSelected(false)
    setPartySelected(false)
    setAllModesSelected(false)
  } else if (allModesSelected === true) {
    setEinfachSelected(false)
    setPartySelected(false)
    setHartSelected(false)
  }
 }, [])

 useEffect(() => {
  if (mSelected === true) {
    setWSelected(false)
    setallGenderSelected(false)
  } else if (wSelected === true) {
    setMSelected(false)
    setallGenderSelected(false)
  } else if (allGenderSelected === true) {
    setMSelected(false)
    setWSelected(false)
  } 
 }, [])

 const WahrheitHandler = () => {
  setWahrheitSelected(true)
 }
 const PflichtHandler = () => {
  setPflichtSelected(true)
 }


 const EinfachHandler = () => {
  setEinfachSelected(true)
 }

 const PartyHandler = () => {
  setPartySelected(true)
 }

 const HartHandler = () => {
  setHartSelected(true)
 }

 const allModesHandler = () => {
  setAllModesSelected(true)
 }


 const mHandler = () => {
  setMSelected(true)
 }
 const wHandler = () => {
  setWSelected(true)
 }
 const allGendersHandler = () => {
  setallGenderSelected(true)
 }

  return(
    <View style={styles.container}>
    
      <View style={styles.eigeneAufgabe}>
        <TextInput 
        placeholder = 'Deine Aufgabe'
        style={styles.ownTask}>
        </TextInput>
      </View>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: 20}}></View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Typ</Text>
        </View>
        <FlatList 
          data={type}
          horizontal
          bounces={false}
          renderItem={({ item }) => (
            <ListType item={item} 
            WahrheitHandler={WahrheitHandler} PflichtHandler={PflichtHandler}
            WahrheitSelected = {WahrheitSelected} PflichtSelected = {PflichtSelected}
            />
          )}
        />

        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Modus</Text>
        </View>
        <FlatList 
          data={mode}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
           <ListMode 
           item={item} 
           EinfachHandler={EinfachHandler} PartyHandler={PartyHandler} HartHandler={HartHandler} allModesHandler={allModesHandler}
           
           />
          )}
        />

        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Geschlecht</Text>
        </View>
        <FlatList 
          data={gender}
          horizontal
          bounces={false}
          renderItem={({ item }) => (
            <ListGender item={item} mHandler={mHandler} wHandler={wHandler} allGendersHandler={allGendersHandler}/>
          )}
        />

      <View>
        <Text style={{color: 'white'}}>Aufgabe speichern</Text>
      </View>
      <View style={{height: 300}}></View>
    </ScrollView>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%'
  },
  header: {
    fontSize: 25,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
    padding: 5,
  },
  eigeneAufgabe: {
    borderColor: 'white',
    borderWidth: 2,
    height: 200,
    width: '80%',
    padding: 10,
    top: '25%'
  },
  ScrollView: {
    top: '29%',
  }
  })