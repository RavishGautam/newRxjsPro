import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

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
