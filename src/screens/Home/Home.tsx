import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Style'
import {Logo} from '../../components/Logo/Logo'
import background from '../../../assets/fundo.jpg'
import { Input } from '../../components/Input/Input';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button/Button';

export default function Home(){
    return(    

    <ImageBackground source={background}style={styles.container}>
      <Logo/> 
      <StatusBar style='light'/>    
      <Button/>  
    </ImageBackground>        
    )
}
