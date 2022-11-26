import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit ,OnDestroy {

  nameValue : any ;
  constructor(private _du : DesignUtilityService) { }

  ngOnInit(): void {
    this._du.exclusive.next(true);
    this._du.inputDataToDisplay.subscribe((res)=>{
      console.log("Data_Display on Subject Component-->",res)
      this.nameValue = res;
    })
  }
ngOnDestroy(): void {
  this._du.exclusive.next(false)
}
}
