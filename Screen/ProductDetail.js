import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const ProductDetail = ( {navigation, route}) => {

  const handleGoToProductList = ()=> {
    navigation.navigate('ProductList');
  };

  const [isLoaded] = useFonts({
    "lobsterFont": require('../assets/fonts /Lobster.ttf')
  
  });
  if (!isLoaded) {
    return null ;
  };

  return (
    <View style= {styles.container}>
    <Image
      resizeMode='contain' style= {styles.imageDetail} source={{uri:route.params.productInfo.image}}/>
      <View style= {styles.descriptionContainer}>
      <Text> {route.params.productInfo.title} </Text>
      <Text> {route.params.productInfo.price} </Text>
      <Text> {route.params.productInfo.description}  </Text>
<Pressable onPress={handleGoToProductList} style= {styles.button}>
<Text style= {styles.buttonText}> Go To Product List </Text>

</Pressable>

      </View>

     
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },
  imageDetail: {
    marginTop:82,
    width:260,
    height:200,
    backgroundColor:'white',
  marginBottom:24,
  },
  descriptionContainer:{

    backgroundColor:'black',
    alignItems:'center',
    flex:1,
    borderRadius:233,
    width:382,
    height:400,
  },
  button:{
width:180,
height:42,
backgroundColor:'white',
borderRadius:44,
marginTop:12,
  },
  buttonText: {
    fontFamily:'lobsterFont',
    fontSize:24,
    color:'black',
    paddingVertical:6,
  },
  imageDetail: {
    marginTop:82,
    width:260,
    height:200,
    backgroundColor:'white',
    borderRadius:233,
    marginBottom:24,


  },


});