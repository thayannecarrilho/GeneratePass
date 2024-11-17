import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';
import Logoapp from '../../../assets/logo.png'

export function Logo() {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={Logoapp}
        />
        <Text style={styles.title}>Senhas imbatíveis</Text>
    </View>
  );
}