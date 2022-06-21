import { Component } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  hero: Hero = {
      id: 1,
      name: 'Rabinátor'
    };
}
