import { DesignUtilityService } from './../../appServices/design-utility.service';
import { interval, Subscription, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg:any;
 videoSubscription !: Subscription;
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {

    //const brodCastVideos = interval(1000)
    //timer(dalay,interval) 
    // interval(interval)
    const brodCastVideos = timer(5000,1000)

   this.videoSubscription = brodCastVideos.subscribe((res:any)=>{
      console.log('data--->',res)
      this.obsMsg = "Video"+ parseInt(res)
this._designUtility.print(this.obsMsg,'liContainer')

      if(res >= 5){
        this.videoSubscription.unsubscribe()
      }
    })

    
  }

}
