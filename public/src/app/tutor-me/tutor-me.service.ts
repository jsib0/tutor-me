import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


@Injectable()

export class TutorMeService {

  constructor( private _http: Http) { }

  createNewEvent(data){
  	return this._http.post('/api/flying', data).map((response: Response) => response.json()).toPromise()
  }
 

}
