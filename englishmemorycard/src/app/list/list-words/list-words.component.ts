import { Component, OnInit } from '@angular/core';
import { Words } from 'src/app/model/words/words';
import { ServicesDbJsonService } from 'src/app/services/services-db-json.service';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css']
})
export class ListWordsComponent implements OnInit {
  panelOpenState  = false;
  en_word:string  = "?";
  url:string      = "";
  list_words_all!:Array<Words>;

  constructor(private servicesDbJsonService:ServicesDbJsonService) { }

  ngOnInit(): void {

    this.servicesDbJsonService.getAll().subscribe(
      data => {
        this.list_words_all = JSON.parse(String(JSON.stringify(data)));

        // console.log("typeof: "+typeof(data));
        console.log("data: "+ this.list_words_all);
        console.log( String(JSON.stringify(data)) );
        console.log( JSON.parse(String(JSON.stringify(data))).length );
        // console.log( typeof(JSON.parse(String(JSON.stringify(data))) ));
        // console.log( JSON.parse(String(JSON.stringify(data)))[7] );
        // console.log( JSON.parse(String(JSON.stringify(data))) );
        // this.resp =  JSON.parse(String(JSON.stringify(data)));
      }
    );

  }

  sujeitoDelete(e:any)
  {
    console.log(e);
    this.servicesDbJsonService.delete(e).subscribe(data=>console.log(data));
    location.reload();
  }

}
