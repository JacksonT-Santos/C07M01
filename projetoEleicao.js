var nascimento;
var idade;
var voto;
var autorizacao;
var opcao;
var candidato1={
  nome:'CHAVES',
  votos:0};
var candidato2={
  nome:'KIKO',
  votos:0};
var candidato3={
  nome:'SEU MADRUGA',
  votos:0};
var nulo={
  nome:'NULO',
  votos:0};
var branco={
  nome:'BRANCO',
  votos:0};
function autorizaVoto(){
  if (idade<16){
  console.log('NEGADO');
  return('NEGADO');
  } else if (idade<18){
    console.log('OPCIONAL');
    opcao = prompt('VOCÊ VAI VOTAR?').toUpperCase();
    return('OPCIONAL');
  } else {console.log('OBRIGATÓRIO');
  return('OBRIGATÓRIO')};
};
function votacao(){
  if (autorizacao==='OBRIGATÓRIO'){
    voto=+prompt(`PRA QUEM VAI SEU VOTO?\n DIGITE 1 PARA ${candidato1.nome}\n DIGITE 2 PARA ${candidato2.nome}\n DIGITE 3 PARA ${candidato3.nome}\n DIGITE 4 PARA VOTO NULO\n DIGITE 5 PARA VOTO EM BRANCO`);
    return(voto);
  } else if (autorizacao==='OPCIONAL'){
    if (opcao==='SIM'){
    voto=+prompt(`PRA QUEM VAI SEU VOTO?\n DIGITE 1 PARA ${candidato1.nome}\n DIGITE 2 PARA ${candidato2.nome}\n DIGITE 3 PARA ${candidato3.nome}\n DIGITE 4 PARA VOTO NULO\n DIGITE 5 PARA VOTO EM BRANCO`);
    return(voto)
    } else {console.log('VOCÊ OPTOU POR NÃO VOTAR')}
} else {console.log('VOCÊ NÃO PODE VOTAR')}
};
var iniciar=prompt('INICIAR VOTAÇÃO?').toUpperCase();
var continuar;
if (iniciar==='SIM'){
  while(true){
  voto=0;
  nascimento=+prompt('EM QUE ANO VOCÊ NASCEU?');
  idade=2021-nascimento;
  autorizacao=autorizaVoto();
  console.log('\nPARA QUE VAI SEU VOTO DE PRESIDENTE DO BRASIL?\n');
  votacao();
  if (voto===1){
    candidato1.votos++;
    console.log('VOCÊ VOTOU EM CHAVES');
    } else if (voto===2){
    candidato2.votos++;
    console.log('VOCÊ VOTOU EM KIKO');
    } else if (voto===3){
    candidato3.votos++;
    console.log('VOCÊ VOTOU EM SEU MADRUGA');
    } else if (voto===4){
    nulo.votos++;
    console.log('VOTO ANULADO');
    } else if (voto===5){
    branco.votos++;
    console.log('VOTOU EM BRANCO')};
  continuar=prompt('MAIS ALGUÉM VAI VOTAR?').toUpperCase();
  if (continuar==='NÃO'||continuar==='NAO'){break};
};
};
console.log('NÃO HÁ MAIS NINGUÉM PARA VOTAR');
var lista=[candidato1,candidato2,candidato3];
function exibirResultados(){
lista.sort((a,b) => b.votos-a.votos);
console.log(`\nCANDIDATO 1º LUGAR\n${lista[0].nome}         TOTAL DE VOTOS: ${lista[0].votos}`);
console.log(`\nCANDIDATO 2º LUGAR\n${lista[1].nome}         TOTAL DE VOTOS: ${lista[1].votos}`);
console.log(`\nCANDIDATO 3º LUGAR\n${lista[2].nome}         TOTAL DE VOTOS: ${lista[2].votos}`);
console.log(`\nTOTAL DE VOTOS NULOS: ${nulo.votos}`);
console.log(`TOTAL DE VOTOS EM BRANCO: ${branco.votos}`);
console.log(`\n------------------${lista[0].nome} É O NOVO PRESIDENTE QUERIDO DO BRASIL!!!--------------------`)
};
exibirResultados();