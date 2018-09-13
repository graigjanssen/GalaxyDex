import { 
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges } from '@angular/core';
import { DetailService } from '../../../services/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [DetailService]
})

export class DetailComponent implements OnInit, OnChanges {
  @Input() data: any;
  
  private character: any;
  private films: any;

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this.character = changes.data.currentValue;
      this.getFilms(this.character.films);
    }
  }

  getFilms(urls: string[]): void {
    this.detailService.getFilms(urls)
      .subscribe(data => {
        this.films = data;
        console.log(this.films);
      });
  }



}
