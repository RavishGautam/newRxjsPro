import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { concat, interval, map, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private _du : DesignUtilityService) { }

  ngOnInit(): void {

    const sourceTech = interval(1500).pipe(map(v=> 'Tech Video #'+(v+1)),take(5))
    // sourceTech.subscribe((res:any)=>{
    //   console.log("res1-->",res)
    // })

    const sourceComedy = interval(1500).pipe(map(v=> 'Comedy Video #'+(v+1)),take(3))
    // sourceComedy.subscribe((res:any)=>{
    //   console.log("res2-->",res)
    // })

    const sourceNews = interval(1500).pipe(map(v=> 'News Video #'+(v+1)),take(4))
    
    
    const FinalObs = concat(sourceTech,sourceComedy,sourceNews)

    FinalObs.subscribe((res:any)=>{
      console.log("res3-->",res)
      this._du.print(res,'liContainer')
    })
  }

}
