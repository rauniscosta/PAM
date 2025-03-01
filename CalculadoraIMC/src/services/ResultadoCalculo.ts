//forma de declarar uma função que recebe dois parâmetros e retorna um número
//a função recebe dois parâmetros, peso e altura, ambos do tipo number
export default function generateCalculo(peso: number, altura: number): number {
    const resultadoCalculo = peso / (altura * altura);
    return resultadoCalculo;
  }