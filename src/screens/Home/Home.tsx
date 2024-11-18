import React, { useEffect, useState } from 'react';
import { View, ImageBackground, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Animated } from 'react-native';
import styles from './Style';
import { Logo } from '../../components/Logo/Logo';
import background from '../../../assets/fundo.jpg';
import { Input } from '../../components/Input/Input';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button/Button';

export default function Home() {
  const [fadeAnim] = useState(new Animated.Value(0)); 

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 5000, 
      useNativeDriver: true, 
    }).start();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={background} style={styles.container}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Logo />
          </Animated.View>
          <StatusBar style="light" />
          <Button />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
