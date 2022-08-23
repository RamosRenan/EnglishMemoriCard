import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WordsInterface } from '../interfaces/words-interface';
import { Words } from '../model/words/words';

@Injectable({
  providedIn: 'root'
})
export class ServicesDbJsonService {

  private dbServUrl:string = "http://localhost:3000/words";

  constructor(private httpClient:HttpClient) { }

  /**
   * gett all resgistries from db.json 
   */ 
  public getAll()
  {
    return this.httpClient.get<Words>(
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
  public insert(data:Words) : Observable<Words>
  {
    return this.httpClient.post<Words>(
      this.dbServUrl, data
    );
  }

  /**
   * inserir registro 
   */
   public delete(id:number) : Observable<Words>
   {
     return this.httpClient.delete<Words>(
      this.dbServUrl+"/"+id
     );
   }
}
