import { StyleSheet, Text, View,Pressable,Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const ProductBox = (props) => {
  return (
    <Pressable style= {styles.container} 
    onPress={props.handlePressProduct}>
    <View style= {styles.infoAndImage}> 
    <Image
        resizeMode='contain'
        style= {styles.imageStyle}
        source={{uri:props.image}}
    />
    <Text numberOfLines={2} 
    style= {styles.productTitle}> {props.title} </Text>
    </View>
    <View style= {styles.infoAndImage}>
    <Text style= {styles.priceStyle}> ${props.price} </Text>
    </View>

    </Pressable>
  )
}

export default ProductBox;

const styles = StyleSheet.create({
    container: {
      borderWidth: 0.2,
    borderRadius: 5,
    width: 370,
    height: 130,
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute content evenly along the container
    marginTop: 18,
    backgroundColor: 'white',
    borderRadius: 53,
    paddingHorizontal: 10, 
      },
      infoAndImage: {
        flexDirection:'row',
        alignItems:'center',
        paddingTop:12,
      },
      imageStyle:{
        width:80,
        height:62,
        marginTop:10,

      },
      productTitle: {
        color:'black',
        flex:1,
      },
      priceStyle: {
        fontWeight: 'bold',
        color: 'green',
      },
});

