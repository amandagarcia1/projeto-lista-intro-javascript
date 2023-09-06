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

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}