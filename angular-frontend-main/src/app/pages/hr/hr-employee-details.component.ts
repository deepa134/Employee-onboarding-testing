import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hr-employee-details',
  template: `
  <div class="container">
    <button class="btn btn-ghost" (click)="goBack()">⬅ Back</button>
    <div class="app-card" style="margin-top:12px">
      <h2>Employee Details</h2>
      <div *ngIf="!employee">Loading...</div>
      <div *ngIf="employee" class="stack">
        <p><b>Employee ID:</b> {{employee.employeeId}}</p>
        <p><b>Name:</b> {{employee.name}}</p>
        <p><b>Email:</b> {{employee.email}}</p>
        <p><b>Contact:</b> {{employee.contactNumber}}</p>
        <p><b>Department:</b> {{employee.department}}</p>
        <p><b>Designation:</b> {{employee.designation}}</p>
        <p><b>Employment Type:</b> {{employee.employmentType}}</p>
        <p><b>Work Location:</b> {{employee.workLocation}}</p>
        <p><b>Work Mode:</b> {{employee.workMode}}</p>
        <p><b>Date of Joining:</b> {{employee.dateOfJoining}}</p>
        <hr />
        <h3>Manager Details</h3>
        <p><b>Manager Name:</b> {{employee.managerName}}</p>
        <p><b>Manager Email:</b> {{employee.managerEmail}}</p>
        <p><b>Manager Contact:</b> {{employee.managerContact}}</p>
        <hr />
        <p><b>Accommodation:</b> {{employee.accommodation}}</p>
        <p><b>Official Email:</b> {{employee.officialEmail}}</p>
        <p><b>Status:</b> <span style="color:var(--success);font-weight:bold">{{employee.status}}</span></p>
      </div>
    </div>
  </div>
  `
})
export class HrEmployeeDetailsComponent implements OnInit {
  email: string | null = null;
  employee: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.email = this.route.snapshot.paramMap.get('email');
  }

  ngOnInit() { this.fetchEmployee(); }

  goBack() { this.router.navigate(['../'], { relativeTo: this.route }); }

  async fetchEmployee() {
    try {
      this.employee = await this.http.get(`http://localhost:8080/api/employees/${this.email}`).toPromise();
    } catch (err) { console.error(err); }
  }
}
