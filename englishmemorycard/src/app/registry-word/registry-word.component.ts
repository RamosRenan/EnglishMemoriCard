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

  public url            :string = "";
  public en_words!      :string[];
  public pt_br_words!   :string[];
  
  // reactive form group
  formRegistryWords!  :FormGroup;
  
  constructor(private registryWordJserverService:RegistryWordJserverService) { }
  
  // formWordEn = new FormControl('renan brs');// template driven diretctive forms

  ngOnInit(): void {

    this.formRegistryWords = new FormGroup(
      {
        groupForm1 : new FormGroup({
          important     : new FormControl(),
          utl_img       : new FormControl(),
          en_word       : new FormControl(),
          pt_br_word    : new FormControl(),
          comments      : new FormControl(),
        }),
      }
    );

  }// ngOnInit()

  // actionado pela submissão do form
  processForm()
  {
    // log valores do formalário
    console.log(this.formRegistryWords.value.groupForm1);
    
    var ff = hash('sha224');

    console.log(objectHsh("ffff"));

    console.log(Date.now());

    this.img_words.push(new ImgWords( Math.random()*Date.now(), objectHsh(Math.random()*Date.now()), " ", this.formRegistryWords.value.groupForm1.utl_img, 0));

    // criando nova instância de words
    this.words =  new Words(objectHsh(
      this.formRegistryWords.value.groupForm1),
      Math.random()*Date.now(),
      this.formRegistryWords.value.groupForm1.en_word,
      this.formRegistryWords.value.groupForm1.pt_br_word,
      this.img_words,
      Date.now(),
      125
    );
    console.log(this.words);

    this.url = this.formRegistryWords.value.groupForm1.utl_img;
      
    this.en_words     = this.formRegistryWords.value.groupForm1.en_word.split(" ");
    this.pt_br_words  = this.formRegistryWords.value.groupForm1.en_word.split(" ");
  }// processForm()

}// class
