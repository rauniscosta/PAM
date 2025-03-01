import { StyleSheet } from "react-native";

export const stylesPersonalizacao = StyleSheet.create({
  telas: {
    flex: 1,
      backgroundColor: '#fff',
      width: '100%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      margin: 5,
    //paddingLeft - alinnhamento para esquerda
    //paddingtop - alinhamento do top
  },
  textos:{
    //alinhamento de texto
    textAlign:'center',
    fontWeight: 'bold',

  },
  resultado:{
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',

  },
  Diagnostico:{
    textAlign:'center',
    fontSize:16,
  },
  Peso:{
    backgroundColor: '#E5BF3C',
    width: '100%',
    color: 'black',
    fontSize: 20,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    textAlign: 'center', 

  },
  Altura:{
    backgroundColor: '#E5BF3C',
    width: '100%',
    color: 'black',
    fontSize: 20,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    textAlign: 'center', 

  }

});
