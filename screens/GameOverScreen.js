import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function GameOverScreen(props) {
  return (
    <View>
      <Text>GameOverScreen</Text>
      <Text> Number of rounds: {props.roundsNumber}</Text>
      <Text> Number was:{props.userNumber}</Text>

      <Button title="New Game"  onPress={props.onRestart}/>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    }
})