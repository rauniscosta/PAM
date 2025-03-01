import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      margin: 5,
    },
    logoContainer: {
      flexDirection: 'column',
      borderColor: 'black',
      borderWidth: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 20,
      paddingTop: 10 ,
      paddingBottom: 10,
      backgroundColor: '#4D4D4D',
    },
    InputContainer: {
      width: '80%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });
  
export default styles;