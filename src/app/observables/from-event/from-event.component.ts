import { DesignUtilityService } from './../../appServices/design-utility.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor(private _designUtility : DesignUtilityService) { }
  @ViewChild('addBtn') addBtn!: ElementRef
  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click')
      .subscribe((res: any) => {
        let countVal= "video"+" "+ count++
        //console.log(countVal)
        this._designUtility.print(countVal,'elContainer');
        this._designUtility.print(countVal,'elContainer2')
      })
  }
  
}



