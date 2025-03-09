import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/Personalizacao';
import { handleRegister } from '../logic/Services';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <Button mode="outlined" onPress={handleRegister}>
        Adicionar Receita
      </Button>
    </View>
  );
};

export default Register;