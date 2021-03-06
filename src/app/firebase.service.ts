import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  urlUbigeo: string = 'https://globokas-97e17-default-rtdb.firebaseio.com';

  constructor(private _fs: HttpClient) {}

  getPlacesBy(value: string) {
    return this._fs.get(`${this.urlUbigeo}/${value}.json`);
  }
}
