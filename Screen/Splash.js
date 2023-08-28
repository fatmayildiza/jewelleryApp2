import { StyleSheet, Text, View,Image, Animated} from 'react-native';
import React from 'react'

const Splash = () => {

    const imageScale = new Animated.Value(0.1);
Animated.timing (imageScale,{
    toValue:1,
    duration:1000,
    useNativeDriver:true, 
}).start();

  return (
    <View style= {styles.container}>
  <Animated.Image
    source={require('../assets/ring1.png')}
    style= {[styles.image, {transform: [{scale:imageScale}]}]}
  />

    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',

    },

    image:{
        width:400,
        height:400,

    },
});