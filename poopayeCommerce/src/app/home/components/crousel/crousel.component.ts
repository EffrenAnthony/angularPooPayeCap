import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.scss']
})
export class CrouselComponent implements OnInit {
  carouselItems:any[] = [
    {
      image: 'https://blog.decorceramica.com/wp-content/uploads/2020/08/BLOG-disenos-sala-y-comedor.png',
      title: 'Juego de escritorio',
      content: 'Classic meet modern living, Bamboo has a fantastic range of indoor furniture, perfect for any modern home.'
    },
    {
      image: 'https://3csqt2dsli71aganokxe6smv-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/B-AB04BE167.jpg',
      title: 'Juego de Sala',
      content: 'Classic meet modern living, Bamboo has a fantastic range of indoor furniture, perfect for any modern home.'
    },
    {
      image: 'https://3csqt2dsli71aganokxe6smv-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/B-TN03CF151.jpg',
      title: 'Juego de Comedor',
      content: 'Classic meet modern living, Bamboo has a fantastic range of indoor furniture, perfect for any modern home.'
    }
  ];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit(): void {
  }

}
