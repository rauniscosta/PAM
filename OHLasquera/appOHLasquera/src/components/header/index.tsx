
import { View, Pressable,Text, Image, TouchableOpacity } from 'react-native';
import {Ionicons,Feather} from '@expo/vector-icons';


{/* Construção da função do cabeçalho, criado em um componente*/}
export function Header (){
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {/* <Image source={require('../../assets/logo.png')} style={{width:50,height:50}}/> */}
                <Text style={{fontSize:20,marginLeft:10}}>OH! Lasquera</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Pressable style={{flexDirection:'row',alignItems:'center',marginRight:20}}>
                    <Feather name="shopping-cart" size={24} color="black" />
                    <Text>Carrinho</Text>
                </Pressable>
                <Pressable style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="person" size={24} color="black" />
                    <Text>Perfil</Text>
                </Pressable>
            </View>
        </View>
    )
}