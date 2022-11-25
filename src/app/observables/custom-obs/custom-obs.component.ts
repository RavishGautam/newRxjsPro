import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.scss']
})
export class CustomObsComponent implements OnInit , OnDestroy{
  techStatus:any;
  techStatus2:any;
  subs2 !: Subscription
  names :any;
  nameStatus :any;
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {

////*********************************************************************************************////
    // Ex - 01 (Manual)
    const cusObs1 = Observable.create((ob:any)=>{
      setTimeout(()=>{
        ob.next('Angular')
      },1000);
      setTimeout(()=>{
        ob.next('Typescript')
      },2000);
      setTimeout(()=>{
        ob.next('HTML/CSS')
        //ob.complete()
        
      },4000);
      setTimeout(()=>{
        ob.next('JavaScript')
        //ob.error('Limit Exide');
         
      },6000);
      setTimeout(()=>{
        ob.next('Jquery')
        ob.complete();
        
      },10000);
    })
    cusObs1.subscribe((res:any)=>{
     // console.log("custome obs--->",res)
      this._designUtility.print(res, 'licontainer1')
    },(err:any) =>{
      this.techStatus = 'error';
    },()=>{
      this.techStatus = 'completed';
    })

    ////*********************************************************************************************////
    ////// example - 02 (Custom interval)

    const arr2 = ['angular','Typescript','HTML/CSS','JavaScript','Jquery']
     const cusObs2 = Observable.create((ob:any)=>{
      let count = 0;
      setInterval(()=>{
       // ob.next('data Emit')
        ob.next(arr2[count] );
        
        if(count == 3){
          ob.error();
        }
        if(count >= 5){
          ob.complete();
        }
        count ++;
      },2000)
     })
     this.subs2 = cusObs2.subscribe((res:any)=>{
      //console.log("custom Obs Data Emit----<>",res)
       this._designUtility.print(res,'licontainer2')
     },(err:any) =>{
      this.techStatus2 = 'error';
    },()=>{
      this.techStatus2 = 'completed';
    })


    ////*********************************************************************************************////
    ///// Example - 03 (Random Name)
    const arr3 = ['ram', 'shyam', 'mohan','jhon', 'alex']
    const cusObs3 = Observable.create((ob:any)=>{
      let count = 0;
      setInterval(()=>{
        ob.next(arr3[count])
        if(count == 3){
          //ob.error();
        }
        if(count >= 4){
          ob.complete();
        }
        count++
      },2000)
      
    })
   
    cusObs3.subscribe((res:any)=>{
      console.log('ex -3 ===>',res)
      this.names = res;
    },(err:any) =>{
      this.nameStatus = 'error';
    },()=>{
      this.nameStatus = 'completed';
    })
  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe()
  }

}
