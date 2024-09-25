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
      title: 'Halo Combat Evolved', 
      sinopsis: 'Halo inicia cuando el Pillar of Autumn sale del hiperespacio y llega a una misteriosa estación espacial en forma de anillo llamada «Halo» por el Covenant.22​ Una flota Covenant ataca de repente la nave, dañándola seriamente. El capitán Jacob Keyes inicia entonces el «Protocolo Cole»,23​ un procedimiento diseñado para prevenir que el Covenant obtenga información sobre la ubicación de la Tierra. Mientras Keyes maniobra la nave para el aterrizaje en el planeta anillo, el Jefe Maestro y Cortana, junto a un grupo de marinos, huyen a través de una «cápsula de escape», la cual se estrella en la superficie del anillo; Cortana y el Jefe son los únicos que sobreviven al impacto de la cápsula. ', 
      imagesCarousel1: ['Carrusel/carrusel1.jpg', 'Carrusel/carrusel2.jpeg', 'Carrusel/carrusel3.jpg'],
      imagesCarousel2: ['Carrusel/carrusel4.jpg', 'Carrusel/carrusel5.jpg', 'Carrusel/carrusel6.jpg'],
      cardText1: ' La historia de Halo: Combat Evolved comienza tras la caída de Reach, cuando el Pillar of Autumn huye del Covenant y llega a un misterioso anillo conocido como Halo. El Jefe Maestro y la IA Cortana son asignados a proteger la nave y evitar que Cortana caiga en manos del enemigo. Tras un ataque, el Jefe y otros supervivientes aterrizan en Halo, enfrentándose al Covenant. Mientras exploran, descubren que el Covenant busca activar Halo, creyendo que es una superarma. Tras rescatar al General Keyes, creen que deben encontrar la Sala de Control para evitar que el Covenant la active. Sin embargo, el Jefe y Cortana descubren la existencia de los Flood, una plaga parasitaria que amenaza con destruir toda forma de vida. ', 
      cardImage1: 'eto1.com', 
      cardText2: 'El Jefe Maestro, con la ayuda del monitor 343 Guilty Spark, obtiene el índice necesario para activar Halo. Sin embargo, Cortana revela que activar el anillo acabaría con toda vida en la galaxia. Deciden sabotear los planes del monitor y evitar que Halo sea activado, iniciando una lucha contra los Flood y el Covenant. Finalmente, el Jefe y Cortana regresan al Pillar of Autumn y sobrecargan los reactores nucleares para destruir Halo. Tras una dura batalla, logran escapar en una nave justo antes de que el anillo sea destruido. Aunque Halo ha sido desactivado, la amenaza del Covenant y los Flood sigue latente. ', 
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
    },
    { 
      id: 'halo3', 
      title: 'Otro título', 
      sinopsis: 'Otra sinopsis', 
      imagesCarousel1: ['Carrusel/otra1.jpg', 'Carrusel/otra2.jpg', 'Carrusel/otra3.jpg'],
      imagesCarousel2: ['Carrusel/otra4.jpg', 'Carrusel/otra5.jpg', 'Carrusel/otra6.jpg'],
      cardText1: 'Texto de tarjeta 1', 
      cardImage1: 'otra-img1.com', 
      cardText2: 'Texto de tarjeta 2', 
      cardImage2: 'otra-img2.com'
    },
    { 
      id: 'halo4', 
      title: 'Otro título', 
      sinopsis: 'Otra sinopsis', 
      imagesCarousel1: ['Carrusel/otra1.jpg', 'Carrusel/otra2.jpg', 'Carrusel/otra3.jpg'],
      imagesCarousel2: ['Carrusel/otra4.jpg', 'Carrusel/otra5.jpg', 'Carrusel/otra6.jpg'],
      cardText1: 'Texto de tarjeta 1', 
      cardImage1: 'otra-img1.com', 
      cardText2: 'Texto de tarjeta 2', 
      cardImage2: 'otra-img2.com'
    },
    { 
      id: 'halo5', 
      title: 'Otro título', 
      sinopsis: 'Otra sinopsis', 
      imagesCarousel1: ['Carrusel/otra1.jpg', 'Carrusel/otra2.jpg', 'Carrusel/otra3.jpg'],
      imagesCarousel2: ['Carrusel/otra4.jpg', 'Carrusel/otra5.jpg', 'Carrusel/otra6.jpg'],
      cardText1: 'Texto de tarjeta 1', 
      cardImage1: 'otra-img1.com', 
      cardText2: 'Texto de tarjeta 2', 
      cardImage2: 'otra-img2.com'
    },
    { 
      id: 'haloInfinite', 
      title: 'Otro título', 
      sinopsis: 'Otra sinopsis', 
      imagesCarousel1: ['Carrusel/otra1.jpg', 'Carrusel/otra2.jpg', 'Carrusel/otra3.jpg'],
      imagesCarousel2: ['Carrusel/otra4.jpg', 'Carrusel/otra5.jpg', 'Carrusel/otra6.jpg'],
      cardText1: 'Texto de tarjeta 1', 
      cardImage1: 'otra-img1.com', 
      cardText2: 'Texto de tarjeta 2', 
      cardImage2: 'otra-img2.com'
    },
    
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
