import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function WopButtons({ handleShow, wahrheitAufgabeM, wahrheitAufgabeF, pflichtAufgabeM,
  pflichtAufgabeF, wahrheitText, pflichtText}) {


    function wahrheitHandler() {
        wahrheitText() 
        wahrheitAufgabeM()
        wahrheitAufgabeF()
        handleShow()
    }
    function pflichtHandler() {
        pflichtText(), 
        pflichtAufgabeM(), 
        pflichtAufgabeF(), 
        handleShow()
    }
    
    return(
      <View style={styles.ButtonsWrapper}>
        <TouchableOpacity style={styles.wahrheitB} onPress={wahrheitHandler}>
          <Text style={styles.wahrheitBtext}>Wahrheit</Text>
        </TouchableOpacity>
        <Text style={styles.oder}>---ODER---</Text>
        <TouchableOpacity style={styles.pflichtB} onPress={pflichtHandler}>
          <Text style={styles.pflichtBtext}>Pflicht</Text>
        </TouchableOpacity>
      </View>    
  )
}

const styles = StyleSheet.create({
    ButtonsWrapper: {
      top: '90%',
      alignItems: 'center',
      justifyContent: 'space-around',

  },
  oder: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Montserrat-Black',
  },
    wahrheitB: {
        backgroundColor: '#E684FF',
        borderRadius: 10,
        width: '90%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    pflichtB: {
        backgroundColor: '#FF4747',
        borderRadius: 10,
        width: '90%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    wahrheitBtext: {
      color: '#FFFFFF',
      fontSize: 48,
      fontFamily: 'Montserrat-Black',

      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.25,
      shadowRadius: 3,

      transform: [{ rotate: '-3deg' }],

    },
    pflichtBtext: {
      color: '#FFFFFF',
      fontSize: 48,
      fontFamily: 'Montserrat-Black',

      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.25,
      shadowRadius: 3,

      transform: [{ rotate: '-3deg' }]
    },


})