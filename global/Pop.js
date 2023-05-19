import { useEffect, useState } from "react";
import { View, Animated, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native"
import { HidePopButton, XButton } from "../components/Buttons"


export default function Pop( {
    hideXButton, 
    countPlayer, 
    showXButton,
    WOPicon,
    WOPtitle,
    Aufgabe, 
    setShowGame, 
    setShowXButton,
    showGame,
    showSpecialTask,
    } ) {

    const scaleA = useState(new Animated.Value(0))[0]
    const hidePop_PROPS = {
        style: showXButton ? styles.hidePop0 : styles.hidePop1
    }
    const { height } = useWindowDimensions();

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
            if ((showGame === false)&& (showSpecialTask === false)) {
                fadeInPop()
            }
        }, [showGame])

        function XButtonHandler() {
            hideXButton() 
            setShowXButton(false)
        }

        function hidePopHandler() {
            setShowGame(true)
            fadeOutPop()
            countPlayer()
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
            
                <View style={styles.WOPIcon}>
                    <Text style={styles.popIcon}>{WOPicon}</Text>
                    <Text style={styles.popHeader}>{WOPtitle}</Text>
                </View>
                <Text style={styles.popText}>{Aufgabe}</Text>
                <View style={styles.popButtonsWrapper}>
                    {showXButton? (
                        <TouchableOpacity style = {styles.XButtonWrapper} onPress={XButtonHandler}>
                            <XButton />
                        </TouchableOpacity>
                    ) : ( 
                        <View></View>
                    )}

                    <TouchableOpacity {...hidePop_PROPS} onPress={hidePopHandler}>
                        <HidePopButton/>
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
        backgroundColor: 'rgba(4, 0, 27, 0.8)',
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    
    popHeader: {
        color: 'black',
        fontSize: 68,
        top: '5%',
        fontFamily: 'Montserrat-Black',
    },
    popIcon: {
        top: '120%'
    },
    popText: {
        color: 'white',
        paddingHorizontal: 20,
        fontSize: 30,
        textAlign: 'center',
        opacity: 1,
        fontFamily: 'Montserrat-Regular',
        
    },
WOPIcon: {
    bottom: '90%', 
    position: 'absolute', 
    justifyContent: 'center', 
    alignItems: 'center'
},
popButtonsWrapper: {
    flexDirection:'row', 
    bottom:'13%', 
    position: 'absolute'
},
XButtonWrapper: {
    right: '22%', 
    top: '16%' 
},
hidePop0: {
    bottom: '3.5%',
    left: '22%'
},
hidePop1: {
    top: '3.5%',
},
})