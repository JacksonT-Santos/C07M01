class Personagens {
  constructor(nome,dano,defesa,vida){
    this.nome=nome,
    this.dano=dano,
    this.defesa=defesa,
    this.vida=vida
  };
};
class Classe extends Personagens{
  constructor(nome,dano,defesa,vida,forca,destreza,inteligencia,resistencia){
    super(nome,dano,defesa,vida);
    this.forca=forca,
    this.destreza=destreza,
    this.inteligencia=inteligencia,
    this.resistencia=resistencia
  };
  equiparespadao(){
    if(espadaO.experiencia<=heroi.forca){heroi.dano+=5;tempo+=2;console.log('  Você foi ao ferreiro Kirk e fez uma espada.\n\n  Espada equipada!\n\n');
    } else {console.log('\n  VOCÊ É FRACO! NÃO TEM FORÇA O SUFIENTE.\n')}};
  equipararco(){
    if(arcO.experiencia<=heroi.destreza){heroi.dano +=5;tempo+=2;console.log('  Você foi ao ferreiro Kirk e fez um arco.\n\n  Arco equipado!\n\n');
    } else {console.log('\n  SUA DESTREZA PRECISA MELHORAR!\n')}};
  equiparlivrodemagia(){
    if(livrodemagiA.experiencia<=heroi.inteligencia){heroi.dano +=5;tempo+=2;console.log('  Você foi à casa do mago Cinza e ganhou um livro.\n\n  Livro equipado!\n\n');
    } else {console.log('\n  VOCÊ NAO ENTENDE NADA DO LIVRO!\n')}};
  equiparescudo(){
    if(escudO.experiencia<=heroi.resistencia){heroi.defesa +=5;tempo+=2;console.log('  Você foi ao ferreiro Kirk e fez um escudo.\n\n  Escudo equipado!\n\n');
    } else {console.log('\n  PRECISA RESISTIR COM O ESCUDO LEVANTADO!\n')}};
  equipararmadura(){
    if(armadurA.experiencia<=heroi.resistencia){heroi.vida +=30;;tempo+=2;console.log('  Você foi ao ferreiro Kirk e fez uma armadura.\n\n  Armadura equipada!\n\n');
    } else {console.log('\n  NÃO RESISTE AO PESO DA ARMADURA!\n')}};
};
class Armas {
  constructor(nome,experiencia,){
    this.nome = nome,
    this.experiencia = experiencia}
};
var espadaO = new Armas('Espadão',12);
var arcO = new Armas('Arco',12);
var livrodemagiA = new Armas('Livro de Magia',11);
var escudO = new Armas('Escudo',12);
var armadurA = new Armas('Armadura',13);
var heroi = new Classe('Herói',15,10,15,10,10,8,10);
var orc = new Personagens('Orc',18,15,10);

console.log('\n\n Notícias chegam até Beleriand de um rastro de destruição causado por um chefe orc em direção á cidade.\n A cidade vizinha já caiu, enchedo o espírito dos cidadãos de Beleriand de pavor, pois até agora\n não há quem enfrente o terrível adversário.');
console.log(' Os cidadãos da cidade reuniran-se para pedir a você, um experiente guerreiro, que lute.\n\n ---DESAFIO ACEITO!---\n\n');
console.log('VOCÊ TEM 12 HORAS PARA SE PREPARAR ATÉ A CHEGADA DO CHEFE ORC (horário de brasília)\n\n');

function estado(){
  if (tempo==7){console.log('      JÁ É MANHÂ DO PRIMEIRO DIA   --- Agora são 7 horas\n');
  console.log(`${heroi.nome}: ataque:${heroi.dano}  defesa:${heroi.defesa}  vida:${heroi.vida}\n\n`)
  } else if (tempo==9){console.log('         ---  9 horas da manhâ\n');
  console.log(`${heroi.nome}: ataque:${heroi.dano}  defesa:${heroi.defesa}  vida:${heroi.vida}\n\n`)
  } else if (tempo==11){console.log('         --- Já são 11 horas\n');
  console.log(`${heroi.nome}: ataque:${heroi.dano}  defesa:${heroi.defesa}  vida:${heroi.vida}\n\n`)
  } else if (tempo==13){console.log('         --- 13 horas\n');
  console.log(`${heroi.nome}: ataque:${heroi.dano}  defesa:${heroi.defesa}  vida:${heroi.vida}\n\n`)
  } else if (tempo==15){console.log('         --- Meio da tarde. 15 horas\n');
  console.log(`${heroi.nome}: ataque:${heroi.dano}  defesa:${heroi.defesa}  vida:${heroi.vida}\n\n`)
  } else if (tempo==17){console.log('         --- final da tarde. 17 horas\n');
  console.log(`${heroi.nome}: ataque:${heroi.dano}  defesa:${heroi.defesa}  vida:${heroi.vida}\n\n`)
  } else {console.log(`${heroi.nome}: ataque:${heroi.dano}  defesa:${heroi.defesa}  vida:${heroi.vida}`);
  console.log('\n         --- Agora são 19 horas\n\n O inimigo está chegando!')}
};
var tempo=7;
var acao;
var estadio=false;
var aljava=false;
var biblioteca=false;
var escolha1;
var escolha2;

while (true){
  estado();
  acao = +prompt(' O QUE VOCÊ VAI FAZER?\n\n 1 - Ir ao campo de treinamento\n 2 - Adquirir aljava\n 3 - Ir à biblioteca\n 4 - Treinar\n 5 - Equipar\n\n');
  if (acao===1){estadio=true;console.log('você está no campo de treinamento.\n');tempo+=2;
    } else if (acao===2){aljava=true;console.log('Adquiriu aljava e flechas na loja.\n');tempo+=2;
    } else if (acao===3){biblioteca=true;console.log('Pegou os melhores livros na biblioteca.\n\n');tempo+=2;
    } else if (acao===4){
      escolha1 = +prompt(' -- Que tipo de treinamento?\n\n 1 - Fazer exercicíos de força\n 2 - Aumentar precisão\n 3 - Obter conhecimento\n 4 - Treinar resistência\n\n')
  } else {escolha2 = +prompt(' --Equipar\n\n 1 - Espadão\n 2 - Arco\n 3 - Livro de magia\n 4 - Escudo\n 5 - Armadura\n')};

  if (escolha1===1){if (estadio===true){
    console.log(' Você passou 2 horas fazendo exercício. Está bem mais forte do que antes.\n');heroi.forca+=2;tempo+=2;
    } else {console.log('O campo de treinamento é o lugar ideal para isso.\n')}
  } else if (escolha1===2){if (aljava===true){
    console.log(' Você fez vários disparos. Sua destreza melhorou.\n');heroi.destreza+=2;tempo+=2;
    } else {console.log('Não há aljava nem flechas!\n')};
  } else if (escolha1===3){if (biblioteca===true){
    console.log(' Leu os melhores livros da biblioteca. Você é um gênio.\n');heroi.inteligencia+=3;tempo+=2;
    } else {console.log('Precisa ler!\n')};
  }  else if (escolha1===4){if (estadio===true){
    console.log('Sua resistência aumentou!.\n');heroi.resistencia+=5;tempo+=2;
    } else {console.log('O campo de treinamento é o lugar ideal para isso.\n')}
  };
  escolha1=0;
  if (escolha2===1){
  heroi.equiparespadao()
  } else if (escolha2===2){
  heroi.equipararco()
  }  else if (escolha2===3){
  heroi.equiparlivrodemagia()
  } else if (escolha2===4){
  heroi.equiparescudo()
  } else if (escolha2===5){
  heroi.equipararmadura()
  };
  escolha2=0;
  if (tempo==19){estado();break};
};
var heroidano;
var orcdano;
console.log('\n O CHEFE ORC INVADE A CIDADE!!     VOCÊ ESTÁ PRONTO PARA O COMBATE!\n\n');
while(heroi.vida >0 && orc.vida >0){
  heroidano = heroi.dano-orc.defesa;
  orcdano = orc.dano-heroi.defesa;
  heroi.vida = heroi.vida - orcdano;
  orc.vida = orc.vida - heroidano;
  console.log('\n Você atacou!');
  if (heroi.dano>orc.defesa){console.log('          Ataque bem sucedido!')
  } else {console.log('          O orc bloqueou seu ataque!')};
  console.log('\n O adversário disparou um ataque feroz!');
  if (orc.dano>heroi.defesa){console.log('          Você foi atingido em cheio!')
  } else {console.log('          DEFENDEU!!!')};
};
if (heroi.vida>orc.vida){
  console.log('\n Você o acerta com um golpe fatal e o inimigo vai ao chão.\n\n O povo de Beleriand comemora a vitória "VIVA! NOSSO HERÓI"\n\n           ----- FIM DE JOGO -----')
  } else {console.log('\nVocê não resiste a força destruidora do inimigo e é derrotado.\n\n O povo se dispersa e o orc avança e esmaga a bela cidade\n\n           ----- FIM DE JOGO -----')};