import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-p',
  templateUrl: './history-p.component.html',
  styleUrls: ['./history-p.component.css']
})
export class HistoryPComponent implements OnInit {
  //para gruadr el id
  storyId: string = ''; 
  //con este se supone guarda las histrias que se cargan
  story: any = {}; 

  
  stories = [
    { 
      id: 'halo1', 
      title: 'gggggggggggw', 
      sinopsis: 'owo', 
      imagesCarousel1: ['Carrusel/carrusel1.jpg', 'Carrusel/carrusel2.jpeg', 'Carrusel/carrusel3.jpg'],
      imagesCarousel2: ['Carrusel/carrusel4.jpg', 'Carrusel/carrusel5.jpg', 'Carrusel/carrusel6.jpg'],
      cardText1: 'eto1', 
      cardImage1: 'eto1.com', 
      cardText2: 'eto2', 
      cardImage2: 'eto.com2'
    },
    { 
      id: 'halo2', 
      title: 'Otro título', 
      sinopsis: 'Otra sinopsis', 
      imagesCarousel1: ['Carrusel/otra1.jpg', 'Carrusel/otra2.jpg', 'Carrusel/otra3.jpg'],
      imagesCarousel2: ['Carrusel/otra4.jpg', 'Carrusel/otra5.jpg', 'Carrusel/otra6.jpg'],
      cardText1: 'Texto de tarjeta 1', 
      cardImage1: 'otra-img1.com', 
      cardText2: 'Texto de tarjeta 2', 
      cardImage2: 'otra-img2.com'
    }
    
  ];

  constructor(private route: ActivatedRoute) { }
  //con este se carga la historia que corresponda al id que se pasa
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.storyId = params.get('id') || ''; 
      this.loadStory(this.storyId); 
    });
  }

  loadStory(storyId: string) {
    //obtiene la historia del array
    this.story = this.stories.find(s => s.id === storyId); 
    if (this.story) {
      console.log('Historia cargada:', this.story);
    } else {
      console.log('Historia no encontrada.');
    }
  }
}
