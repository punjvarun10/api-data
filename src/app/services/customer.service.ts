import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  getList() {
    return this.http.get('https://ghibliapi.herokuapp.com/films');
  }

}
