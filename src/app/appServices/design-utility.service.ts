import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  //inputDataToDisplay = new Subject<string>();
  inputDataToDisplay = new BehaviorSubject<string>('Ravish');

  videoEmit = new ReplaySubject<string>(2,5000);
  constructor() { }

  print(a:any, containerID:any){
    let el = document.createElement('li')
    el.innerText = a;
    document.getElementById(containerID)?.appendChild(el)
  }

}
