import { Component } from '@angular/core';
import { Cliente } from './cliente.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    clientes = [
     new Cliente ("1", "Davi", 21),
     new Cliente ("2", "Elias", 44)
    ];
  }

