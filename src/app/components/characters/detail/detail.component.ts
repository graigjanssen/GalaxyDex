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
  @Input() status: Status;
  character: any;
  films: any;
  
  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.status = {
      loading: false,
      success: false,
      error: false
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.character = changes.data.currentValue;
      this.films = [];
      this.getFilms(this.character.films);
    }
  }

  getFilms(urls: string[]): void {  
    this.detailService.getFilms(urls)
      .subscribe(data => {
        if (data) {
          this.status = {
            loading: false,
            success: true,
            error: false
          }
          this.films = data;
          console.log(this.films);
        }
      });
  }
}

interface Status {
  loading: boolean;
  success: boolean;
  error: boolean;
}
