import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesModule } from './modules/heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found.component/page-not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { VideolibComponent } from './videolib/videolib.component';
import { VideolibChildComponent } from './videolib/videolibchild.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    VideolibComponent,
    VideolibChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HeroesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
