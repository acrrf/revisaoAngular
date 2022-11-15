import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nomeProduto: string = 'Golden - Seleção Natural';
  anuncio: string = `O ${this.nomeProduto} está em promoção`;
  idProduto: number = 3;
  precoProduto: number = 52.51;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png'
  dataValidade = '2021-12-31'

  constructor() { 
    
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('anuncio: ', this.anuncio);
    console.log('Id: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);
  }

  ngOnInit(): void {}

}
