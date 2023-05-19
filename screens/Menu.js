import React, {useState} from 'react';
import { Animated, StyleSheet, View } from 'react-native'
import slides from '../data/Slides'
import { MenuItem, Backdrop, Square } from '../components/MenuComponents'
import Paginator from '../components/paginator'

export default function Menu() {

  const scaleModal = useState(new Animated.Value(0))[0]

  const scrollX = React.useRef(new Animated.Value(0)).current
  const [showBG, setShowBG] = useState(1)
  return(
    <View style={styles.container}>
    
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} showBG={showBG}/>
      
      <View style={{top: '7%',alignItems: 'center'}}>
        
        <Animated.FlatList
          data={slides}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false}
          )}
          keyExtractor ={(item) => item.id}
          renderItem={({ item, index }) => <MenuItem 
          item={item} index={index} 
          scrollX={scrollX} showBG={showBG} setShowBG={setShowBG}/>}
        />
        
        <Paginator data={slides} scrollX = {scrollX}/>
        
        
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0
  },
  Back: {
    color: 'white',
    bottom: '30%'
  },
  
})