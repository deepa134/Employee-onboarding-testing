import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`

    :host {
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --dark: #111827;
    }

    .auth-wrapper {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f3f4f6;
      padding: 2rem;
      font-family: 'Inter', sans-serif;
    }

    .auth-card {
      display: flex;
      width: 100%;
      max-width: 900px;
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .auth-aside {
      flex: 1;
      background: linear-gradient(135deg,#1e1b4b,#312e81);
      color: white;
      padding: 3rem;
    }

    .auth-main {
      flex: 1.2;
      padding: 3rem;
    }

    .modern-input {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
    }

    .btn-submit {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 10px;
      background: var(--primary);
      color: white;
      font-weight: 600;
      cursor: pointer;
    }

    .btn-submit:hover {
      background: var(--primary-hover);
    }

    /* ✅ NEW TOAST STYLE */

    .toast {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #1e40af;
      color: white;
      padding: 12px 18px;
      border-radius: 8px;
      font-weight: 500;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      z-index: 9999;
    }

    .toast-error {
      background: #ef4444;
    }

  `]
})
export class RegisterComponent implements OnInit {

  name = '';
  email = '';
  password = '';

  // ✅ NEW
  showToast = false;
  toastMessage = '';
  isError = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.name = '';
    this.email = '';
    this.password = '';
  }

 register(){

  const candidate = {
    name: this.name,
    email: this.email,
    password: this.password
  };

  // ✅ show instantly
  this.toastMessage =
    "Registering... Please wait";
  this.showToast = true;
  this.isError = false;

  this.auth.registerCandidate(candidate).subscribe({

    next: () => {

      // update message after success
      this.toastMessage =
        "Registration successful. Verification email sent.";

      setTimeout(() => {
        this.showToast = false;
        this.router.navigate(['/login']);
      }, 2000);

    },

    error: () => {

      this.toastMessage = "Registration failed";
      this.isError = true;

      setTimeout(() => {
        this.showToast = false;
      }, 2000);

    }

  });

}

}