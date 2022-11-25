import { DesignUtilityService } from './../../appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
obsMsg:any;
  constructor(private _designUtility : DesignUtilityService) { }

  ngOnInit(): void {

    // example of OF()

    const obs1 = of('ram', 'shyam', 'mohan');
    const obs2 = of({a:'ram', b:'shyam', c:'mohan'});
    const obs3 = from(['ram', 'shyam', 'mohan'])

    obs1.subscribe((res:any)=>{
      this.obsMsg = res;
      console.log("res--->",res)
      this._designUtility.print(res,"liContainer")
      
    })

    obs2.subscribe((res:any)=>{
      this.obsMsg = res;
      console.log("res--->",res)
      //this._designUtility.print(res,"liContainer")
      this._designUtility.print(JSON.stringify(res),"liContainer2")

    })


    /// from array
    obs3.subscribe((res:any)=>{
      this.obsMsg = res;
      console.log("Array-res--->",res)
      this._designUtility.print(res,"ex2Container1")
      
    })


    /// prom promoise


    const  promise = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },2000)
    })
     promise.then((res)=>{
      console.log("promise res--->",res)
     })

     let arr = ['ram', 'shyam', 'mohan']
     const obs4 = from(promise)

     obs4.subscribe((res:any)=>{
      this.obsMsg = res;
      console.log("From promise--->",res)
      this._designUtility.print(res,"ex2Container2")
      
    })



    /// prom String
    const obs5 = from('Hello This is String to Observable Example');
    obs5.subscribe((res:any)=>{
      this.obsMsg = res;
      console.log("From string--->",res)
      this._designUtility.print(res,"ex2Container3")
  })
}


 
}
