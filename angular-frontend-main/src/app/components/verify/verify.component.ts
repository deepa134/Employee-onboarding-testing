import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html'
})
export class VerifyComponent implements OnInit {

  message = 'Verifying...';
  verified = false;

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

    const token = this.route.snapshot.queryParamMap.get('token');

    if (!token) {
      this.message = "Invalid link";
      return;
    }

    this.auth.verifyEmail(token).subscribe({
      next: (res: any) => {
        this.message = res;
        this.verified = true;
      },
      error: () => {
        this.message = "Verification failed";
      }
    });

  }

  goLogin() {
    this.router.navigate(['/login']);
  }

}