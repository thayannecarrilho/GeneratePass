import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, Keyboard, Alert } from 'react-native';
import { styles } from './ButtonStyles';
import { Input } from '../Input/Input';
import generatePass from '../../services/passwordservice';

export function Button() {
  const [pass, setPass] = useState('');
  const [length, setLength] = useState('');

  function handleGenerate() {
    Keyboard.dismiss();

    const lengthNumber = parseInt(length, 10);

    if (isNaN(lengthNumber) || lengthNumber <= 0) {
      Alert.alert('Erro', 'Por favor, insira um comprimento válido.');
      return;
    }

    const generateToken = generatePass(lengthNumber);
    setPass(generateToken);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputer}
            placeholder="Nº de caracteres"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={length}
            onChangeText={setLength}
          />
        </View>
        <Pressable style={styles.button} onPress={handleGenerate}>
          <Text style={styles.text}>Gerar senha</Text>
        </Pressable>        
      </View>
      <Input pass={pass} />
    </View>
  );
}
