import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const BASE_URL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class StationNamesService {

  constructor(private _https: HttpClient) { }

   addStation(data: any): Observable<any> {
    return this._https.post(`${BASE_URL}/stationNames`, data);
  }


  updateStation(id: number, data: any): Observable<any> {
    return this._https.put(`${BASE_URL}/stationNames/${id}`, data);
  }

  getStation(): Observable<any> {
    return this._https.get(`${BASE_URL}/stationNames`);
  }

  deleteStation(id: number): Observable<any> {
    return this._https.delete(`${BASE_URL}/stationNames/${id}`);
  }
}
