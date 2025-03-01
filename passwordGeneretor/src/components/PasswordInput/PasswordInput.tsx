import React from "react";
import {Text, TextInput} from "react-native";

import {styles} from './PasswordInputStyles';

interface PasswordInputProps { 
    password: string;
}

export function PasswordInput(props: PasswordInputProps) {
    return (
        
            <TextInput style={styles.inputer}
                placeholder ='password'
                value={props.password}
                
            />

    );
}   