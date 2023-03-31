import { Component, OnInit } from '@angular/core';
import { CardInterface } from './shared/CardInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'planets';

  planetsNormal: CardInterface[] = [
    {
      id: 1,
      name: 'earth',
      img: 'assets/images/earth.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 2,
      name: 'jupiter',
      img: 'assets/images/jupiter.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 3,
      name: 'mars',
      img: 'assets/images/mars.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 4,
      name: 'mercury',
      img: 'assets/images/mercury.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 5,
      name: 'saturn',
      img: 'assets/images/saturn.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 6,
      name: 'uranus',
      img: 'assets/images/uranus.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 7,
      name: 'earth',
      img: 'assets/images/earth.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 8,
      name: 'jupiter',
      img: 'assets/images/jupiter.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 9,
      name: 'mars',
      img: 'assets/images/mars.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 10,
      name: 'mercury',
      img: 'assets/images/mercury.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 11,
      name: 'saturn',
      img: 'assets/images/saturn.svg',
      isClicked: false,
      isChecked: false
    },
    {
      id: 12,
      name: 'uranus',
      img: 'assets/images/uranus.svg',
      isClicked: false,
      isChecked: false
    }
  ];

  
  ngOnInit(): void {
    this.planetsNormal = this.planetsNormal.sort(() => Math.random() - 0.5);
    console.log(this.planetsNormal)
  }
}
