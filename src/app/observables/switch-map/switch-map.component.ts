import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, map, of, switchAll, switchMap, delay, concatMap, mergeMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _du : DesignUtilityService) { }

  ngOnInit(): void {

    const source = from(['Tech','Comedy','News'])


    ////// Ex - 01 /// Map

    source.pipe(map(res => this.getData(res)))
    .subscribe((res)=>{
    console.log("res-->",res);
    this._du.print(res,"liContainer1")

    })


     ////// Ex - 02 /// Map + switchAll

     source.pipe(map(res => this.getData(res)),switchAll())
     .subscribe((res)=>{
     console.log("res-->",res);
     this._du.print(res,"liContainer2")
 
     })


     ////// Ex - 03 /// switchMap

     source.pipe(switchMap(res => this.getData(res)))
     .subscribe((res)=>{
     console.log("res-->",res);
     this._du.print(res,"liContainer3")
 
     })



     
    ////// Ex - 04 /// MergeMap

    source.pipe(mergeMap(res => this.getData(res)))
    .subscribe((res)=>{
    console.log("res-->",res);
    this._du.print(res,"liContainer4")

    })


     ////// Ex - 05 /// Concat Map

     source.pipe(concatMap(res => this.getData(res)))
     .subscribe((res)=>{
     console.log("res-->",res);
     this._du.print(res,"liContainer5")
 
     })


     ////// Ex - 06 /// switchMap

     source.pipe(switchMap(res => this.getData(res)))
     .subscribe((res)=>{
     console.log("res-->",res);
     this._du.print(res,"liContainer6")
 
     })
  }


  getData(data:any){
    return of(data + 'Video Uploded').pipe(delay(1500));
  }
}
