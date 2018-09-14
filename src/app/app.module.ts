import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
