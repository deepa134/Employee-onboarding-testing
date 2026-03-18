import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface User {
  role: string;
  email?: string;
  interviewerId?: number;
  interviewerName?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}

  private userSubject = new BehaviorSubject<User | null>(this.loadUser());
  user$ = this.userSubject.asObservable();

  private loadUser(): User | null {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  }

  get user() { return this.userSubject.value; }

  login(role: string, data: any = {}) {
    const user = { role, ...data } as User;
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  loginCandidate(email: string, password: string) {
    return this.http.post(
      'http://localhost:8080/api/candidate/login',
      { email, password }
    );
  }

  checkCandidateEmail(email: string) {
    return this.http.get<boolean>(
      'http://localhost:8080/api/candidate/check-email?email=' + email
    );
  }
  verifyEmail(token: string) {
  return this.http.get(
    "http://localhost:8080/api/candidate/verify?token=" + token,
    { responseType: 'text' }
  );
}

  registerCandidate(candidate:any){
    return this.http.post(
      'http://localhost:8080/api/candidate/register',
      candidate
    );
  }
 resendVerification(email: string) {

  return this.http.post(
    "http://localhost:8080/api/candidate/resend?email=" + email,
    {}
  );

}
}