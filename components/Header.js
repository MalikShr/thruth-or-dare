import { TouchableOpacity, StyleSheet, View} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export const MenuHeader = ({handleOpacity}) => {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => {handleOpacity(), setTimeout(function() {navigation.navigate('Profil')}, 1)}}>
                    <Ionicons name="ios-arrow-back-outline" size={65} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const GameHeader = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate('Menu')}}
>
                    <Ionicons name="ios-arrow-back-outline" size={65} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',   
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 60,
        color: 'black',
        letterSpacing: 1,
        textAlign: 'left',
    }
})