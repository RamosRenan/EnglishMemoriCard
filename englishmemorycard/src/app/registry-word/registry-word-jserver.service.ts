import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
 import { WordsInterface } from '../interfaces/words-interface';

@Injectable({
  providedIn: 'root'
})
export class RegistryWordJserverService {

  private dbServUrl:string = "http://localhost:3000/words";

  constructor(private httpClient:HttpClient) { }

  /**
   * gett all resgistries from db.json 
   */ 
  public getAll()
  {
    return this.httpClient.get<WordsInterface>(
      this.dbServUrl, 
      {
        observe:'body',
        responseType:'json'
      }
    );

  }// getAll()


  /**
   * inserir registro 
   */
  public insert(data:WordsInterface) : Observable<WordsInterface>
  {
    return this.httpClient.post<WordsInterface>(
      this.dbServUrl, data
    );
  }

}// class
