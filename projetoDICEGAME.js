console.log('\nVAMOS COMEÇAR!!!\n');
var rodadas = +prompt('\nQUANTAS RODADAS SERÃO?\n');
var jognum = +prompt('\nQUANTOS JOGARES VÃO JOGAR?(até 6 jogadores\n');
while (jognum<2){
  console.log('É necessário pelo menos dois jogadores');
  jognum = +prompt('\nQUANTOS JOGARES VÃO JOGAR?(até 6 jogadores\n');
};
while (jognum>6){
  console.log('Há muitos jogadores!');
  jognum = +prompt('\nQUANTOS JOGARES VÃO JOGAR?(até 6 jogadores\n');
};
var count = 1;
function jogada(){
  let aleatorio = Math.ceil(Math.random()*6);
  return(aleatorio);};
var lista=[];
while (true){
  var jogador1={nome:prompt('QUEM É O PRIMEIRO(A) JOGADOR(A)?'),numero:jogada(),vitorias:0};
  var jogador2={nome:prompt('QUEM É O SEGUNDO(A) JOGADOR(A)?'),numero:jogada(),vitorias:0};
  lista.push(jogador1);
  lista.push(jogador2);
  if(jognum===2){break};
  var jogador3 = {nome:prompt('QUEM É O TERCEIRO(A) JOGADOR(A)?'),numero:jogada(),vitorias:0};
  lista.push(jogador3);
  if(jognum===3){break};
  var jogador4 = {nome:prompt('QUEM É O QUARTO(A) JOGADOR(A)?'),numero:jogada(),vitorias:0};
  lista.push(jogador4);
  if(jognum===4){break};
  var jogador5 = {nome:prompt('QUEM É O QUINTO(A) JOGADOR(A)?'),numero:jogada(),vitorias:0};
  lista.push(jogador5);
  if(jognum===5){break};
  var jogador6 = {nome:prompt('QUEM É O SEXTO(A) JOGADOR(A)?'),numero:jogada(),vitorias:0};
  lista.push(jogador6);
  if(jognum===6){break};
};
function sorte(){lista.sort((a,b) => b.numero-a.numero);};
sorte();
function resultado(){
if (lista[0].numero===lista[1].numero){
console.log('\nEMPATE!\n');
} else {
  lista[0].vitorias++;
  console.log(`\nRODADA ${count++}`)
  console.log(`\n${lista[0].nome} FOI O VENCEDOR!\n`);
};};
console.log('\nROLEM OS DADOS!\n');
for (let i=0;i<rodadas;i++){
  jogador1.numero=jogada();
  jogador2.numero=jogada();
  if (lista.length===2){
    sorte();
    resultado();
    console.log(lista);
    continue;};
  jogador3.numero=jogada();
  if (lista.length===3){
    sorte();
    resultado();
    console.log(lista);
    continue;};
  jogador4.numero=jogada();
  if (lista.length===4){
    sorte()
    resultado();
    console.log(lista);
    continue;};
  jogador5.numero=jogada();
  if (lista.length===5){
    sorte();
    resultado();
    console.log(lista);
    continue;};
  jogador6.numero=jogada();
  if (lista.length===6){
    sorte();
    resultado();
    console.log(lista);
    continue;};
};
lista.sort((a,b) => b.vitorias-a.vitorias);
console.log('\nPLACAR FINAL \n');
console.log(lista);
console.log(' \n'+lista[0].nome+' É O GRANDE CAMPEÃO!');
