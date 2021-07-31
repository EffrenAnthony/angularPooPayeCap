import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[] = [
    {
      name:'Mueble xyz',
      id: 0,
      image: 'https://gruponatic.pe/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/m/u/mueble.jpg',
      price: 25.5
    },
    {
      name:'Silla de madera',
      id: 1,
      image: 'https://mk0cehiparsytncgwt4s.kinstacdn.com/wp-content/uploads/2020/07/Silla.jpg',
      price: 25.5
    },
    {
      name:'Mueble QWERTY',
      id: 2,
      image: 'https://www.tventas.com/6989081-large_default/cobertor-para-sofa-1-puesto-couch-cover.jpg',
      price: 25.5
    },
    {
      name:'Sillar gamer',
      id: 3,
      image: 'https://www.tuexperto.com/wp-content/uploads/2019/05/sillas-gaming-para-pc-que-tener-en-cuenta-al-comprar-una.jpg',
      price: 25.5
    },
    {
      name:'Silla de escritorio',
      id: 4,
      image: 'https://tiendasbuenosaires.com.ar/images/thumbs/0000711_sillon-ejecutivo-gerencial-bajo-silla-pc-oficina-929a_600.jpeg',
      price: 25.5
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
