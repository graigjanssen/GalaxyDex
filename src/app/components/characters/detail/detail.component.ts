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
  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.data.firstChange && changes.data.currentValue) {
      console.log('data we can use: ', changes.data.currentValue);
    }
  }

}
