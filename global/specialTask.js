import { useEffect, useState } from "react";
import { View, Animated, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native"
import { HidePopButton} from "../components/Buttons"
import {specialTasks} from "../data/Aufgaben";


export default function specialTask( {
                                         runde,
                                         setShowGame,
                                         setShowSpecialTask,
                                         showSpecialTask,
    showGame
                             } ) {

    const scaleA = useState(new Animated.Value(0))[0]
    const { height } = useWindowDimensions();

    const [randomSpecialTask, setRandomSpecialTask] = useState(specialTasks[Math.floor(Math.random()*specialTasks.length)])

    //Bonus Aufgaben
    //Zufällige Auswahl ob Bonus Aufgabe nach Runde erscheint oder nicht --> Wenn RandomPicker = 1 erscheint eine bei 2,3 nicht
    const [RandomPicker, setRandomPicker] = useState(null)
    useEffect(() => {
        if (runde === 1) return;
        const RandomPickerArray = [
            1,
            2,
            3,
        ]
        setRandomPicker(() => RandomPickerArray[Math.floor(Math.random()*RandomPickerArray.length)])
    }, [runde])


    //Aufgaben einblenden Animation
    function fadeInPop() {
        Animated.timing(scaleA, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start()
    }

    //Aufgaben ausblenden Animation
    function fadeOutPop() {
        Animated.timing(scaleA, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start()
    }

    useEffect(() => {
        if (runde === 1) return;
        if (RandomPicker === 1) {
            setRandomSpecialTask(() => specialTasks[Math.floor(Math.random()*specialTasks.length)])
        } else {
            setRandomSpecialTask(() => null)
        }

    }, [RandomPicker])


    useEffect(() => {
        if (runde === 1) return;
        if (randomSpecialTask === null) return
        fadeInPop()

    }, [randomSpecialTask])

    function hidePopHandler() {
        setShowGame(true)
        setShowSpecialTask(false)
        fadeOutPop()
    }

    return(
        <Animated.View style= {[
            {
                alignItems: 'center',
                position: 'absolute',
                height: '83%',
                width: '100%',
                top: '18%',
                transform: [
                    {
                        scale: scaleA
                    }
                ],

            }
        ]}>

            <View style={styles.popWrapper}>
                <View style={{
                    bottom: '88%',
                    width: height,
                    height: height,
                    backgroundColor: 'white',
                    borderRadius: 86,
                    position: 'absolute',
                    transform: [{ rotate: '-45deg' }]
                }}
                />

                <View style={styles.headerWrapper}>
                    <Text style={styles.popHeader}> Bonus Aufgabe</Text>
                </View>
                <View style={styles.contentWrapper}>
                    <Text style={styles.runde}>Runde: {runde}</Text>
                    <Text style={styles.popText}>{randomSpecialTask}</Text>
                    <TouchableOpacity style={styles.popButtonWrapper} onPress={fadeOutPop}>
                        <View>
                            <HidePopButton/>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    popWrapper: {
        height: '80%',
        width: '100%',
        backgroundColor: '#ff4747',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    headerWrapper: {
        bottom: '90%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },

    popHeader: {
        color: 'black',
        fontSize: 60,
        textAlign: 'center',
        fontFamily: 'Montserrat-Black',
        top: '10%'
    },
    contentWrapper: {
        top: '10%'
    },
    popText: {
        color: 'white',
        paddingHorizontal: 20,
        fontSize: 40,
        textAlign: 'center',
        opacity: 1,
        fontFamily: 'Montserrat-Regular',
    },

    popButtonWrapper: {
        alignItems: 'center',
        top: '20%'
    },
    runde: {
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
    }
})