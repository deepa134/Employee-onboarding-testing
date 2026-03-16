import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hr-onboarding-details',
  template: `
  <div class="container">
    <button class="btn btn-ghost" (click)="goBack()">⬅ Back</button>
    <div class="app-card" style="margin-top:12px">
      <h2>Onboarding Details</h2>

      <div *ngIf="!record">Loading...</div>

      <div *ngIf="record" class="stack">
        <p><b>Status:</b> <span [style.color]="record.status==='VERIFIED' ? 'var(--success)' : record.status==='REJECTED' ? 'var(--danger)' : 'var(--muted)'" style="font-weight:600">{{record.status}}</span></p>
        <hr />
        <p><b>Email:</b> {{record.email}}</p>
        <p><b>Address:</b> {{record.address}}</p>
        <p><b>Aadhaar:</b> {{record.aadhaar}}</p>
        <p><b>PAN:</b> {{record.pan}}</p>
        <p><b>Bank Account:</b> {{record.bankAccount}}</p>

        <div *ngIf="record.status==='PENDING'" class="card-actions">
          <button (click)="updateStatus('VERIFIED')" class="btn success" style="margin-right:8px">Verify</button>
          <button (click)="updateStatus('REJECTED')" class="btn danger">Reject</button>
        </div>

        <div *ngIf="record.status==='VERIFIED'">
          <p style="color:var(--success);font-weight:600">Onboarding Completed</p>
        </div>

        <div *ngIf="record.status==='REJECTED'">
          <p style="color:var(--danger);font-weight:600">Candidate must resubmit onboarding</p>
        </div>
      </div>
    </div>
  </div>
  `
})
export class HrOnboardingDetailsComponent implements OnInit {
  email: string | null = null;
  record: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.email = this.route.snapshot.paramMap.get('email');
  }

  ngOnInit() { this.fetchData(); }

  goBack() { this.router.navigate(['../'], { relativeTo: this.route }); }

  async fetchData() {
    try {
      const res: any = await this.http.get(`http://localhost:8080/api/onboarding/candidate?email=${this.email}`).toPromise();
      this.record = res && res.length > 0 ? res[res.length - 1] : null;
    } catch (err) { console.error(err); }
  }

  async updateStatus(status: string) {
    if (!this.record) return;
    await this.http.put(`http://localhost:8080/api/onboarding/update/${this.record.id}/${status}`, {}).toPromise();
    this.fetchData();
  }
}
