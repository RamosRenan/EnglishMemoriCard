import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImgWords } from '../model/img-words/img-words';
import { Words } from '../model/words/words';
import { RegistryWordJserverService } from './registry-word-jserver.service';
import * as hash from 'create-hash';
import * as objectHsh from 'object-hash';


@Component({
  selector: 'app-registry-word',
  templateUrl: './registry-word.component.html',
  styleUrls: ['./registry-word.component.css']
})
export class RegistryWordComponent implements OnInit 
{

  public img_words    :ImgWords[]=[];
  public iw!          :ImgWords;
  public words!       :Words;
  public isChecked    :boolean = true;

  public url            :string = "https://icon-library.com/images/icon-for-images/icon-for-images-13.jpg";
  public en_words!      :string[];
  public pt_br_words!   :string[];
  
  // reactive form group
  formRegistryWordss!   :FormGroup;
  
  constructor(private registryWordJserverService:RegistryWordJserverService) { }
  
  // formWordEn = new FormControl('renan brs');// template driven diretctive forms

  ngOnInit(): void {

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

  }// ngOnInit()

  // actionado pela submissão do form
  processForm()
  {
    // log valores do formalário
    console.log(this.formRegistryWordss.value.groupForm);
    
    var ff = hash('sha224');

    console.log(objectHsh("ffff"));

    console.log(Date.now());

    this.img_words.push(new ImgWords( Math.random()*Date.now(), objectHsh(Math.random()*Date.now()), " ", this.formRegistryWordss.value.groupForm.url_img, 0));

    // criando nova instância de words
    this.words =  new Words(objectHsh(
      this.formRegistryWordss.value.groupForm),
      Math.random()*Date.now(),
      this.formRegistryWordss.value.groupForm.en_word,
      this.formRegistryWordss.value.groupForm.pt_br_word,
      this.img_words,
      Date.now(),
      125
    );
    console.log(this.words);

    this.words.description =  this.formRegistryWordss.value.groupForm.comments;

    this.url = this.formRegistryWordss.value.groupForm.url_img;
      
    this.en_words     = this.formRegistryWordss.value.groupForm.en_word.split(" ");
    
    this.pt_br_words  = this.formRegistryWordss.value.groupForm.pt_br_word.split(" ");

    this.formRegistryWordss.reset;

    this.registryWordJserverService.insert(this.words).subscribe();
  }// processForm()

}// class
