

import React from 'react';
import { View, Text,StyleSheet, Image } from 'react-native';

import {styles} from './LogoStyles';
import BatLogo from '../../../assets/logobatman.png';



export default function Logo() {
    return (
        <>
            <Text style={styles.title}> 
                BAT PASS GENERATOR </Text>
            
            // importando a imagem do logo

            <Image 
                source={BatLogo} 
                style = {{
                    resizeMode: 'contain',
                    height:200,
                }}/>
        </>
    );
}