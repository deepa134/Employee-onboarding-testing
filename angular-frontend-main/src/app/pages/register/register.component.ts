import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  register(){

    const candidate = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.auth.registerCandidate(candidate).subscribe({
      next: () => {
        alert("Registration successful");
        this.router.navigate(['/login']);
      },
      error: () => {
        alert("Registration failed");
      }
    });

  }

}