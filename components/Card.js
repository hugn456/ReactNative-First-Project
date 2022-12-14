import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View style={{...styles.card, ...props.style}}>
     {props.children}
    </View>
  )
} 

const styles = StyleSheet.create({
    card:{
        
           
            shawdowColor: 'black',
            shadowOffset:{width:0, height:2},
            shadowOpacity:0.26,
            shadowRadius:8,
            backgroundColor:'white',
            elevation: 8,
            padding:20
      
    },
})