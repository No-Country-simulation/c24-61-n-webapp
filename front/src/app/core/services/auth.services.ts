import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient, 
    private _router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  login(email: string, password: string): Observable<any> {
    console.log(this.apiUrl + 'login')
    return this.http.post<any>(this.apiUrl + 'login', { email, password }).pipe(
      tap(response => {
        if (response.token && isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'register', { username, password });
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      this.deleteCookie('authToken');
      this._router.navigate(['/ingreso']);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return this.getCookie('authToken');
    }
    return null;
  }

  deleteCookie(name: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.getToken();
    }
    return false;
  }

  saveSession(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const expires = new Date();
      expires.setHours(expires.getHours() + 1);
      this.setCookie('authToken', token, expires);
    }
  }

  private getCookie(name: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
      return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
    }
    return null;
  }

  private setCookie(name: string, value: string, expires: Date): void {
    if (isPlatformBrowser(this.platformId)) {
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/;`;
    }
  }
}
