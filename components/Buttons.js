import { View , Text, StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

const BackgroundButton = () => {
return(
    <View style= {styles.bg}></View>
)
}

export const HidePopButton = () => {
    return(
        <View style={styles.hidePopWrapper}>
            <BackgroundButton/>
            <Text style={styles.hidePopText}>✓</Text>
        </View>
    )
}

export const XButton = () => {
    return(
        <View style={styles.XButton}>
            <FontAwesome name="remove" size={60} color="#8370FF"/>
        </View>
    )
}

const styles = StyleSheet.create({
hidePopText: {
    fontSize: 128,
    fontFamily: 'Montserrat-Regular',
    color: 'white',
},
bg: {
    width: '75%', 
    height: '55%', 
    backgroundColor: '#8370FF', 
    position: 'absolute', 
    borderRadius: 10
},
hidePopWrapper: {
    justifyContent: 'center', 
    alignItems: 'center'
},
XButton: {
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
    height: '57%', 
    width: '155%', 
    borderRadius: 10
}
})