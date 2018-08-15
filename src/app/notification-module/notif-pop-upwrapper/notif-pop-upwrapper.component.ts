import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notif-pop-upwrapper',
  templateUrl: './notif-pop-upwrapper.component.html',
  styleUrls: ['./notif-pop-upwrapper.component.css']
})
export class NotifPopUpwrapperComponent implements OnInit {

  // constructor(private router:Router) { }
  constructor() { }

  ngOnInit() {
  }

  viewAll(){
    console.log("in viweAll()");
    // this.router.navigate(['main/notifications/all']);
  }

}

