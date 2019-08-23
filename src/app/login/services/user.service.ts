import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private readonly api = 'https://ti.ucic.pe/api/get/user';
  constructor(
    private http: HttpClient
  ) {
  }


  // Esta función retornará un observable para ser usado (response) de servicio get/comments
  getAuthUser(token: string): Observable<any> {
    const prepareToken = `Bearer ${token}`;
    const headers = new HttpHeaders({'Authorization': prepareToken, 'Access-Control-Allow-Headers': '*'});

    return this.http.post(this.api, {}, {headers:headers, observe: 'response'})
  }
}
