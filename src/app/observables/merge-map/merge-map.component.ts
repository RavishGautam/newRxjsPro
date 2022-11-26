import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(private _du : DesignUtilityService) { }

  ngOnInit(): void {

    const source =from(['Tech','Comedy','News']) ;
    

    /// Ex - 01 // Map

    source.pipe(map(res => this.getData(res)))
    .subscribe((res:any)=>{
     // res.subscribe((res2:any)=>{
        //console.log("res2--->",res)
        this._du.print(res,"liContainer1")
     // })
    })


    /// Ex - 02  Map + mergeAll

    
    source.pipe(map(res => this.getData(res)),mergeAll())
    .subscribe((res:any)=>{
      //  console.log("res2--->",res)
        this._du.print(res,"liContainer2")
    })


     /// Ex - 03  mergeMap

    
     source.pipe(mergeMap(res => this.getData(res)))
     .subscribe((res:any)=>{
         console.log("res2--->",res)
         this._du.print(res,"liContainer3")
     })
  }

  getData(data:any){
    return of(data + 'Video Uploded');
  }
}
