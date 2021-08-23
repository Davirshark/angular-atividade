import { Component } from '@angular/core';
import { Cliente } from './cliente.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nome = "";
  idade = 0;

  clientes = [
    new Cliente( "Davi", 21),
    new Cliente( "Elias", 44)
  ];

  salvar() {
    const d = new Cliente(this.nome, this.idade);
    this.clientes.push(d);
    this.nome = "";
    this.idade = 0;
  }
}


