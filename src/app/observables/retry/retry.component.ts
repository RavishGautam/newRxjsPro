import { ApiServicesService } from './../../appServices/api-services.service';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person: any;
  fetching: boolean = false;
  status: string = 'No Data';

  person2: any;
  fetching2: boolean = false;
  status2: string = 'No Data'
  constructor(private _api: ApiServicesService) { }

  ngOnInit(): void {

    /// Ex - 01 




  }
  ///// Example - 01 (retry)
  getUserData() {
    this.fetching = true;
    this.status = 'Fetching data...';
    this._api.getuser().pipe(retry(4))
      .subscribe((res: any) => {
        console.log("res-->", res)
        this.fetching = false;
        this.status = 'Data Fetched';
        this.person = res;
      }, err => {
        this.fetching = false;
        this.status = 'Problem in fetching data';
      })
  }

  ///// Example - 02 (retry)
  getUserData2() {
    let retryCount = 0;
    this.fetching2 = true;
    this.status2 = 'Fetching data...';
    this._api.getuser().pipe(retryWhen(err => err.pipe(
      delay(3000), scan((c: any) => {
        retryCount++
        if (retryCount >= 5) {
          throw err;
        } else {
          console.log("count--->", retryCount)
          this.status2 = 'Retrying ... Attemt #'+retryCount;
        }
      }, 0)
    )))
      .subscribe((res: any) => {
        console.log("res-->", res)
        this.fetching2 = false;
        this.status2 = 'Data Fetched';
        this.person2 = res;
      }, err => {
        this.fetching2 = false;
        this.status2 = 'Problem in fetching data';
      })
  }

}
