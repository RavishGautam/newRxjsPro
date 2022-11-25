import { Component } from '@angular/core';
import {fromEvent, map, interval, take, concatAll} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newRxjsPro';
  
}
