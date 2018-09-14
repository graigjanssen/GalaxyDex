import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
  providers: [CharactersService]
})

export class CharactersComponent implements OnInit {
  status: Status;
  characters: any;
  characterData: any;
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.status = {
      loading: false,
      success: false,
      error: false
    }

    this.charactersService.getCharacters()
      .subscribe(data => {
        this.characters = data.characters;
      });
  }

  getCharacterData(url: string) {
    this.status = {
      loading: true,
      success: false,
      error: false
    };
    this.charactersService.getCharacterData(url)
      .subscribe(data => {
        if (data) {
          this.characterData = data;
        }
      }, err => {
        this.status = {
          loading: false,
          success: false,
          error: true
        }
      });
  }
}

interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}
