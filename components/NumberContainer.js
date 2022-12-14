import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
export default function NumberContainer(props) {
  return (
    <View style ={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:2,
        borderColor : Colors.accent,
        padding: 10,
        borderRadius:10,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'


    },
    number :{
        color: Colors.accent,
        fontSize:22

    }
})