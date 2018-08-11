import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeroesComponent } from './components/heroes.component';
import { HeroRoutingModule } from './heroes-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule,
        ReactiveFormsModule,
        TooltipModule.forRoot()
    ],
    declarations: [
        HeroesComponent
    ],
})
export class HeroesModule { }