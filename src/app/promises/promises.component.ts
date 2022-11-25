import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {
promiseVal:any;
  constructor() { }
  DellAvailable() {
    return false;
  }
  HpAvailable() {
    return false;
    
  }
  
  ngOnInit(): void {


    let buyLaptop: any = new Promise((resolve, reject) => {
      //reject('promise is rejected')
      if(this.DellAvailable()){
        setTimeout(()=>{
          resolve('Dell Is purchased')
        },3000)
        
      }else if(this.HpAvailable()){
        setTimeout(()=>{
          resolve('Dell Is purchased')
        },3000)
       
      }else{
        setTimeout(()=>{
          reject('laptop is not available in store..')
        },3000)
       
      }
    })
    buyLaptop.then((res: any) => {
      console.log("success==>", res)
    }).catch((res: any) => {
      console.log("rejected==>", res)
    })

  }
}
