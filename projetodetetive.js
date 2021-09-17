console.log('                  INTERROGATÓRIO INVESTIGATIVO\n=================================================================\n\n    VOCÊ ESTÁ SENDO INVESTIGADO SOBRE UM ASSASSINATO OCORRIDO\n                        NO DIA 21/08/2021.\n\n\n');
console.log('  AS RESPOSTAS DADAS DAQUI EM DIANTE DETERMINARÃO SEU FUTURO\n     RESULTANDO NA CONCLUSÃO DE SUA INOCÊNCIA OU CULPA.\n\n\n');
console.log('                             ATENÇÃO\n-----------------------------------------------------------------\n                Responda apenas SIM(s) ou Não(n)\n-----------------------------------------------------------------\n\n');
function resposta1(){
  let perg1 = prompt('TELEFONOU PARA A VÍTIMA?\n');
let pergunta1= perg1.toUpperCase();
if (pergunta1==='N'||pergunta1==='NAO'||pergunta1==='NÃO'){
  return(0)
} else if (pergunta1==='S'||pergunta1==='SIM'){
  return(1)
} else {
  console.log('\nVOCÊ NÃO RESPONDEU A PERGUNTA!\n')
  return resposta1()}
};
function resposta2(){
  let perg2 = prompt('ESTEVE NO LOCAL DO CRIME?\n');
let pergunta2= perg2.toUpperCase();
if (pergunta2==='N'||pergunta2==='NAO'||pergunta2==='NÃO'){
  return(0)
} else if (pergunta2==='S'||pergunta2==='SIM'){
  return(1)
} else {
  console.log('\nVOCÊ NÃO RESPONDEU A PERGUNTA!\n')
  return resposta2()}
};
function resposta3(){
  let perg3 = prompt('MORA PERTO DA VÍTIMA?\n');
let pergunta3= perg3.toUpperCase();
if (pergunta3==='N'||pergunta3==='NAO'||pergunta3==='NÃO'){
  return(0)
} else if (pergunta3==='S'||pergunta3==='SIM'){
  return(1)
} else {
  console.log('\nVOCÊ NÃO RESPONDEU A PERGUNTA!\n')
  return resposta3()}
};
function resposta4(){
  let perg4 = prompt('DEVIA PARA A VÍTIMA?\n');
let pergunta4= perg4.toUpperCase();
if (pergunta4==='N'||pergunta4==='NAO'||pergunta4==='NÃO'){
  return(0)
} else if (pergunta4==='S'||pergunta4==='SIM'){
  return(1)
} else {
  console.log('\nVOCÊ NÃO RESPONDEU A PERGUNTA!\n')
  return resposta4()}
};
function resposta5(){
  let perg5 = prompt('JÁ TRABALHOU COM A VÍTIMA?\n');
let pergunta5= perg5.toUpperCase();
if (pergunta5==='N'||pergunta5==='NAO'||pergunta5==='NÃO'){
  return(0)
} else if (pergunta5==='S'||pergunta5==='SIM'){
  return(1)
} else {
  console.log('\nVOCÊ NÃO RESPONDEU A PERGUNTA!\n')
  return resposta5()}
};
let soma= resposta1()+resposta2()+resposta3()+resposta4()+resposta5();
if (soma===5){
  console.log('VOCÊ É O(A) ASSASSINO(A)!! APRESENTE-SE À DELEGACIA MAIS PRÓXIMA\n EM ATÉ 24 HORAS.')
} else if(soma===4 || soma===3){
  console.log('VOCÊ É CUMPLICE DE ASSASSINATO!! APRESENTE-SE À DELEGACIA MAIS PRÓXIMA\n EM ATÉ 24 HORAS.')
  } else if(soma===2){
  console.log('VOCÊ É SUSPEITO(A) DE ASSASSINATO!! APRESENTE-SE À DELEGACIA MAIS PRÓXIMA\n EM ATÉ 24 HORAS.')
} else {
  console.log('\nVOCÊ É INOCENTE! ESTÁ LIBERADO.')
};