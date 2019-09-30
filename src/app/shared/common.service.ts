import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FuelList } from './model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public dataList: FuelList[] = [];
  constructor(
    private http: HttpClient
  ) { }

  getDataList(): Observable<FuelList[]> {
    return this.http.get<FuelList[]>('https://data.cityofchicago.org/resource/f7f2-ggz5.json?')
      .pipe(
        map( response => {
          this.dataList = response;
          return response;
        }),
        catchError(this.handleError<FuelList[]>('getDataList', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
