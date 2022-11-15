import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cachorro',
  templateUrl: './cachorro.component.html',
  styleUrls: ['./cachorro.component.css']
})
export class CachorroComponent implements OnInit {
  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Fatima',
    idade:18,
    altura: 1.56,
    graduado: true
  };
  listaProdutos: any[] = [
    {nome: 'Golden Seleção Natural', precoProduto: 149.90, validade: '2023-12-31', id: 1},
    {nome: 'Biscrok', precoProduto: 17.60, validade: '2023-12-31', id: 2},
    {id: 3, nome: 'Doguitos', precoProduto: 4.50, validade: '2023-12-31'},
    
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
