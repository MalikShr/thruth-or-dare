import WopButtons from './wopButtons';
import Ball from '../components/Ball';
import {GameHeader} from '../components/Header'
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Game( {
    wahrheitAufgabeM,
    pflichtAufgabeM,
    wahrheitAufgabeF,
    pflichtAufgabeF,
    handleShow,
    wahrheitText,
    checkPressed,
    pflichtText,
    Mode,
    colorRunde,
    username,
    runde,
    speak,
    showGame,
    } ) {

    if (showGame === false) {
        return null
    } 
    
    return(
            <View>
                <View style={styles.headerWrapper}>
                    <View style= {styles.gameHeader}><GameHeader/></View>
                    <View style= {styles.modeWrapper}>
                        <Text style={styles.modeText}>{Mode}</Text>
                    </View>

                    <View style={styles.speakerWrapper}>
                        <TouchableOpacity onPress={() => checkPressed()}>
                            <Text>{speak}</Text>
                        </TouchableOpacity>
                    </View>   
                </View>

                <View>
                    <View style = {styles.contentWrapper}>

                        <View style={{backgroundColor: colorRunde? '#FFE9ED' : '#8300C1', top: '70%', width: '70%', borderBottomRightRadius:15, borderTopRightRadius:15}}>
                            <Text style={{
                                color: colorRunde? 'black': 'white', 
                                fontFamily: 'JetBrainsMono-Regular',
                                fontSize: 35,
                                padding: 5,
                                right: '5%',
                                shadowColor: '#171717',
                                shadowOffset: {width: -1, height: 2},
                                shadowOpacity: 0.35,
                                shadowRadius: 2,
                                }}> Runde: {runde}
                            </Text>
                        </View>

                        <View style={styles.usernameWrapper}>
                            <Text style={styles.username}>{username}</Text>
                            <Ball/>
                        </View>    

                    </View>

                    <View style={styles.buttonsWrapper}>
                        <WopButtons 
                            wahrheitAufgabeM={wahrheitAufgabeM} pflichtAufgabeM={pflichtAufgabeM} 
                            wahrheitAufgabeF={wahrheitAufgabeF} pflichtAufgabeF={pflichtAufgabeF}
                            wahrheitText={wahrheitText} pflichtText={pflichtText}
                            handleShow = {handleShow} 
                            />
                    </View>    

                </View>
            </View>  

)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#151515',
        
},
headerWrapper: {
    width: '100%', 
    flexDirection: 'row', 
    bottom: '16%', 
    justifyContent: 'space-between', 
    zIndex: 100
},
gameHeader: {
    marginLeft: 10
},
modeWrapper: {
    marginRight: 20, 
    top:'1%', 
    width: '55%', 
    alignItems: 'center'
},
modeText: {
    color:'white', 
    fontSize: 50, 
    fontFamily: 'Montserrat-Black'
},
speakerWrapper: {
    marginRight: 50, 
    top:'1%'
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
contentWrapper: {
    bottom: '17%'
},
buttonsWrapper: {
    bottom: '65%'
},

})





