import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesComponent } from './components/heroes.component';
import { HeroRoutingModule } from './heroes-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        HeroesComponent
    ],
})
export class HeroesModule { }