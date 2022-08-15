import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registry-word',
  templateUrl: './registry-word.component.html',
  styleUrls: ['./registry-word.component.css']
})
export class RegistryWordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const v = new File(["renan"], "C:\\Users\\renan\\Documents\\texte.txt", {type: "text/plain"});
    
  }

}
