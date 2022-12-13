import { Component, OnInit } from '@angular/core';
import {  interval, map, merge, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private _du : DesignUtilityService) { }

 
  ngOnInit(): void {

    const sourceTech = interval(3000).pipe(map(v=> 'Tech Video #'+(v+1)),take(5))
    sourceTech.subscribe((res:any)=>{
      console.log("res1-->",res)
    })

    const sourceComedy = interval(4500).pipe(map(v=> 'Comedy Video #'+(v+1)),take(3))
    // sourceComedy.subscribe((res:any)=>{
    //   console.log("res2-->",res)
    // })

    const sourceNews = interval(6000).pipe(map(v=> 'News Video #'+(v+1)),take(4))
    
    
    const FinalObs = merge(sourceTech,sourceComedy,sourceNews)

    FinalObs.subscribe((res:any)=>{
      console.log("res3-->",res)
      this._du.print(res,'liContainer')
    })
  }

}
