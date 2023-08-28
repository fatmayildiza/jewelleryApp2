import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import { useFonts } from 'expo-font';
import ProductBox from '../Screen/ProductBox';



const ProductList = ({navigation}) => {

  const [jewellery, setjewellery] = useState([]);

  useEffect(() => {
    axios.get ("https://fakestoreapi.com/products/category/jewelery")
    .then ((response)=> {
      setjewellery (response.data);
    })
    .catch((error) => {
      console.error('error fetching data:', error);
    });
   
  }, []);
  
const handleSendData = (value) => {
  navigation.navigate ("ProductDetail", {productInfo:value});
};

const renderProductItem = ({item,index}) => (
  <View key={index} style= {styles.buttonContainer}>
  <Text style= {styles.buttonText}> {index} </Text>
  </View>
);

const [isLoaded] = useFonts({
  "lobsterFont": require('../assets/fonts /Lobster.ttf'),

});
if (!isLoaded) {
  return null ;
};


return(
  <View style={styles.mainContainer}>
  <Text style={styles.firstPageTitle}> PRODUCTS </Text>
 <FlatList
    data={jewelery}
    keyExtractor={(item) => item.id.toString()}
    contentContainerStyle={styles.flatListContainer}
    handlePressItem={() => handleSendData(value.item)} 
    renderItem={(value) => 
        <ProductBox
            title={value.item.title}
            price={value.item.price}
            image={value.item.image}
            handlePressProduct={() => handleSendData(value.item)}
        />}
/>


  </View>
);
 

};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
   
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstPageTitle:{
    marginTop:82,
    color:'white',
    fontFamily:'lobsterFont',
    fontSize:33,

  },
  buttonContainer: {
    backgroundColor:'red',
    width:200,
    height:200,
    padding:10,
    borderRadius:5,
  },
  buttonText: {
    fontWeight:'bold',
    width:120,
    height:30,
   
  },

  flatListContainer:{
    marginTop:20,
    padding:5,
  
  },

});


export default ProductList;