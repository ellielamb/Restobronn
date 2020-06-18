import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantUrl: string = environment.apiBaseUrl + '/restaurant'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  };

  getAll(): Observable<[]> {
    return this.http.get<[]>(this.restaurantUrl)
  }
  
  getOne(id:number): Observable<Object> {
    const url = this.restaurantUrl + '/' + id
    return this.http.get(url)
  }

}