import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Words } from 'src/app/model/words/words';
import { RegistryWordJserverService } from 'src/app/registry-word/registry-word-jserver.service';

@Component({
  selector: 'app-edit-words',
  templateUrl: './edit-words.component.html',
  styleUrls: ['./edit-words.component.css']
})
export class EditWordsComponent implements OnInit {
  url?:string = "https://icon-library.com/images/icon-for-images/icon-for-images-13.jpg";
  en_words!:string;
  pt_br_words!:string;
  comments!:string;

  private word!:Words;

  // reactive form group
  formRegistryWordss!   :FormGroup;

  id!:number;
  
  constructor(
    private registryWordJserverService:RegistryWordJserverService,
    private route:ActivatedRoute  
  ) { }

  ngOnInit(): void 
  {
    this.route.params.subscribe(data=>this.id =data['id']);
    
    this.registryWordJserverService.find(this.id).subscribe(data=>{
      console.log(data);
      this.word = data;
      this.url = data.img_words[0].url;
      this.en_words = String(data.en_word);
      this.pt_br_words = String(data.pt_br_word);
      this.comments =  data.description != undefined ? data.description : "no comments, insert a comment will help you !";
      }
    );

    this.formRegistryWordss = new FormGroup(
      {
        groupForm : new FormGroup({
          important     : new FormControl(),
          en_word       : new FormControl(),
          pt_br_word    : new FormControl(),
          url_img       : new FormControl(),
          comments      : new FormControl(),
        }),
      }
    );

  }
 
  processForm()
  {
    // this.registryWordJserverService.find(this.id).subscribe(data=>{
    //     console.log(data);
    //     this.url = data.img_words[0].url;
    //     this.en_words = data.en_word;
    //     this.pt_br_words = data.pt_br_word;
    //    }
    // );

    this.word.en_word           = this.formRegistryWordss.value.groupForm.en_word;
    this.word.pt_br_word        = this.formRegistryWordss.value.groupForm.pt_br_word;
    this.word.description       = this.formRegistryWordss.value.groupForm.comments;
    this.word.img_words[0].url  = this.formRegistryWordss.value.groupForm.url_img;

    console.log("this.formRegistryWordss.value.groupForm.url_img: "+this.formRegistryWordss.value.groupForm.url_img);
    console.log("processando form this.word: "+this.word);

    this.registryWordJserverService.update(this.word, this.id).subscribe(data=>console.log(data));

    this.formRegistryWordss.updateOn;
    // location.reload();
  }
}

