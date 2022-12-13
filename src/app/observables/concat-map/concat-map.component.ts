import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { concatAll,from, concatMap, map, of, delay, mergeMap } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private _du : DesignUtilityService) { }

  getData(data:any){
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
  ngOnInit(): void {

    const source =from(['Tech','Comedy','News']) ;


    /// Ex- 01 /// Map
    source.pipe(map(res => this.getData(res)) )
    .subscribe((res)=>{
      console.log("res--->",res)
      this._du.print(res,'liContainer1')
    })



    /// Ex- 02 /// MergeMap
    source.pipe(mergeMap(res => this.getData(res)) )
    .subscribe((res)=>{
      console.log("res--->",res)
      this._du.print(res,'liContainer2')
    })



    /// Ex- 02 /// ConcatMap
    source.pipe(concatMap(res => this.getData(res)))
    .subscribe((res)=>{
      console.log("res--->",res)
      this._du.print(res,'liContainer3')
    })
  }

}
