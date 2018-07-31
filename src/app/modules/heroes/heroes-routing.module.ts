import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './components/heroes.component';

const heroesRoutes: Routes = [
    {
      path: '',
      component: HeroesComponent,
      children: [
        {path: '', component: HeroesComponent}
      ]
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(heroesRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class HeroRoutingModule {
  }