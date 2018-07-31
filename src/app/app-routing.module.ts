import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//import { HeroComponent } from './modules/heroes/components/heroes.component';


const routes: Routes = [
  {path: '', loadChildren: './modules/heroes/heroes.module#HeroesModule'},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}