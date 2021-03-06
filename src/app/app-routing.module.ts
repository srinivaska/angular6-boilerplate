import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './modules/heroes/components/heroes.component';
import { PageNotFoundComponent } from './shared/components/page-not-found.component/page-not-found.component';

const routes: Routes = [
  {path: '', component: HeroesComponent },
  {path: '**', component: PageNotFoundComponent}
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