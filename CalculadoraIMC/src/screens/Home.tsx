import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { stylesPersonalizacao } from "../Personalizacao";
import generateCalculo from "../services/ResultadoCalculo";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [diagnostico, setDiagnostico] = useState<string>("");

  const handleCalculo = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    if (!isNaN(pesoNum) && !isNaN(alturaNum)) {
      const resultadoCalculo = generateCalculo(pesoNum, alturaNum);
      setResultado(resultadoCalculo);
      setDiagnostico(getDiagnostico(resultadoCalculo));
    } else {
      setResultado(null);
      setDiagnostico("");
    }
  };

  const getDiagnostico = (imc: number): string => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 34.9) return "Obesidade grau 1";
    if (imc >= 35 && imc < 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3";
  };

  return (
    <View style={stylesPersonalizacao.telas}>
      <Text style={stylesPersonalizacao.textos}>Seu IMC</Text>

      <View style={stylesPersonalizacao.telas}>
        {resultado !== null && (
          <>
            <Text style={stylesPersonalizacao.resultado}>
              {resultado.toFixed(2)}
            </Text>
            <Text style={stylesPersonalizacao.Diagnostico}>{diagnostico}</Text>
          </>
        )}
        <TextInput
          style={stylesPersonalizacao.Peso}
          placeholder="Peso"
          value={peso}
          onChangeText={setPeso}
          keyboardType="numeric"
        />
        <TextInput
          style={stylesPersonalizacao.Altura}
          placeholder="Altura"
          value={altura}
          onChangeText={setAltura}
          keyboardType="numeric"
        />
        <Button title="Calcular" onPress={handleCalculo} />
      </View>
    </View>
  );
}
