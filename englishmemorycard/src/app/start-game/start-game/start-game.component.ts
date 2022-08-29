import { Component, OnInit } from '@angular/core';
import { WordsInterface } from 'src/app/interfaces/words-interface';
import { ImgWords } from 'src/app/model/img-words/img-words';
import { Words } from 'src/app/model/words/words';
import { ServicesDbJsonService } from 'src/app/services/services-db-json.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  url?:string;

  en_words?:string[];

  pt_br_words?:String[];

  listWords!:Words ;

  ss!:string;

  resp!:any;

  list_words?:Array<Words>;
  
  list_words_all!:Array<Words>;

  list_img_words?:Array<ImgWords>; // para armazenar a lista de imagens de cada palavra

  img_word?:ImgWords;
  
  constructor(private servicesDbJsonService:ServicesDbJsonService) { }

  async ngOnInit(): Promise<void> 
  {
    this.list_words = new Array<Words>();
    // this.listImg = this.servicesDbJsonService.getAll().subscribe(); 
    // this.servicesDbJsonService.getAll().subscribe({
    //   next(data){
    //     console.log(data);
    //   },
    //   error(msg){

    //   },

    //   complete()
    //   {}
    // });

    let timestamp;
    let frequency;

    this.servicesDbJsonService.getAll().subscribe(
      data => {
        this.list_words_all = Array.of(data);
        let objWord         = JSON.parse(String(JSON.stringify(data)))[Math.floor(Math.random() * (JSON.parse(String(JSON.stringify(data))).length - 1))];
        this.url            = objWord.img_words[0].url;
        this.en_words       = objWord.en_word.split(" ");
        this.pt_br_words    = objWord.pt_br_word.split(" ");

        console.log("typeof: "+typeof(data));
        console.log("data: "+data);
        console.log( String(JSON.stringify(data)) );
        console.log( JSON.parse(String(JSON.stringify(data))).length );
        console.log( typeof(JSON.parse(String(JSON.stringify(data))) ));
        console.log( JSON.parse(String(JSON.stringify(data)))[7] );
        console.log( JSON.parse(String(JSON.stringify(data))) );
        this.resp =  JSON.parse(String(JSON.stringify(data)));
      }
    );

  }// ngOnInit()
  
  
  show()
  {
    this.listWords = JSON.parse(String(JSON.stringify(this.resp)))[0];
    console.log("-------> ss " + JSON.parse(String(JSON.stringify(this.resp)))[0].img_words.length);
    console.log("-------> ss " + JSON.parse(JSON.stringify(this.resp))[0].img_words.length);
    console.log("-------> ss " +  JSON.stringify(this.listWords));
    console.log("-------> ss " + JSON.stringify(this.list_words));
    console.log("-------> ss " + JSON.stringify(this.list_words_all));
    console.log("-------> ss " + this.list_words_all.length);
  }
}
