import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  private readonly api = 'https://ti.ucic.pe/api/login';
  constructor(
    private http: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    console.log('FormData', formData);
    return this.http.post(this.api, formData, {observe: 'response'})
  }
}
