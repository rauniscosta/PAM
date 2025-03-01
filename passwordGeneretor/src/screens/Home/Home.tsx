import React from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import Logo from '../../components/Logo/Logo';
import { PasswordInput } from '../../components/PasswordInput/PasswordInput';
import { ButtonGeneration } from '../../components/ButtonGeneration/ButtonGeneration';

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View>
                
                <ButtonGeneration />

            </View>
            <StatusBar style="light"
            />
        
        </View>
    );
}
