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
  characterData: any;
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getCharacters()
      .subscribe(data => {
        this.characters = data.characters;
      });
  }

  getCharacterData(url: string) {
    this.charactersService.getCharacterData(url)
      .subscribe(data => {
        this.characterData = JSON.parse(data['_body']);
      });
  }
}
