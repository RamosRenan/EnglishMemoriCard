import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private appComponent!:AppComponent;
  
  constructor(private _appComponent:AppComponent) 
  {
    this.appComponent = _appComponent;
  }

  ngOnInit(): void {
  }

  reason = '';

  openSide()
  {
    this.appComponent.eventSideNav.subscribe();
  }
}
