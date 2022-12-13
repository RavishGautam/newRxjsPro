import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, of, concatAll,from , tap, mergeAll, concatMap, Observable, toArray, mergeMap, interval, forkJoin, zip, flatMap } from 'rxjs';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {
  empDetails: any = [];
  tapData: any;
 // userID: any[] = [1, 3, 5, 4, 2];
  constructor(private _api: HttpClient) { }

  ngOnInit(): void {
    const userID: Observable<number> = from([1, 3, 5, 4, 2]);

    userID.pipe(mergeMap(res=>this.getEmpDetails(res)),toArray())
      .subscribe((res) => {
        console.log(res)
      this.empDetails.push(res); 
      })

  // const idObs =  userID.map(id=>this.getEmpDetails(id));

  //   forkJoin(idObs).subscribe((res) => {
  //     this.empDetails = res;
  //     console.log(res)
  //     console.log("this.empDetails",this.empDetails)
  //   })
   

  }


  getEmpDetails(data: any) {
    return this._api.get("http://localhost:3000/empDetails/" + data + '/')
  }

}