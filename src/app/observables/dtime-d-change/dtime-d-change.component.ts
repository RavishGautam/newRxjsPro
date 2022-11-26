import { debounceTime, distinctUntilChanged, fromEvent, map, } from 'rxjs';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dtime-d-change',
  templateUrl: './dtime-d-change.component.html',
  styleUrls: ['./dtime-d-change.component.scss']
})
export class DtimeDChangeComponent implements OnInit ,AfterViewInit{

  @ViewChild('myInput') myInput !: ElementRef;
  @ViewChild('myInput2') myInput2 !: ElementRef;
  constructor( ) { }
searchData1 :any = null;
searchData2 :any = null;
progressValue1 : any ;
  ngOnInit(): void {

    
  }

  ngAfterViewInit(): void {

 /// Example - 01   -----  debounceTime

    const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup')
    .pipe(map(e => e.target.value),
    debounceTime(1500))

    

    searchTerm.subscribe((res)=>{

      this.progressValue1 = 80;
      console.log("res-->",res)
      this.searchData1 = res;

      setTimeout(()=>{
        this.searchData1 = null;
        this.progressValue1 = 0;
      },2000)

    })


 /// Example - 02
 const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement,'keyup')
 .pipe(map(e => e.target.value),
 debounceTime(500),distinctUntilChanged())

 

 searchTerm2.subscribe((res)=>{
  this.progressValue1 = 80;
   console.log("res-->",res)
   this.searchData2 = res;

   setTimeout(()=>{
     this.searchData2 = null;
     this.progressValue1 = 0;
   },1000)

 })
  

    
  }

}
