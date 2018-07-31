import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../shared/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: '../pages/heroes.component.html',
  styleUrls: ['../pages/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}