import { DesignUtilityService } from './../../appServices/design-utility.service';
import { from, fromEvent, interval, map, Subscription, take, takeLast, takeUntil, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
 subs1 !: Subscription
 randomNames = ['Ram','Mohan','Krishna','Kalyan','Rishabh','Deepak']
  constructor(private _du : DesignUtilityService) { }

  ngOnInit(): void {

    const nameSource = from(this.randomNames)

    /// Example -01 (Take)

    nameSource.pipe(take(5)).subscribe((res)=>{
      console.log("res1==>",res)
      this._du.print(res,'licontainer1')
     })

     /// Example -02 (TakeLast)

    nameSource.pipe(takeLast(5)).subscribe((res)=>{
      console.log("res2==>",res)
      this._du.print(res,'licontainer2')
     })


      /// Example -03 (TakeUntill)
      const source = interval(1000)
      let condition1 = timer(10000)
      let condition2 = fromEvent(document,'click');

    source.pipe(map(res => 'Number '+res),takeUntil(condition2)).subscribe((res)=>{
      console.log("res2==>",res)
      this._du.print(res,'licontainer3')
     })
  }

}
