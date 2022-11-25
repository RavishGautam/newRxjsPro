import { DesignUtilityService } from './../../appServices/design-utility.service';
import { interval, map, Subscription, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  myColor :string = ''
data:any;
sub1 !: Subscription
sub2 !: Subscription
  constructor(private _du: DesignUtilityService) { }

  ngOnInit(): void {
    const source = interval(1500);
    /// Ex - 01
    const arr = ['aaa','bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kkk','lll','mmm','nnn','ooo']
   
   this.sub1 = source.pipe(
    tap(res=>{
      if(res == 5){
        this.sub1.unsubscribe() 
      }}),
    map(data=> arr[data]))
    .subscribe((res:any)=>{
     // console.log(res)
      this._du.print(res,'licontainer1')

    })

    //// Example - 02
    const colors =['Red','Green','Yellow','orange','Brown','Purple']

    this.sub2 = source.pipe(
      tap(res=>{
        console.log('tap =>',res)
        this.myColor = colors[res]
        if(res == 5){
          this.sub2.unsubscribe() 
        }}),
      map(data=> colors[data]))
      .subscribe((res:any)=>{
        console.log(res)
        //this.myColor = res
       this._du.print(res,'licontainer2')
  
      })


  }

}
