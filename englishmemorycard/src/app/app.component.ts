import { EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;

  eventSideNav = new Observable(()=>{
    this.sidenav.open();
  });   

  ngOnInit(): void {
  }
  title = 'englishmemorycard';



  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
