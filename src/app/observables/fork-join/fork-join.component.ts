import { forkJoin, fromEvent, map, take, zip } from 'rxjs';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements AfterViewInit {

  // Element Ref...
 @ViewChild('names') names !:ElementRef;
 @ViewChild('colors') colors!:ElementRef;

 // data Array

 person:any = ['Ram','Mohan','Shreya','Shona','Aadi','Kabir','Rishabh','Divyanshu','Shreyansh','Mansi'];
 colorSet:any = ['red','yellow','pink','brown','purple','orange','green','blue']
  constructor() { }

 
  ngAfterViewInit(): void {

   const personObs= fromEvent<any>(this.names.nativeElement,'change')
   .pipe(map(event => event.target.value),take(5))
   
    

   const colorObs =  fromEvent<any>(this.colors.nativeElement,'change')
   .pipe(map(event => event.target.value),take(5))
   
   
    zip(personObs,colorObs)
    .subscribe(([name,color])=>{
     console.log("name & color==>",name , color)
     this.createDiv(name,color)
    })

    forkJoin(personObs,colorObs)
    .subscribe(([name,color])=>{
     console.log("name==>",name)
     console.log("color==>",color)
     this.createDivForForkJoin(name,color)
    })
   
    
  }
  createDiv(name:any,color:any){
  let el = document.createElement('div');
  el.innerText = name;
  el.setAttribute('class',color);
  document.getElementById("elcontainer")?.append(el)
 }

 createDivForForkJoin(name:any,color:any){
  let el = document.createElement('div');
  el.innerText = name;
  el.setAttribute('class',color);
  document.getElementById("elcontainer2")?.append(el)
 }
}
