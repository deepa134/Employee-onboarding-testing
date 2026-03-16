import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hr-create-employee',
  template: `
  <div class="container">
    <div class="app-card" style="max-width:720px">
      <h2>Create Employee</h2>
      <div *ngFor="let key of formKeys">
        <input class="form-control" [name]="key" [placeholder]="key" [(ngModel)]="form[key]" />
      </div>
      <div class="card-actions">
        <button class="btn" (click)="handleSubmit()">Submit</button>
      </div>
    </div>
  </div>
  `
})
export class HrCreateEmployeeComponent {
  email: string | null;
  form: any = {
    name: '', contactNumber: '', department: '', designation: '', workLocation: '', workMode: '', employmentType: '', dateOfJoining: '', reportingTime: '', managerName: '', managerEmail: '', managerContact: '', accommodation: '', officialEmail: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.email = this.route.snapshot.paramMap.get('email');
  }

  get formKeys() { return Object.keys(this.form); }

  async handleSubmit() {
    try {
      await this.http.post('http://localhost:8080/api/employees', { ...this.form, email: this.email }).toPromise();
      alert('Employee Created & Mail Sent ✅');
      this.router.navigate(['/hr/dashboard']);
    } catch (err) { console.error(err); alert('Error creating employee'); }
  }
}
