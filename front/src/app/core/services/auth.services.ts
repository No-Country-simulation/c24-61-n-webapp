import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private _router: Router) { }

  login(email: string, password: string): Observable<any> {
    console.log(this.apiUrl + 'login')
    return this.http.post<any>(this.apiUrl + 'login', { email, password }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'register', { username, password });
  }

  logout() {
    this.deleteCookie('authToken');
    this._router.navigate(['/ingreso']);
  }

  getToken(): string | null {
    return this.getCookie('authToken');
  }

  deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  saveSession(token: string): void {
    const expires = new Date();
    expires.setHours(expires.getHours() + 1);
    this.setCookie('authToken', token, expires);
  }

  private getCookie(name: string): string | null {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
  }

  private setCookie(name: string, value: string, expires: Date): void {
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/;`;
  }
}
