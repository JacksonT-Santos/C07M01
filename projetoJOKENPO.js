const prompt = require('prompt-sync')();

console.log('\n          A COMPETIÇÃO DE JOKENPO DO SÉCULO COMEÇA AGORA!!!\n          =================================================\n');
var rodadas = +prompt('Quantas rodadas serão?');
var jogador1;
var computador;
var escolhap1;
var count = 0;
var venceu = 0;
var perdeu = 0;
function global(){
function player1(){
  escolhap1 = prompt('\nVocê quer pedra, papel ou tesoura?').toUpperCase();
  if (escolhap1==='PEDRA'){
    return(1);
    } else if(escolhap1==='PAPEL'){
      return(2);
    } else if(escolhap1==='TESOURA'){
      return(3);
    } else {console.log('Isso não vale!');
    return player1()}
};
jogador1 = player1();
computador = Math.ceil(Math.random()*3);
console.log('\nJO-KEN-PO!!!\n');
if (jogador1===1){
  console.log('VOCÊ - PEDRA')
  } else if (jogador1===2){
  console.log('VOCÊ - PAPEL')
  } else {console.log('VOCÊ - TESOURA')};

if (computador===1){
  console.log('COMPUTADOR - PEDRA')
  } else if (computador===2){
  console.log('COMPUTADOR - PAPEL')
  } else {console.log('COMPUTADOR - TESOURA')};

if (jogador1===computador){
  console.log('\n                                 EMPATE! DENOVO!');
  return global();
} else if (jogador1===1 && computador===2){
  console.log('\n                              VOCÊ PERDEU!');
  perdeu++
} else if (jogador1===1 && computador===3){
  console.log('\n                              VOCÊ VENCEU!');
  venceu++
  } else if (jogador1===2 && computador===3){
  console.log('\n                              VOCÊ PERDEU!');
  perdeu++
  } else if (jogador1===2 && computador===1){
  console.log('\n                              VOCÊ VENCEU!');
  venceu++
  } else if (jogador1===3 && computador===1){
  console.log('\n                              VOCÊ PERDEU!');
  perdeu++
  } else if (jogador1===3 && computador===2){
  console.log('\n                              VOCÊ VENCEU!');
  venceu++
  };
count++;
while (count<rodadas){
  global()}
};
function resultado(){
  if (venceu>perdeu){
  console.log('\n          --------- VOCÊ É O GRANDE VENCEDOR!---------')
}  else if (venceu<perdeu){
  console.log('\n          --------- O COMPUTADOR É O GRANDE VENCEDOR!---------')
};
while (venceu===perdeu){
  console.log('VAMOS DESEMPATAR!');
global();
resultado();}
};
global();
resultado();