import { interval, Subscription, map, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // subscription
  subs1 !: Subscription
  subs2 !: Subscription
  subs3 !: Subscription

  // message
  msg1: any;
  msg2: any;
  msg3: any;
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {

    //// Ex -01
    const broadCastVideo = interval(2000)

    this.subs1 = broadCastVideo.pipe(map(
      data => 'Video ' + data))
      .subscribe((res) => {
        //console.log(res)
        this.msg1 = res
      })

    setTimeout(() => {
      this.subs1.unsubscribe()
    }, 20000)



    //// Ex -02

    this.subs2 = broadCastVideo.pipe(map(data => data * 5))
      .subscribe((res) => {
       // console.log('res', res)
        this.msg2 = res;
      })

    setTimeout(() => {
      this.subs2.unsubscribe()
    }, 20000)


    //// Ex -02
    const members = [
      { id: 1, name: "aaa" },
      { id: 2, name: "bbb" },
      { id: 3, name: "ccc" },
      { id: 4, name: "ddd" },
      { id: 5, name: "eee" },
      { id: 6, name: "fff" },
      { id: 7, name: "ggg" },
      { id: 8, name: "hhh" },
    ]
    let memObs = from(members);

    memObs.pipe(
      map(data => data.name))
      .subscribe((res:any)=>{
      console.log(res)
      this._designUtility.print(res,'licontainer')

    })
  }





}
