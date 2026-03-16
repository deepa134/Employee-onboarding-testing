import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html'
})
export class OnboardingFormComponent {
  formData = { address: '', aadhaar: '', pan: '', bankAccount: '' };
  applicationId: any = null;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
    // read navigation state for applicationId (set by CandidateDashboard)
    const nav = this.router.getCurrentNavigation?.();
    // fallback to history.state for cases where getCurrentNavigation is undefined (e.g., page reload)
    const hist = (window && (window as any).history && (window as any).history.state) ? (window as any).history.state : null;
    this.applicationId = nav?.extras?.state?.applicationId ?? hist?.applicationId ?? null;
  }

  async handleSubmit() {
    try {
      const user = this.auth.user;
      await this.http.post('http://localhost:8080/api/onboarding', {
        ...this.formData,
        email: user?.email,
        applicationId: this.applicationId
      }).toPromise();

      alert('Onboarding submitted successfully');
      this.router.navigate(['/candidate/dashboard']);
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }
  }
}
