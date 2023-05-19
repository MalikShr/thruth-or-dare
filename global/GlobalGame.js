import React, { useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native'
import { Players, GendersF, GendersM,  } from '../screens/Profil'
import Pop from './Pop';

import { FontAwesome5, FontAwesome } from '@expo/vector-icons'; 
import * as Speech from 'expo-speech'
import SpecialTask from './specialTask';
import Game from './Game';
import {
    wahrheitMincludeFEinfach,
    wahrheitMincludeMEinfach,
    wahrheitFincludeFEinfach,
    wahrheitFincludeMEinfach,
    pflichtMincludeMEinfach,
    pflichtMincludeFEinfach,
    pflichtFincludeFEinfach,
    pflichtFincludeMEinfach
} from "../data/Aufgaben";

export default function GlobalGame({ WahrheitsAufgabenM, WahrheitsAufgabenF, PflichtAufgabenM, PflichtAufgabenF, Mode }) {

    const [showGame, setShowGame] = useState(true)
    const [showSpecialTask, setShowSpecialTask] = useState(false)
    const [showXButton, setShowXButton] = useState(true)

    const [Aufgabe, setAufgabe] = useState('')

    const [spielerNr, setSpielerNr] = useState(0)
    const [username, setUsername] = useState(Players[spielerNr].text)
  
    const [runde, setRunde] = useState(1)
    const [colorRunde, setRundeColor] = useState(true)
 
    const [FilteredGendersM, setFilteredGendersM] = useState(GendersM.filter(player => player !== Players[spielerNr]))
    const [FilteredGendersF, setFilteredGendersF] = useState(GendersF.filter(player => player !== Players[spielerNr]))

    const [randomNameM, setRandomNameM] = useState(FilteredGendersM[Math.floor(Math.random()*FilteredGendersM.length)])
    const [randomNameF, setRandomNameF] = useState(FilteredGendersF[Math.floor(Math.random()*FilteredGendersF.length)])

    const [WOPtitle, setWOPtitle] = useState('')
    const [WOPicon, setWOPicon] = useState('')

    const [mute, setMute] = useState(true)
    const [speak, setSpeak] = useState(<FontAwesome name="volume-off" size={70} color="white" />)

    const wahrheitsAufgabenM_length = WahrheitsAufgabenM.length
    const wahrheitsAufgabenF_length = WahrheitsAufgabenF.length
    const PflichtAufgabenM_length = PflichtAufgabenM.length
    const PflichtAufgabenF_length = PflichtAufgabenF.length

    function wahrheitText () {
        setWOPtitle('Wahrheit')
        setWOPicon(<FontAwesome5 name="question" size={90} color="black" />)
    }

    
    function pflichtText() {
        setWOPtitle('Pflicht')
        setWOPicon(<FontAwesome5 name="exclamation" size={90} color="black" />)
    }

    function countPlayer() {
        if (spielerNr < Players.length - 1) {
            setSpielerNr(prev => prev + 1)    
        } else if (spielerNr === Players.length - 1) {
            setSpielerNr(() => 0)
            setRunde(prev => prev + 1)
            setRundeColor(prev => !prev)
        }
   }

    useEffect(() => {
        setFilteredGendersM(GendersM.filter(player => player !== Players[spielerNr]))
        setFilteredGendersF(GendersF.filter(player => player !== Players[spielerNr]))
        setUsername(Players[spielerNr].text)
    }, [spielerNr])

    useEffect(() => {
        setRandomNameM(FilteredGendersM[Math.floor(Math.random()*FilteredGendersM.length)])
    }, [FilteredGendersM])

    useEffect(() => {
        setRandomNameF(FilteredGendersF[Math.floor(Math.random()*FilteredGendersF.length)])
    }, [FilteredGendersF])


   function pushAufgaben(AufgabenType, Type) {
        for (let x=0; x < Type.length; x++) {
            AufgabenType.push(Type[x])
        }
   }


    //Aufgaben
    function wahrheitAufgabeM() {
        if (Players[spielerNr].gender !== 'm') return;

        if (GendersM.length > 1) {
            switch (Mode) {
                case "Einfach":
                    pushAufgaben(WahrheitsAufgabenM, wahrheitMincludeMEinfach(randomNameM))
                    break
                case "Party":
                    pushAufgaben(WahrheitsAufgabenM, wahrheitMincludeMEinfach(randomNameM))
                    break
                case "Hart":
                    pushAufgaben(WahrheitsAufgabenM, wahrheitMincludeMEinfach(randomNameM))
                    break
            }
        }

        if (GendersF.length > 0) {
            switch (Mode) {
                case "Einfach":
                    pushAufgaben(WahrheitsAufgabenM, wahrheitMincludeFEinfach(randomNameF))
                    break
                case "Party":
                    pushAufgaben(WahrheitsAufgabenM, wahrheitMincludeFEinfach(randomNameF))
                    break
                case "Hart":
                    pushAufgaben(WahrheitsAufgabenM, wahrheitMincludeFEinfach(randomNameF))
                    break
            }
        }

            let AufgabeM = ''
                AufgabeM = username + WahrheitsAufgabenM[Math.floor(Math.random()*WahrheitsAufgabenM.length)] 
                
            setAufgabe(AufgabeM)
            WahrheitsAufgabenM.length = wahrheitsAufgabenM_length
    }

    function wahrheitAufgabeF() {
        if (Players[spielerNr].gender !== 'f') return;

        if (GendersF.length > 1) {
            switch (Mode) {
                case "Einfach":
                    pushAufgaben(WahrheitsAufgabenF, wahrheitFincludeFEinfach(randomNameF))
                    break
                case "Party":
                    pushAufgaben(WahrheitsAufgabenF, wahrheitFincludeFEinfach(randomNameF))
                    break
                case "Hart":
                    pushAufgaben(WahrheitsAufgabenF, wahrheitFincludeFEinfach(randomNameF))
                    break
            }

        }

        if (GendersM.length > 0) {
            switch (Mode) {
                case "Einfach":
                    pushAufgaben(WahrheitsAufgabenF, wahrheitFincludeMEinfach(randomNameM))
                    break
                case "Party":
                    pushAufgaben(WahrheitsAufgabenF, wahrheitFincludeMEinfach(randomNameM))
                    break
                case "Hart":
                    pushAufgaben(WahrheitsAufgabenF, wahrheitFincludeMEinfach(randomNameM))
                    break
            }
        }

            let AufgabeF = ''
                AufgabeF = username + WahrheitsAufgabenF[Math.floor(Math.random()*WahrheitsAufgabenF.length)] 
            setAufgabe(AufgabeF)
            WahrheitsAufgabenF.length = wahrheitsAufgabenF_length
    }


    function pflichtAufgabeM() {
        if (Players[spielerNr].gender !== 'm') return;
        if (GendersM.length > 1) {
            switch (Mode) {
                case "Einfach":
                    pushAufgaben(PflichtAufgabenM, pflichtMincludeMEinfach(randomNameM))
                    break
                case "Party":
                    pushAufgaben(PflichtAufgabenM, pflichtMincludeMEinfach(randomNameM))
                    break
                case "Hart":
                    pushAufgaben(PflichtAufgabenM, pflichtMincludeMEinfach(randomNameM))
                    break
            }
        }

        if (GendersF.length > 0) {
            switch (Mode) {
                case "Einfach":
                    pushAufgaben(PflichtAufgabenM, pflichtMincludeFEinfach(randomNameF))
                    break
                case "Party":
                    pushAufgaben(PflichtAufgabenM, pflichtMincludeFEinfach(randomNameF))
                    break
                case "Hart":
                    pushAufgaben(PflichtAufgabenM, pflichtMincludeFEinfach(randomNameF))
                    break
            }
        }
            let AufgabeM = ''
                AufgabeM = username + PflichtAufgabenM[Math.floor(Math.random()*PflichtAufgabenM.length)] 
                
            setAufgabe(AufgabeM)
            PflichtAufgabenM.length = PflichtAufgabenM_length
    }


    function pflichtAufgabeF() {
        if (Players[spielerNr].gender !== 'f') return;
        
        if (GendersF.length > 1) {
            switch (Mode) {
                case "Einfach":
                    pushAufgaben(PflichtAufgabenF, pflichtFincludeFEinfach(randomNameF))
                    break
                case "Party":
                    pushAufgaben(PflichtAufgabenF, pflichtFincludeFEinfach(randomNameF))
                    break
                case "Hart":
                    pushAufgaben(PflichtAufgabenF, pflichtFincludeFEinfach(randomNameF))
                    break
            }
        }
        if (GendersM.length > 0) {
            switch (Mode) {
                case "Einfach":
                    pushAufgaben(PflichtAufgabenF, pflichtFincludeMEinfach(randomNameM))
                    break
                case "Party":
                    pushAufgaben(PflichtAufgabenF, pflichtFincludeMEinfach(randomNameM))
                    break
                case "Hart":
                    pushAufgaben(PflichtAufgabenF, pflichtFincludeMEinfach(randomNameM))
                    break
            }
        }

            let AufgabeF = ''
                AufgabeF = username + PflichtAufgabenF[Math.floor(Math.random()*PflichtAufgabenF.length)] 
                
            setAufgabe(AufgabeF)
            PflichtAufgabenF.length = PflichtAufgabenF_length
    }

    //Aufgaben zeigen
    function handleShow() {
        setShowXButton(true)
        setShowGame(false)
    } 


//Bestrafung
function hideXButton() {
    let punishArr = null
        punishArr = Players[spielerNr].punish
    let lastPunish = null
        lastPunish = punishArr[punishArr.length - 1]

    if ((lastPunish == 0)|| (lastPunish == 1)|| (lastPunish == 2)) {
        punishArr.push(lastPunish + 1)
    }
    if (lastPunish == 3) {
        punishArr.length = 2
    }
    let Strafe = null
        if (punishArr[punishArr.length - 1] === 1) {
            Strafe = Players[spielerNr].text + ', trinke ' + 'einen' + ' Shot!'
        } 
        else if (punishArr[punishArr.length - 1] === 2){
            Strafe = Players[spielerNr].text + ', trinke ' + 'zwei' + ' Shots!'
        } 
        else if (punishArr[punishArr.length - 1] === 3){
            Strafe = Players[spielerNr].text + ', trinke ' + 'drei' + ' Shots!'
        }
        setAufgabe(Strafe)
    }

    //Aufgagen vorlesen
    function speakAufgabe() {
        const speakText = Aufgabe
        const options = {
            language: "de",
            pitch: 1.2,
            rate: 0.95,
        }
        Speech.speak(speakText, options)
    }
  
    //Überprüfung ob Aufgaben bereits vorgelesen werden
    function checkPressed() {
        if (mute === false) {
            setSpeak(<FontAwesome name="volume-off" size={70} color="white" />)
            setMute(true)
            return
        }
            setSpeak(<FontAwesome name="volume-up" size={70} color="white"/>)
            setMute(false)
    }

    //Status von Mute automatisch ändern beim antippen des Icons
    useEffect(() => {
        if (mute === true) return;
            speakAufgabe()
       }, [Aufgabe])


    return(
        <View style={styles.container}>
            <Game
                wahrheitAufgabeM={wahrheitAufgabeM} pflichtAufgabeM={pflichtAufgabeM} wahrheitAufgabeF={wahrheitAufgabeF} pflichtAufgabeF={pflichtAufgabeF}
                handleShow={handleShow} wahrheitText={wahrheitText} pflichtText={pflichtText}
                Mode={Mode} colorRunde={colorRunde} username={username}
                runde={runde} checkPressed={checkPressed} speak={speak} showGame={showGame}
            />
            <Pop 
                hideXButton={hideXButton} countPlayer={countPlayer} 
                showXButton={showXButton} setShowXButton={setShowXButton} 
                WOPicon={WOPicon} WOPtitle={WOPtitle} Aufgabe={Aufgabe} 
                setShowGame={setShowGame} showGame={showGame}
                setShowSpecialTask = {setShowSpecialTask} showSpecialTask = {showSpecialTask}
            />

            <SpecialTask 
                runde={runde} 
                setShowGame = {setShowGame}
                showGame={showGame}
                setShowSpecialTask = {setShowSpecialTask}
                showSpecialTask = {setShowSpecialTask}
                />

        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#151515',
    
},
headerText: {
    color: 'white',
    fontSize: 40,
    top: '3%'
},
usernameWrapper: {
    flexDirection: 'row', 
    justifyContent: 'center',  
    top: '32%'
},
username: {
    color: 'white',
    fontSize: 38,
    fontFamily: 'Montserrat-Black',
    },
Aufgabe: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center'
},

})



