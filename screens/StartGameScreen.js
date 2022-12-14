import { StyleSheet, Text, TextInput, View, Button, TouchableWithoutFeedback, Keyboard,Alert } from 'react-native'
import React, {useState} from 'react'
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
export default function StartGameScreen(props) {
  const[enteredValue,setEnteredValue] = useState('');
  const[confirmed,setConfirmed] = useState(false);
  const[selectedNumber,setSelectedNumber] = useState();
  const numberInputHandler=inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g,''));
  };

  const resetInputHandler= ()=>{
    setEnteredValue('');
    setConfirmed(false);
  };
  const confirmInputHandler=() =>{
    const chosenNumber= parseInt(enteredValue);
     if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99){
       Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', 
       [{text:'Okay', style:'destructive', onPress:resetInputHandler}]);
        alert(123);
      return;
     }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed){
    confirmedOutput=
    <Card style={styles.summaryContainer}>
    <Text> you selected </Text>
    <NumberContainer>{selectedNumber} </NumberContainer>
    <Button title ="START GAME" onPress={()=> props.onStartGame(selectedNumber)}/>
    </Card>
  }

  return (
    <TouchableWithoutFeedback  onPress={()=>{
      Keyboard.dismiss();
    }}
   >
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style= {styles.inputContainer}>
      <View style={styles.inputContainer}> 
          <Text>Select a number</Text>
          <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} 
                  onChangeText={numberInputHandler}
                  value={enteredValue} />
          <View  style={styles.buttonContainer}>
               
              <View  style={styles.Button} ><Button title="Reset"  color={Colors.accent} onPress={resetInputHandler}/></View>
              <View  style={styles.Button} ><Button title="Confirm"  color={Colors.primary} onPress={confirmInputHandler} /></View>
              
          </View>
      </View>
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
  
  )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 10,
        alignItems:'center',

    },
    title:{
        fontSize:20,
        marginVertical:10,


    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'

    },
    
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15

    },
    Button: {
      width :80,
    },
    input :{
      width:50,
      textAlign:'center'

    },
    summaryContainer:{
      marginTop:20,
      alignItems:'center',

    }
});