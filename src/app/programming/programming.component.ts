import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {

  projects = [{
      "id": 1,
      "name": "Ecommerce Store",
      "desc": "React With Redux",
      "img":  "../../assets/ecommerce.png",
      "link": "https://git.berkleyhoran.me/React-Ecommerce/"
    },
    {
      "id" : 2,
      "name" : "Angular Golf App",
      "desc": "Angular",
      "img": "../../assets/angulargolf.png",
      "link": "https://golfscorecard-2f730.firebaseapp.com/welcome"
    },
    {
      "id" : 4,
      "name" : "To Do App",
      "desc": "Jquery and Javascript",
      "img": "../../assets/todoapp.png",
      "link": "http://git.berkleyhoran.me/jubilant-octo-fiesta/"
    },
    {
      "id" : 5,
      "name" : "Javscript Golf App",
      "desc": "Javascript",
      "img": "../../assets/jsgolf.png",
      "link": "http://git.berkleyhoran.me/golfproject/"
    },
    {
      "id" : 6,
      "name" : "Giphy Chat",
      "desc": "Angular and Firebase",
      "img": "../../assets/giphychat.png",
      "link": "https://giphy-firestore.firebaseapp.com/login"
    },
    {
      "id" : 7,
      "name" : "Pokemon Sprite Viewer",
      "desc": "Javascript",
      "img": "../../assets/spriteviewer.png",
      "link": "https://git.berkleyhoran.me/pokemonlooker/"
    },
    {
      "id" : 8,
      "name" : "Machine Learning",
      "desc": "Java in Processing",
      "img": "../../assets/ml.png",
      "link": "http://git.berkleyhoran.me/machineLearning/"
    },
    {
      "id" : 9,
      "name" : "Perlin Noise",
      "desc": "Java in Processing",
      "img": "../../assets/perlin.png",
      "link": "http://git.berkleyhoran.me/MTECH/processing/"
    }
  ]

  
  

  constructor() {

  }

  ngOnInit() {
    
  }

}
