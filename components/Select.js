import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const ListType = ({item, WahrheitHandler, PflichtHandler, WahrheitSelected, PflichtSelected}) => {
    
    const handle = () => {
        if (item.value === 'Wahrheit') {
            WahrheitHandler()
        } if (item.value === 'Pflicht'){
            PflichtHandler()
        }
    }
    
    return(
    <TouchableOpacity 
    style={styles.container}
    >
        <View style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 80,
        height: 80,
        }}>
            <Text style={styles.icon}>{item.icon}</Text>
            
        </View>
        <Text style={styles.text}>{item.value}</Text>
    </TouchableOpacity>
    )
}

export const ListMode = ({item}) => {
   
    return(
    <TouchableOpacity 
    style={styles.container}
    >
        <View style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 80,
        height: 80,
        }}>
            <Text style={styles.icon}>{item.icon}</Text>
            
        </View>
        <Text style={styles.text}>{item.value}</Text>
    </TouchableOpacity>
    )
}

export const ListGender = ({item}) => {
   
    return(
    <TouchableOpacity 
    style={styles.container}
    >
        <View style={{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 80,
        height: 80,
        }}>
            <Text style={styles.icon}>{item.icon}</Text>
            
        </View>
        <Text style={styles.text}>{item.value}</Text>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Montserrat-Black'
    },
    item: {
        marginHorizontal: 12,
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
    scrollView: {
        width: '100%'
    }
})