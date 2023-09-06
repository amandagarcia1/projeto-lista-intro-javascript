// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura , largura) {
  // implemente sua lógica aqui
altura = Number(prompt('escreva a altura do retangulo'))
largura = Number(prompt('escreva a largura do retangulo'))
areaDoRetangulo = altura * largura 
console.log(areaDoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade(idade) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt('escreva o ano atual'))
anoNascimento = Number(prompt('escreva seu ano de nascimento'))
idade = anoAtual-anoNascimento
console.log (idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 imc = peso / (altura*altura) 
  return imc
  }
  


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt('digite seu nome')
  idade = prompt('digite sua idade')
  email = prompt('digite seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cor1 = prompt('digite sua primeira cor favorita')
  cor2 = prompt('digite sua segunda cor favorita')
  cor3 = prompt('digite sua terceira cor favorita')
  letArrayDeCores = [cor1 , cor2 , cor3]
console.log (letArrayDeCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let numeroDeIngressos = custo / valorIngresso
return numeroDeIngressos


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let tamanhoString1 = string1.length
  let tamanhoString2 = string2.length
  return tamanhoString1 === tamanhoString2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
let primeiroArray = array[0]
return primeiroArray
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let ultimoArray = array.pop()
return ultimoArray
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let removePrimeiroArray = array.shift()
  let removeUltimoArray = array.pop()
  let trocaUltimoParaPrimeiro = array.unshift(removeUltimoArray)
  let trocaPrimeiroParaUltimo = array.push(removePrimeiroArray)
  return array 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let stringMinuscula1 = string1.toUpperCase()
  let stringMinuscula2 = string2.toUpperCase()
  return stringMinuscula1 === stringMinuscula2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite o ano atual (XXXX):'))
  let anoNascimento = Number(prompt('Digite seu ano de nascimento (D/M/A):'))
  let anoEmissaoRg = Number(prompt('Digite o ano de emissão do seu RG (XXXX):'))
  let idade = anoAtual - anoNascimento
  let anosRg = anoAtual - anoEmissaoRg
  const criterio1 = (idade <= 20) && (anosRg >= 5)
  const criterio2 = (idade <= 50) && (anosRg >= 10)
  const criterio3 = (idade > 50) && (anosRg > 15)
  console.log(criterio1 || criterio2 || criterio3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const divisivelPor4 = (ano % 4)
  const divisivelPor100 = (ano % 100)
  const divisivelPor400 = (ano % 400)
  return (divisivelPor4 === 0) && (divisivelPor100 !== 0) || (divisivelPor400 === 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos? (sim ou nao)").toLowerCase();
  const ensinoMedio = prompt("Você possui ensino médio completo? (sim ou nao)").toLowerCase();
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou nao)").toLowerCase();

  const inscricaoValida = idade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim";

  console.log(inscricaoValida)
}