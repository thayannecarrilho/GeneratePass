import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './ButtonStyles';
import { Input } from '../Input/Input';
import gereneratePass from '../../services/passwordservice';

export function Button() {

  const [pass, setPass] = useState('')

  function handleGenerate(){
    let generateToken = gereneratePass
    setPass(generateToken)
  }

  return (
    <>
    <Input pass={pass}/>
    <Pressable
    style={styles.button}
    onPress={handleGenerate}>
        <Text style={styles.text}>Gerar senha</Text>
    </Pressable> 
    </>
  );  
}