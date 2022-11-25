import { from, interval, of, Subscription, take, toArray } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
sourceSub !: Subscription
  constructor() { }
  users = [
    {name:'aaaaa', skil:'ee'},
    {name:'bbbbb', skil:'ff'},
    {name:'ccccc', skil:'gg'},
    {name:'ddddd', skil:'hh'},
   ]
  ngOnInit(): void {

    /// Ex - 1
    const source = interval(1000);
    this.sourceSub = source.pipe(take(7),toArray())
    .subscribe((res:any)=>{
      //console.log("source emit value-->",res)
    })

    /// Ex - 2
    const source2 = from(this.users)
    source2.pipe(toArray())
    .subscribe((res:any)=>{
      console.log('res--->',res)
    })


    // Ex - 3


    const source3 = of('aaaa','bbbb','dddd','eeeee')
    source3.pipe(toArray()).subscribe((res:any)=>{
      console.log("using of() operator--<>",res)
    })


    // Ex - 4

    const source4 = from('hello this is an example') 
    source4.pipe(toArray()).subscribe((res:any)=>{
      console.log("string using from() & toArray()--<>",res)
    })
  }

}
