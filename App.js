import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Alert, Button, Text, TextInput, Image } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
 
  const result1 = useState(0);
  const result2 = useState(0);
  
  const addNumbers = () => {
    result1 = number1 + number2;
    return result1;
  };

  const subtractNumbers = () => {
    number1 - number2;
    return result2;
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
    
        </View>
      <View style={{flex: 1}}>
      
      <TextInput type="number" 
        placeholder=''
        style={styles.input} 
        value={number1}
        keyboardType='numeric'
        onChangeNumber={number1 => setNumber1(number1)} 
        />
      <TextInput type="number"
        placeholder=''
        style={styles.input} 
        value={number2}
        keyboardType='numeric'
        onChangeNumber={number2 => setNumber2(number2)}
        />
        <Text style={styles.text}>Result: {result1 || result2}</Text>
      </View>
      
      <View 
        style={{flex: 0.5, 
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        justifyContent: 'space-between'}}>
      <Button
        onPress={addNumbers} 
        title=" + " />
      <Button 
        onPress={subtractNumbers} 
        title=" - " />
      </View>
      </View>
      <View style={{flex: 1}}>
    
        </View>
      <StatusBar 
        style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 2
  }

