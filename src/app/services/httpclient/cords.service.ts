import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CordModel } from '../../models/cord.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CordsService {

  private url = 'https://cordsupply.firebaseio.com';

  private arreglo ( cordsObj: object ) {
    const cords: CordModel[] = [];

    Object.keys(cordsObj).forEach( key => {
      const cord: CordModel = cordsObj[key];
      cord.id = key;
      cords.push( cord );
    });

    if ( cordsObj === null ) {
      return [];
    }
    return cords;
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  newCord( cord: CordModel ) {
    return this.httpClient.post(`${this.url}/cords.json`, cord)
     .pipe( map( ( resp: any ) => {
             cord.id = resp.name;
             return cord;
           })
         );
  }

  updateCord( cord: CordModel ) {
    const cordTemp = { ...cord };
    delete cordTemp.id;
    return this.httpClient.put(`${this.url}/cords/${cord.id}.json`, cordTemp);
  }

  deleteCord( id: string ) {
    return this.httpClient.delete(`${this.url}/cords/${id}.json`)
  }

  getCord( id: string ) {
    return this.httpClient.get(`${this.url}/cords/${id}.json`)
  }

  getCords() {
    return this.httpClient.get(`${this.url}/cords.json`)
      .pipe(
        map(this.arreglo),
        delay(1500)
      );
  }



}
