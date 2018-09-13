import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
  providers: [CharactersService]
})
export class CharactersComponent implements OnInit {
  characters: any;
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters()
      .subscribe(data => {
        this.characters = data.characters;
      });
  }
}
