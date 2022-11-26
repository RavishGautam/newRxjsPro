import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  // List Data
user1List =['Angular','React'];
user2List:any =[];
user3List:any =[];


/// modes
subscribeModeUser2 :boolean = false;
subscribeModeUser3 :boolean = false;


// Subscription....
user2Subscription ! : Subscription ;
user3Subscription ! : Subscription


// toggle Properties
 methodeInterval: boolean = false;
 brodCastSubscription!: Subscription;

  constructor(private _du : DesignUtilityService) { }

  ngOnInit(): void {
    this._du.videoEmit.subscribe((res)=>{
      console.log("replay Subject Data==>",res)
      this.user1List.push(res)
    })
  }
 /// video add Button

  onVideoAdd(data:any){
console.log(data);
this._du.videoEmit.next(data)
  }

  /// user 2 Subscribe Button

  user2Subscribe(){
    if(this.subscribeModeUser2){
      this.user2Subscription.unsubscribe();
    }else{
      this.user2Subscription = this._du.videoEmit.subscribe((res)=>{
        this.user2List.push(res)
      })
    }
    this.subscribeModeUser2 =  ! this.subscribeModeUser2;
    
  }


  /// user 3 Subscribe Button
  user3Subscribe(){

    if(this.subscribeModeUser3){
      this.user3Subscription.unsubscribe();
    }else{
      this.user3Subscription = this._du.videoEmit.subscribe((res)=>{
        this.user3List.push(res)
      })
    }
    this.subscribeModeUser3 =  ! this.subscribeModeUser3;
  }


  // toggle Methode  .. 
  toggleMethode(){
    if(this.methodeInterval){
      this.brodCastSubscription.unsubscribe()
    }else{
      const brodCastVideo = interval(1500)
      this.brodCastSubscription = brodCastVideo.subscribe((res:any)=>{
        console.log("res--Toggle-->",res)
        this._du.videoEmit.next('Video '+res)
      })
    }
   
    this.methodeInterval = ! this.methodeInterval ;
  }
}
