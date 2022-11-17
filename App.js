import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, Text , View } from "react-native";
import MapView from "react-native-maps";


export default function App(){
<View style={StyleSheet.container}>
  <Text>Open up App.js to start wroking on your App!!!</Text>
  <MapView style={{height:'50%' , width:'100%'}}>

  </MapView>
</View>

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})