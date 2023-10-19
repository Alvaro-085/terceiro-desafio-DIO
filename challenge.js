//Neste desafio, primeiro iremos criar a classe heroi ou a nossa "receita de bolo" inicial

class heroi {
    constructor(nome,tipo,ataque){
        this.nome = nome;
        this.tipo = tipo;
        this.ataque = ataque;}

//classe criada, criaremos então o método atacar
atacar(){
    console.log(`O héroi de nome ${this.nome} e tipo ${this.tipo} atacou usando ${this.ataque}`)}}

//Feito isso, agora é a hora de criar objetos heroi
const herois = [
    new heroi('Dr. Estranho', 'mago', 'magia'),
    new heroi('Thor', 'guerreiro', 'espada'),
    new heroi('Anciã', 'monge', 'artes marciais'),
    new heroi('Gavião', 'ninja', 'shuriken'),
];

//por fim, precisamos de uma variável para selecionar o objeto herois

const selHeroi = herois[0] // Aqui é possível escolher um herói
selHeroi.atacar();






