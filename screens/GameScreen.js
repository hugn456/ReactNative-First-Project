import { StyleSheet, Text, View,Button, Alert} from 'react-native'
import React, {useState, useRef, useEffect} from 'react'

import NumberContainer from '../components/NumberContainer'

import Card from '../components/Card.js'


export default function GameScreen(props) {

    const generateRandomBetween= (min, max, exclude) =>{
        min=Math.ceil(min);
        max=Math.floor(max);
        const rndNum= Math.floor(Math.random()*(max-min))+min;
        if (rndNum=== exclude){
            return generateRandomBetween (min,max, exclude);
        } else{
            return rndNum;
        }
    };

    const[currentGuess,setCurrentGuess]=useState(generateRandomBetween(1,99,props.userChoice));
    const[rounds,setRounds]=useState(0);
    const currentLow=useRef(1);
    const currentHigh=useRef(100);
    const{userChoice, onGameOver}=props;
    useEffect(()=>{
        if (currentGuess===userChoice){
            onGameOver(rounds);
        }},[currentGuess,userChoice,onGameOver]);

    const nextGuessHandler=direction =>{
        if ((direction ==='lower' && currentGuess <props.userChoice) || (direction ==='greater' && currentGuess> props.userChoice) ){
            Alert.alert('Don\'t lie!', 'You know that this is wrong...',[{text:'Sorry!', style:'cancel'}]);
            return;
        }

        if (direction==='lower'){
            currentHigh.current =currentGuess;
        }else{
            currentLow.current =currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds=>curRounds+1);

    };

    
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style ={styles.buttonContainer}>
          <Button title="LOWER" onPress={()=>{nextGuessHandler('lower')}}/>
          <Button title="GREATER" onPress={()=>{nextGuessHandler('greater')}} />

      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }

})