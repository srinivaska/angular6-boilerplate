import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesModule } from './modules/heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found.component/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
