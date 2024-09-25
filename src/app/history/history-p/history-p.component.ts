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
      imagesCarousel1: ['HaloCe/haloce12.jpg', 'HaloCe/halo7.jpg','HaloCe/haloce6.jpg', 'HaloCe/halo8.jpg'],
      imagesCarousel2: ['HaloCe/halo9.jpg', 'HaloCe/haloce5.png', 'HaloCe/haloce11.jpg', 'HaloCe/halo10.jpg'],
      cardText1: ' La historia de Halo: Combat Evolved comienza tras la caída de Reach, cuando el Pillar of Autumn huye del Covenant y llega a un misterioso anillo conocido como Halo. El Jefe Maestro y la IA Cortana son asignados a proteger la nave y evitar que Cortana caiga en manos del enemigo. Tras un ataque, el Jefe y otros supervivientes aterrizan en Halo, enfrentándose al Covenant. Mientras exploran, descubren que el Covenant busca activar Halo, creyendo que es una superarma. Tras rescatar al General Keyes, creen que deben encontrar la Sala de Control para evitar que el Covenant la active. Sin embargo, el Jefe y Cortana descubren la existencia de los Flood, una plaga parasitaria que amenaza con destruir toda forma de vida. ', 
      cardImage1: 'HaloCe/haloce4.png', 
      cardText2: 'El Jefe Maestro, con la ayuda del monitor 343 Guilty Spark, obtiene el índice necesario para activar Halo. Sin embargo, Cortana revela que activar el anillo acabaría con toda vida en la galaxia. Deciden sabotear los planes del monitor y evitar que Halo sea activado, iniciando una lucha contra los Flood y el Covenant. Finalmente, el Jefe y Cortana regresan al Pillar of Autumn y sobrecargan los reactores nucleares para destruir Halo. Tras una dura batalla, logran escapar en una nave justo antes de que el anillo sea destruido. Aunque Halo ha sido desactivado, la amenaza del Covenant y los Flood sigue latente. ', 
      cardImage2: 'HaloCe/haloce1.png'
    },
    { 
      id: 'halo2', 
      title: 'HALO 2', 
      sinopsis: 'Los acontecimientos relatados en Halo 2 ocurren después de aquellos narrados en la novela Halo: First Strike. El juego inicia con un juicio en contra de un comandante Zealot Elite del Covenant, dentro de una enorme estructura flotante que sirve a manera de ciudad llamada High Charity. El Elite es revocado de su rango y señalado como hereje por no evitar que los humanos destruyeran la primera instalación de Halo. Debe señalarse que el interés del Covenant respecto a los planetas Halo subyace en una creencia religiosa en la que suponen que mediante la activación de los anillos se daría paso al llamado «Gran Viaje», que a su vez les permitiría salvarse a los creyentes más fieles del Covenant. ', 
      imagesCarousel1: ['Halo2/halo23.jpg','Halo2/halo22.jpg','Halo2/halo24.jpg','Halo2/halo26.jpg' ],
      imagesCarousel2: ['Halo2/halo27.jpg','Halo2/halo210.jpg','Halo2/halo29.jpg','Halo2/halo21.jpg' ],
      cardText1: 'En el inicio de Halo 2, los jugadores son presentados a las ruinas de Halo y a la imponente fortaleza espacial conocida como Santa Trinidad, el corazón del Pacto. Aquí, un élite de armadura dorada, responsable del fracaso en su misión anterior, es juzgado por los tres grandes profetas, uno de los cuales es una proyección holográfica. La sentencia es severa; el élite es despojado de su estatus y marcado como hereje, impidiéndole así participar en el Gran Viaje, lo que sienta las bases para el conflicto que se desarrollará en el juego. Mientras tanto, el Jefe Maestro, quien prueba los nuevos sistemas de su armadura, es convocado por el sargento Johnson para asistir a una reunión con el alto mando. Durante el viaje, Johnson recuerda cómo la defensa espacial de la Tierra era solo una teoría en sus inicios, pero ahora existen múltiples estaciones espaciales. Al llegar a la zona de mando, reciben condecoraciones por sus acciones heroicas en el primer Halo, donde la hija del general Keyes, Miranda, también es reconocida. Sin embargo, la celebración es interrumpida por un ataque del Pacto, lo que lleva al Jefe Maestro a prepararse. ', 
      cardImage1: 'Halo2/halo25.jpg', 
      cardText2: 'El Jefe Maestro se enfrenta a nuevas amenazas, mientras ayuda a Miranda a evacuar su nave de combate tras una explosión devastadora. Cortana, descubre que los enemigos están colocando bombas dentro de las estaciones de defensa, lo que obliga al Jefe Maestro a desactivar una bomba en su base y usarla para destruir una nave de comandancia del Pacto. Después de su éxito, él y Miranda se dirigen a Nueva Mombassa, donde el Pacto está atacando, preparando el terreno para una intensa batalla. Durante el combate en Nueva Mombassa, el Jefe Maestro se enfrenta a un Scarab, una poderosa máquina de guerra del Pacto. Después de destruir la máquina, Cortana revela que el Pacto no está ahí solo para exterminar a la humanidad, sino por un objetivo más oscuro relacionado con Halo. Mientras tanto, el élite hereje, que se convierte en Inquisidor, debe silenciar a los que cuestionan la verdad de los profetas. A medida que la historia avanza, se producen alianzas inesperadas y la revelación de la verdadera naturaleza de Halo, preparando el escenario para un conflicto aún mayor entre el Jefe y los demas que quieren destrir todo. ', 
      cardImage2: 'Halo2/halo28.jpg',
    },
    { 
      id: 'halo3', 
      title: 'HALO 3', 
      sinopsis: 'Tomando lugar brevemente después de la serie de historietas Halo Uprising, Halo 3 la historia comienza un mes después de los eventos de Halo 2 y Halo 3 ODST. Halo 3 se encuentra en un entorno de ciencia ficción durante los años 2552 y 2553. En el año 2525, una alianza teocrática de razas alienígenas conocida como el Covenant.12 El Covenant declara a la humanidad como una ofensa a sus dioses y comienza a destruir colonias humanas bombardeando los planetas con descargas de plasma, convirtiendo sus superficies en vidrio. A pesar de los esfuerzos para prevenir que el Covenant encuentre nuevos mundos humanos, una flota del el Covenant descubre la Tierra durante Halo 2. ', 
      imagesCarousel1: ['Halo3/halo31.jpg','Halo3/halo34.png','Halo3/halo33.jpg','Halo3/halo32.jpg' ],
      imagesCarousel2: ['Halo3/halo35.jpg','Halo3/halo38.jpg', 'Halo3/halo39.jpg','Halo3/halo310.jpg', ],
      cardText1: 'La historia de Halo 3 se sitúa dos semanas después de los eventos de Halo 2, el Jefe inicia cayendo en una jungla de África. El Inquisidor y el Sargento Johnson lo recoge, el grupo intenta evacuar mientras son atacados por los Covenant. Después de sobrevivir a un ataque en una base del UNSC, donde Miranda Keyes y Lord Hood planean un ataque contra el Profeta de la Verdad, el Jefe Maestro logra rescatar a los soldados prisioneros y activa una bomba para destruir a los Covenant que permanecen en la base. Sin embargo, los Covenant descubren sus planes, lo que obliga al Jefe a luchar contra ellos y finalmente evacuar. Luego el Jefe Maestro lidera a un grupo de marines hacia la ciudad de Voi, donde se enfrentan a las fuerzas Covenant. El Profeta de la Verdad activa un artefacto Forerunner, revelando un portal. Al mismo tiempo, los Flood, parásitos mortales, invaden la ciudad. Los Elites ayudan a contener la infestación, pero la ciudad se pierde. Cortana advirte sobre la llegada de una flota de Flood y sugiriendo que el portal podría ofrecer una solución para erradicar la amenaza sin activar los anillos de Halo. ', 
      cardImage1: 'Halo3/halo36.jpg', 
      cardText2: 'El Jefe y su equipo atraviesan el portal y llegan a la verdadera Arca, donde se localiza el mapa Cartógrafo. Sin embargo, son atacados por el Covenant y, después de un enfrentamiento, logran desactivar los generadores de la Arca. Cuando la gran ciudad sagrada de los Profetas, se estrelló, el Jefe y el Inquisidor se ven obligados a aliarse temporalmente con Gravemind, el líder de los Flood, para evitar que el Profeta de la Verdad active los anillos de Halo. A pesar de las traiciones y pérdidas, logran detener el plan de Verdad, pero a costa de sacrificios. Finalmente, el Jefe descubre que un nuevo anillo Halo está en construcción en la Arca. Con la ayuda de Cortana, el Jefe activa el anillo para acabar con los Flood antes de que se complete. Después de una batalla contra el Monitor 343 Guilty Spark, el Jefe logra destruirlo y activar el anillo. Mientras se escapan a bordo de la fragata UNSC Forward Unto Dawn, el Jefe y Cortana son separados de su grupo por la explosión del anillo. Finalmente el Jefe se coloca en una cámara criogénica, prometiendo a Cortana que la despertará cuando la necesite, dejando su destino incierto. ',
      cardImage2: 'Halo3/halo37.png',
    },
    { 
      id: 'halo4', 
      title: 'HALO 4', 
      sinopsis: 'Halo 4 continúa la saga del icónico protagonista, el Master Chief, y su compañera de inteligencia artificial, Cortana. La historia se retoma cuatro años después de los eventos de Halo 3, con el Master Chief despertando a bordo del navío espacial dañado, Forward Unto Dawn. Rápidamente se encuentran con una nueva amenaza: el Didacta, un antiguo guerrero Forerunner que busca erradicar la humanidad. La campaña principal lleva a los jugadores a través de varios entornos, desde el misterioso planeta Forerunner de Requiem hasta el espacio profundo, enfrentando tanto a las fuerzas Covenant como a los nuevos enemigos Prometheans.'  ,
      imagesCarousel1: ['Halo4/halo4.jpg','Halo4/halo4.jpg','Halo4/halo4.jpg','Halo4/halo4.jpg' ],
      imagesCarousel2: ['Halo4/halo4.jpg','Halo4/halo4','Halo4/halo4','Halo4/halo4' ],
      cardText1: 'Texto de tarjeta 1', 
      cardImage1: 'Halo4/halo4', 
      cardText2: 'Texto de tarjeta 2', 
      cardImage2: 'Halo4/halo4',
    },
    { 
      id: 'halo5', 
      title: 'Otro título', 
      sinopsis: 'Otra sinopsis', 
      imagesCarousel1: ['Halo5/halo5.jpg','Halo5/halo5.jpg','Halo5/halo5.jpg','Halo5/halo5.jpg' ],
      imagesCarousel2: ['Halo5/halo5.jpg','Halo5/halo5.jpg','Halo5/halo5.jpg','Halo5/halo5.jpg' ],
      cardText1: 'Texto de tarjeta 1', 
      cardImage1: 'Halo5/halo5.jpg', 
      cardText2: 'Texto de tarjeta 2', 
      cardImage2: 'Halo5/halo5.jpg',
    },
    { 
      id: 'haloInfinite', 
      title: 'Otro título', 
      sinopsis: 'Otra sinopsis', 
      imagesCarousel1: ['Halo6/halo6.jpg','Halo6/halo6.jpg','Halo6/halo6.jpg','Halo6/halo6.jpg' ],
      imagesCarousel2: ['Halo6/halo6.jpg','Halo6/halo6.jpg','Halo6/halo6.jpg','Halo6/halo6.jpg' ],
      cardText1: 'Texto de tarjeta 1', 
      cardImage1: 'Halo6/halo6.jpg', 
      cardText2: 'Texto de tarjeta 2', 
      cardImage2: 'Halo6/halo6.jpg',
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
