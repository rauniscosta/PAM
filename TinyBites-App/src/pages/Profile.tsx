import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Switch, TextInput, Text, Checkbox, Portal, Divider } from "react-native-paper";
import { styles } from "../styles/Personalizacao";
import { updateProfile } from "../logic/Services";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [text, setText] = React.useState("");
  const [date, setdate] = React.useState("");
  const [altura, setaltura] = React.useState("");
  const [peso, setpeso] = React.useState("");
  const [rs01, setRs01] = React.useState(false);
  const [rs02, setRs02] = React.useState(false);
  const [rs03, setRs03] = React.useState(false);
  const [rs04, setRs04] = React.useState(false);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Novo Membro</Text>
        <TextInput
          label={"Nome Completo"}
          value={text}
          mode="outlined"
          onChangeText={(text) => setText(text)}
        />

        <TextInput
          label={"Data de Nascimento"}
          value={date}
          mode="outlined"
          onChangeText={(date) => setdate(date)}
          style={styles.input}
        />

        <TextInput
          label={"Altura (em metros)"}
          value={altura}
          mode="outlined"
          onChangeText={(altura) => setaltura(altura)}
          style={styles.input}
        />

        <TextInput
          label={"Peso (em kg)"}
          value={peso}
          mode="outlined"
          onChangeText={(peso) => setpeso(peso)}
          style={styles.input}
        />
        
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
        <Text>{isSwitchOn ? "Feminino" : "Masculino"}</Text> 
        
        
        
        <Divider />
        <View style={styles.listItem}>
          <Text>Restrições Alimentares: {text}</Text>
          <Checkbox.Item label="Vegetariano" status={rs01 ? 'checked' : 'unchecked'} onPress={() => {setRs01(!rs01);}} />
          <Checkbox.Item label="Vegano" status={rs02 ? 'checked' : 'unchecked'} onPress={() => {setRs02(!rs02);}} />
          <Checkbox.Item label="Intolerante a Lactose" status={rs03 ? 'checked' : 'unchecked'} onPress={() => {setRs03(!rs03);}} />
          <Checkbox.Item label="Intolerante a Glúten" status={rs04 ? 'checked' : 'unchecked'} onPress={() => {setRs04(!rs04);}} />
        </View>
      </ScrollView>
      <Button mode="outlined" onPress={updateProfile}>
        Adicionar Membro
      </Button>
    </View>
  );
};

export default Profile;
