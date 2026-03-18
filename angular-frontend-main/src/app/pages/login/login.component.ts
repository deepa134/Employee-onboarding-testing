import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host {
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --dark: #111827;
      --text-main: #374151;
      --text-light: #6b7280;
      --bg-subtle: #f9fafb;
    }

    .auth-wrapper {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f3f4f6;
      padding: 2rem;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    .auth-card {
      display: flex;
      width: 100%;
      max-width: 1000px;
      background: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
    }

    .auth-aside {
      flex: 1;
      background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
      padding: 3rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .logo-badge {
      width: 48px;
      height: 48px;
      background: var(--primary);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 1.25rem;
    }

    .auth-aside h1 {
      font-size: 2.25rem;
      font-weight: 800;
      margin: 1.5rem 0 1rem;
    }

    .tagline {
      color: #c7d2fe;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .benefit-list {
      list-style: none;
      padding: 0;
      margin-top: 2.5rem;
    }

    .benefit-list li {
      margin-bottom: 1rem;
      color: #e0e7ff;
      font-weight: 500;
      display: flex;
      gap: 10px;
    }

    .benefit-list li span {
      color: #818cf8;
      font-weight: 900;
    }

    .aside-footer {
      font-size: 0.85rem;
      opacity: 0.6;
    }

    .auth-main {
      flex: 1.2;
      padding: 4rem;
      display: flex;
      align-items: center;
    }

    .form-container {
      width: 100%;
    }

    .form-header h2 {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--dark);
      margin: 0;
    }

    .form-header p {
      color: var(--text-light);
      margin-top: 0.5rem;
    }

    .role-selector {
      display: flex;
      background: #f3f4f6;
      padding: 4px;
      border-radius: 12px;
      margin: 2.5rem 0;
    }

    .role-selector button {
      flex: 1;
      border: none;
      padding: 0.75rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      color: var(--text-light);
      background: transparent;
    }

    .role-selector button.active {
      background: white;
      color: var(--primary);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .field-group label {
      display: block;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 0.5rem;
    }

    .modern-input {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1.5px solid #e5e7eb;
      border-radius: 10px;
      font-size: 1rem;
      transition: all 0.2s;
      outline: none;
      background: #fdfdfd;
    }

    .modern-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
    }

    .hint {
      font-size: 0.75rem;
      color: var(--text-light);
      margin-top: 0.5rem;
      display: block;
    }

    .admin-notice {
      background: #eff6ff;
      border-left: 4px solid var(--primary);
      padding: 1rem;
      color: #1e40af;
      font-size: 0.875rem;
      border-radius: 4px;
    }

    .mt-4 {
      margin-top: 1.25rem;
    }

    .btn-submit {
      width: 100%;
      margin-top: 2.5rem;
      background: var(--primary);
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 10px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-submit:hover {
      background: var(--primary-hover);
    }

    @media (max-width: 850px) {
      .auth-aside {
        display: none;
      }

      .auth-card {
        max-width: 500px;
      }
    }
      .toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #22c55e;
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: 500;
  z-index: 9999;
}

.toast-error {
  background: #ef4444;
}
  `]
})
export class LoginComponent {

  role = 'CANDIDATE';
  email = '';
  name = '';
  password = '';
  emailExists = true;
  showToast = false;
  toastMessage = '';
  isError = false;
  notVerified = false;

  interviewers = {
    Kavya: { id: 1, password: 'kavya123' },
    Arun: { id: 2, password: 'arun123' },
    Divya: { id: 3, password: 'divya123' }
  };

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {
  this.email = '';
  this.password = '';
  this.name = '';
}

  setRole(r: string) {
    this.role = r;
  }
  showError(msg: string) {

  this.toastMessage = msg;
  this.isError = true;
  this.showToast = true;

  setTimeout(() => {
    this.showToast = false;
  }, 2500);

}

  handleLogin() {

    // Candidate login
    if (this.role === 'CANDIDATE') {

      if (!this.email) {
        this.showError('Enter email');
        return;
      }

      // NEW CONDITION
      if (!this.emailExists) {
        this.showError('Email not registered. Please register first.');
        return;
      }

      if (!this.password) {
        this.showError('Enter password');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(this.email)) {
        this.showError('Enter valid email address');
        return;
      }
      this.auth.loginCandidate(this.email, this.password).subscribe({
  next: () => {
    this.auth.login('CANDIDATE', { email: this.email });
    this.router.navigate(['/candidate/dashboard']);
  },
error: (err) => {

  console.log("LOGIN ERROR", err);

  let msg = "";

  if (err.error) {

    if (typeof err.error === "string") {
      msg = err.error;
    }
    else if (err.error.message) {
      msg = err.error.message;
    }

  }

  if (!msg) {
    msg = "Login failed";
  }

  this.showError(msg);

  // ✅ detect email not verified
  if (msg.toLowerCase().includes("verify")) {
    this.notVerified = true;
  } else {
    this.notVerified = false;
  }

}
});

    }

    // HR login
    if (this.role === 'HR') {

      if (this.email !== 'admin@gmail.com' || this.password !== 'admin123') {
        alert('Invalid HR credentials');
        return;
      }

      this.auth.login('HR');
      this.router.navigate(['/hr/dashboard']);
    }

    // Interviewer login
    if (this.role === 'INTERVIEWER') {

      const interviewer = (this.interviewers as any)[this.name];

      if (!interviewer || interviewer.password !== this.password) {
        alert('Invalid credentials');
        return;
      }

      this.auth.login('INTERVIEWER', {
        interviewerId: interviewer.id,
        interviewerName: this.name
      });

      this.router.navigate([`/interviewer/${interviewer.id}`]);
    }

  }

  checkEmail() {

    if (!this.email) return;

    this.auth.checkCandidateEmail(this.email).subscribe({
      next: (res: boolean) => {
        this.emailExists = res;
      }
    });

  }
  goToRegister(){
  this.router.navigate(['/register']);
}
resendEmail() {

  this.auth.resendVerification(this.email).subscribe({

    next: () => {
      this.showError("Verification email sent");
      this.notVerified = false;
    },

    error: () => {
      this.showError("Failed to resend email");
    }

  });

}

}