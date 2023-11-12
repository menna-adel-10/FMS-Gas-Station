import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationNamesService {

  constructor(private _http: HttpClient) { }

  addStation(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/stationNames', data);
  }

  updateStation(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/stationNames/${id}`, data);
  }

  getStation(): Observable<any> {
    return this._http.get('http://localhost:3000/stationNames');
  }

  deleteStation(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/stationNames/${id}`);
  }
}
