import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[] = [
    {
      name:'Polo',
      id: 0,
      image: 'https://www.peru.projectpieta.com/wp-content/uploads/2019/12/AZUL.jpg',
      price: 25.5
    },
    {
      name:'Polo1',
      id: 1,
      image: 'https://www.trenda.pe/uploads/product/pique-quantum-avengers-mujer.jpg',
      price: 25.5
    },
    {
      name:'Polo2',
      id: 2,
      image: 'https://yirkosivirich.com/wp-content/uploads/2020/07/POLO-ESCUDO-BLANCO_e000_a000.jpg',
      price: 25.5
    },
    {
      name:'Polo3',
      id: 3,
      image: 'https://cdn-images.farfetch-contents.com/12/42/78/14/12427814_12406199_600.jpg',
      price: 25.5
    },
    {
      name:'Polo4',
      id: 4,
      image: 'https://plazavea.vteximg.com.br/arquivos/ids/508527-1000-1000/image-b18db181d94e48318d335c8942892aa7.jpg?v=637413110261500000',
      price: 25.5
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
