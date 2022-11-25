import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(a:any, containerID:any){
    let el = document.createElement('li')
    el.innerText = a;
    document.getElementById(containerID)?.appendChild(el)
  }

}
