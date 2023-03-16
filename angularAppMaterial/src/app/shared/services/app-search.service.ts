import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AppSearchService {
  API_URL: string = "https://app-rapidx-webdesigner-api-dev.azurewebsites.net/";
  constructor(private _http: HttpClient) { }

  getAllBookings(): Observable<any> {
    return this._http.get(this.API_URL + 'listdemosita')
    .pipe(map(res => res));
  }
 
  searchById(searchId: any): Observable<any>{
    return this._http.get(this.API_URL+"/listdemosita?id="+searchId)
    .pipe(map(res => res));
  }
}
