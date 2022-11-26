import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
inputData : any;
  constructor( private _du : DesignUtilityService) { }

  ngOnInit(): void {
    this._du.inputDataToDisplay.subscribe((res)=>{
      this.inputData = res;
    })
    
  }

  getInputText(data:any){
    console.log("entered Data is-->",data.value)
    this.inputData = data.value;
    this._du.inputDataToDisplay.next(this.inputData)
  }

}
