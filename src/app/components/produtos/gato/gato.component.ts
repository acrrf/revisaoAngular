import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent implements OnInit {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];
  objetoModelo = {
    nome: 'Fatima',
    idade:18,
    altura: 1.56,
    graduado: true
  };
  listaProdutos: any[] = [
    {nome: 'Golden Gatos', precoProduto: 51.90, validade: '2023-12-31', id: 1},
    {nome: 'Papagatos', precoProduto: 6.60, validade: '2023-12-31', id: 2},
    {id: 3, nome: 'Rasqueadeira', precoProduto: 14.50, validade: '2023-12-31'},
    
  ];

  constructor() { 
    for (let item of this.listaStrings) {
      console.log(item);
    }

    for(const item of this.listaNumeros) {
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
   
  }

  ngOnInit(): void {
  }

}
