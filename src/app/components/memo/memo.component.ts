import { Component, Input } from '@angular/core';
import { CardInterface } from 'src/app/shared/CardInterface';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent {

  @Input() cards: CardInterface[] = [];
  isClicked: boolean = false;
  selectedCards: CardInterface[] = [];
  score: number = 0;
  attempts: number = 0;

  imageDefault: CardInterface = {
    id: 6,
    name: 'universe',
    img: 'assets/images/universe.svg',
    isClicked: false,
    isChecked: false
  }

  imageSuccess: CardInterface = {
    id: 6,
    name: 'tick',
    img: 'assets/images/tick.svg',
    isClicked: false,
    isChecked: false
  }

  public check(planet: CardInterface): void {
    planet.isClicked = true;
    this.selectedCards.push(planet);
    if (this.selectedCards[0] && this.selectedCards[1]) {
      if (this.selectedCards[0].id === this.selectedCards[1].id) {
        this.selectedCards[0].isClicked = false;
        this.selectedCards = []
        this.attempts++;
        console.log(this.attempts);
        return;
      }
      if (this.selectedCards[0].isChecked) {
        this.selectedCards = [];
        this.attempts++;
        console.log(this.attempts);
        return;
      }
    }
    if (this.selectedCards[0] !== undefined && this.selectedCards[1] !== undefined) {
      if (this.selectedCards[0].name === this.selectedCards[1].name) {
        this.selectedCards[0].isChecked = true;
        this.selectedCards[0].isClicked = false;
        this.selectedCards[1].isChecked = true;
        this.selectedCards[1].isClicked = false;
        this.selectedCards = [];
        this.attempts++;
        console.log(this.attempts);
        this.score++;
      } else if (this.selectedCards[0].name !== this.selectedCards[1].name) {
        setTimeout (() => {
          this.selectedCards[0].isChecked = false;
          this.selectedCards[0].isClicked = false;
          this.selectedCards[1].isChecked = false;
          this.selectedCards[1].isClicked = false;
          this.selectedCards = [];
          this.attempts++;
          console.log(this.attempts);
        }, 500)
      }
    }
  }

}
