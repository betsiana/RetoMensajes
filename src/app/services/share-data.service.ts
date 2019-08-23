import { Injectable } from '@angular/core';

@Injectable()

export class ShareDataService {

  public _token = '';
  public _userDatda = {};

  constructor() {
  }

  set token(token: string) {
    this._token = token;
  }
}
