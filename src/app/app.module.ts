import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { DetailComponent } from './components/characters/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
