import React from 'react';
import { TextInput, View, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './InputStyles';
import * as Clipboard from 'expo-clipboard';

interface InputProps {
  pass: string;
}

export function Input(props: InputProps) {
  function handleCopy() {
    if (props.pass) {
      Clipboard.setStringAsync(props.pass)
        .then(() => {
          Alert.alert('A senha foi copiada para a área de transferência.');
        });
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.inputer}
        placeholder="Password"
        value={props.pass}
        editable={false} 
      />
      <Pressable onPress={handleCopy}>
        <Icon name="content-copy" size={20} color="#000" />
      </Pressable>
    </View>
  );
}
