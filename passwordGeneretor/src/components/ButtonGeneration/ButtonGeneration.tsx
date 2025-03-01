import React, {useState} from "react";
import {View, Button, Text, Pressable} from "react-native";
import * as clipboard from 'expo-clipboard';

import {styles} from './ButtonGenerationStyles';
import { PasswordInput } from "../PasswordInput/PasswordInput";
import generatePassword from "../../services/PasswordServices";



export function ButtonGeneration() {
/*    /* criando uma constante para ser utilizada de ponteiro para 
   atualizar o codigo com a tela do aplicativo.
   Sempre gerar uma nova senha um novo useState sera alterado */
// useState é um Hook que permite adicionar o estado do React a um componente de função.
    const [password, setPass] = useState('');
// Função para gerar uma senha
    function handleGeneratePassword() {
        //chama a função que gera a senha e armazena o valor retornado em newPassword, que é passado para setPass.Na pasta de services
        let newPassword = generatePassword();
        setPass(newPassword);
    } 
    
    // Função para copiar a senha, utilizando a função clipboard.setString que recebe a senha como parametro
    function handleCopyPassword() {
        clipboard.setStringAsync(password);
    }


// Retorna o botão de gerar senha e o botão de copiar senha
    return (
        
        <>
        // PasswordInput é um componente que recebe uma senha e a exibe.
            <PasswordInput password={password}/>
            
            <Pressable 
            // onPress é um evento que ocorre quando o usuário toca em um componente.
                onPress={handleGeneratePassword} 
                style={styles.button}
            >
                <Text style={styles.Text}>
                    GERAR SENHA
                </Text>
            </Pressable>
            // Pressable é um componente que detecta pressões de toque. Botao que copia a senha
            <Pressable 
                onPress={handleCopyPassword}
                style={styles.button}
            >
                <Text style={styles.Text}>
                    COPY
                </Text>
            </Pressable>
        </>
    );
}   