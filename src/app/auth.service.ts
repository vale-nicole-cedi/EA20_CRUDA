import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
