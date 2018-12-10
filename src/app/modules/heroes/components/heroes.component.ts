import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../shared/models/hero';
import {APIService} from '../../../core/services/apiServices';

@Component({
  selector: 'app-heroes',
  templateUrl: '../pages/heroes.component.html',
  styleUrls: ['../pages/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  users: any;
  constructor(private API: APIService) { }

  ngOnInit() {
    this.API.getUsers()
    .subscribe( data => {
      this.users = data;
      console.log( this.users.data[1]);
    });
  }

}