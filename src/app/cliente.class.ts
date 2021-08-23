export class Cliente {
    nome: string;
    id: string;
    idade: number;
  
    constructor(id: string, nome: string, idade: number) {
      this.id = id;
      this.nome = nome;
      this.idade = idade;
    }
  }