import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://api.thecatapi.com/v1/images/search'

  constructor(private httpClient: HttpClient) {}

  index(){
    return this.httpClient.get(`${this.url}`);
  }
}
