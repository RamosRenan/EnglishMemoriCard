import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ImgWords } from '../model/img-words/img-words';
import { Words } from '../model/words';
import { RegistryWordJserverService } from './registry-word-jserver.service';


@Component({
  selector: 'app-registry-word',
  templateUrl: './registry-word.component.html',
  styleUrls: ['./registry-word.component.css']
})
export class RegistryWordComponent implements OnInit {

  public img_words:ImgWords[]=[];
  public iw!:ImgWords;
  public words!:Words;

  formWordEn = new FormControl('renan brs');


  constructor(private registryWordJserverService:RegistryWordJserverService) { }

  ngOnInit(): void {

    const v = new File(["renan"], "C:\\Users\\renan\\Documents\\texte.txt", {type: "text/plain"});
    
    this.registryWordJserverService.getAll().subscribe(data=>{console.log(data)});

    this.iw = new ImgWords(1213,"pojo1kjo","/p/pl1","http://l.com",45163);

    console.log(this.iw);

    this.img_words.push(this.iw);
    
    this.words = new Words("fdfdfdfd1f", 1123, "wide", "largo", "largo; grande;", this.img_words);

    this.registryWordJserverService.insert(this.words).subscribe(data=>{console.log(data)});
  

  }// ngOnInit()



}
