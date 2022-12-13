import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, concatMap, exhaustMap, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit ,AfterViewInit{

  @ViewChild('btnClick')btnClick!:ElementRef
  num :any = 0;
  url:any = "http://localhost:3000/clicks/";
  requestData : any ;
  feching :boolean= false;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const source = fromEvent(this.btnClick.nativeElement,'click').pipe(
      tap(()=>this.feching = true),
      exhaustMap(res=>this.onSave(this.num++)));
    source.subscribe((res)=>{
      console.log(res)
      this.onFetch()
    })
  }
  onSave(changes:any){
   return this.http.put(this.url, {data:changes})
  }
  // btnClick(){
  //   console.log("button Clicked")
  //   this.onSave(this.num++).subscribe((res)=>{
  //     console.log("res-->",res)
  //   })
  //}

  onFetch(){
    this.http.get<any>(this.url).subscribe((res)=>{
      console.log(res.data)
      this.requestData = res.data
      this.feching = false
    })
  }

}
