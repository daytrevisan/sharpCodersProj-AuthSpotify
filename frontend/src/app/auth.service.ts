// auth.service.ts
import { Injectable } from '@angular/core';
import { GoogleLoginProvider } from 'angularx-social-login/providers/google-login-provider';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  isLoggedIn = false;

  signInWithGoogle(): void {
    this['authService'].signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }
}