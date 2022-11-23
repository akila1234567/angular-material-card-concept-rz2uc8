import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DigispaceServiceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      'https://637ae5e510a6f23f7f9aacbc.mockapi.io/dashboard'
    );
  }
}
