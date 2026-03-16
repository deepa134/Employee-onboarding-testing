import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-candidate-dashboard',
  template: `
  <div class="dashboard-container">
    <input #globalSignedInput type="file" accept=".pdf,application/pdf" style="display:none" (change)="onGlobalSignedSelected($event)" />

    <header class="main-header">
      <div class="brand">
        <div class="logo-icon">I</div>
        <div>
          <h1 class="brand-title">InternConnect</h1>
          <p class="brand-subtitle">Candidate Portal</p>
        </div>
      </div>
      <div class="user-profile">
        <div class="user-info">
          <span class="user-email">{{auth.user?.email}}</span>
          <span class="user-role">Candidate</span>
        </div>
        <button class="btn-logout" (click)="logout()">
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Logout
        </button>
      </div>
    </header>

    <main class="content-area">
      <section class="section" *ngIf="applications.length > 0">
        <div class="section-header">
          <h2 class="section-title">My Application Progress</h2>
          <span class="badge-count">{{applications.length}} Active</span>
        </div>

        <div class="app-grid">
          <div *ngFor="let app of applications" class="app-card">
            <div class="app-card-header">
              <div>
                <h3 class="company-name">{{ getInternship(app)?.companyName }}</h3>
                <p class="role-title">{{ getInternship(app)?.title }}</p>
              </div>
              <span class="status-badge" [attr.data-status]="app.status">
                {{ app.status?.replace('_', ' ') }}
              </span>
            </div>

            <div class="app-card-body">
              <div class="timeline-item" *ngIf="app.status === 'TEST_ACTIVE'">
                <div class="timeline-content highlight">
                  <p class="info-label">Action Required</p>
                  <p class="info-value">Online Test active till {{ formatDate(app.testDate) }}</p>
                  <button (click)="router.navigate(['/candidate/test', app.id])" class="btn-primary full-width">Take Test Now</button>
                </div>
              </div>

              <div class="interview-details" *ngIf="app.interviewStatus?.includes('SCHEDULED')">
                <p class="info-label">Upcoming Interview</p>
                <div class="detail-row">
                  <span>📅 {{ formatDate(app.l1Date || app.l2Date || app.hrDate) }}</span>
                  <span>⏰ {{ formatTime(app.l1Time || app.l2Time || app.hrTime) }}</span>
                </div>
              </div>

              <div class="offer-container" *ngIf="app.offerLetterFile && app.offerStatus !== 'REJECTED'">
                 <div class="offer-alert">
                    <p class="offer-text">🎉 Offer Letter Received!</p>
                    <a [href]="'http://localhost:8080/offers/' + app.offerLetterFile" target="_blank" class="btn-link">View Document</a>
                 </div>

                 <div class="action-group" *ngIf="app.offerStatus === 'PENDING'">
                    <button class="btn-success" (click)="updateOfferStatus(app.id, 'ACCEPTED')">Accept Offer</button>
                    <button class="btn-outline-danger" (click)="updateOfferStatus(app.id, 'REJECTED')">Decline</button>
                 </div>

                 <div class="action-group" *ngIf="app.offerStatus === 'ACCEPTED' && !app.signedOfferLetter">
                    <button class="btn-primary" (click)="openSignedFilePicker(app.id)">
                      {{ signedFiles[app.id] ? 'Change File' : 'Select Signed PDF' }}
                    </button>
                    <button *ngIf="signedFiles[app.id]" class="btn-success" (click)="uploadSignedOffer(app.id)">Upload & Submit</button>
                 </div>
              </div>

              <div class="employee-card" *ngIf="employee && getOnboardingStatus(app) === 'VERIFIED'">
                <div class="welcome-banner">Welcome to the Team!</div>
                <div class="emp-info-grid">
                  <div class="emp-stat"><span>Emp ID</span><strong>{{employee.employeeId}}</strong></div>
                  <div class="emp-stat"><span>Joining</span><strong>{{employee.dateOfJoining}}</strong></div>
                  <div class="emp-stat"><span>Manager</span><strong>{{employee.managerName}}</strong></div>
                </div>
              </div>

              <div *ngIf="app.signedOfferLetter && !employee" class="onboarding-status-box">
                 <p *ngIf="getOnboardingStatus(app)==='PENDING'" class="text-warning">Onboarding pending HR verification...</p>
                 <button *ngIf="!getOnboardingStatus(app) || getOnboardingStatus(app)==='REJECTED'" 
                         class="btn-primary full-width" (click)="openOnboardingForm(app.id)">
                    Fill Onboarding Form
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <h2 class="section-title">Explore Opportunities</h2>
        </div>

        <div class="jobs-grid">
          <div *ngFor="let i of internships" class="job-card">
            <div class="job-header">
              <div class="job-icon">{{i.companyName[0]}}</div>
              <h3 class="job-comp">{{i.companyName}}</h3>
            </div>
            <h4 class="job-role">{{i.title}}</h4>
            <div class="job-meta">
              <span>📍 {{i.workLocation}}</span>
              <span>💰 {{i.ctc}}</span>
            </div>
            <p class="job-desc">{{i.description | slice:0:100}}...</p>
            <div class="job-footer">
              <button *ngIf="hasApplied(i.id)" disabled class="btn-applied">Already Applied</button>
              <button *ngIf="!hasApplied(i.id)" (click)="selectInternship(i)" class="btn-outline">View & Apply</button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div class="modal-overlay" *ngIf="selectedInternship">
      <div class="modal-card">
        <div class="modal-header">
          <h3>Apply to {{selectedInternship.companyName}}</h3>
          <button class="close-btn" (click)="selectedInternship = null">×</button>
        </div>
        <div class="modal-body">
          <div class="form-grid">
            <input class="modern-input" placeholder="Full Name" [(ngModel)]="candidateName" />
            <input class="modern-input" placeholder="Phone Number" [(ngModel)]="phone" />
            <input class="modern-input" placeholder="Degree" [(ngModel)]="degree" />
            <input class="modern-input" placeholder="College" [(ngModel)]="college" />
            <input class="modern-input" placeholder="CGPA" [(ngModel)]="cgpa" />
            <input class="modern-input" placeholder="Key Skills (e.g. Java, Angular)" [(ngModel)]="skills" />
          </div>
          <div class="file-upload-zone">
             <label>Resume (PDF only)</label>
             <input type="file" (change)="onResumeSelected($event)" accept=".pdf" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-ghost" (click)="selectedInternship = null">Cancel</button>
          <button class="btn-primary" (click)="handleApply()">Submit Application</button>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
    :host {
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --bg: #f9fafb;
      --card-bg: #ffffff;
      --text-main: #111827;
      --text-muted: #6b7280;
      --border: #e5e7eb;
      --success: #10b981;
      --danger: #ef4444;
      --warning: #f59e0b;
    }

    .dashboard-container {
      background-color: var(--bg);
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      color: var(--text-main);
    }

    /* Header Styling */
    .main-header {
      background: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .brand { display: flex; align-items: center; gap: 12px; }
    .logo-icon {
      background: var(--primary);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
    }
    .brand-title { font-size: 1.25rem; font-weight: 700; margin: 0; }
    .brand-subtitle { font-size: 0.75rem; color: var(--text-muted); margin: 0; }

    .user-profile { display: flex; align-items: center; gap: 20px; }
    .user-info { text-align: right; }
    .user-email { display: block; font-size: 0.875rem; font-weight: 500; }
    .user-role { font-size: 0.75rem; color: var(--text-muted); }

    .btn-logout {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: white;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-logout:hover { background: #fee2e2; color: var(--danger); }

    /* Layout Sections */
    .content-area { padding: 2rem; max-width: 1200px; margin: 0 auto; }
    .section { margin-bottom: 3rem; }
    .section-header { display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; }
    .section-title { font-size: 1.5rem; font-weight: 700; margin: 0; }
    .badge-count {
      background: #e0e7ff;
      color: var(--primary);
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    /* Application Cards */
    .app-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1.5rem; }
    .app-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .company-name { font-size: 1.1rem; font-weight: 700; margin: 0; }
    .role-title { color: var(--text-muted); margin: 4px 0 12px 0; }

    .status-badge {
      font-size: 0.7rem;
      padding: 4px 8px;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 700;
      background: #f3f4f6;
    }
    .status-badge[data-status="TEST_ACTIVE"] { background: #fef3c7; color: #92400e; }
    .status-badge[data-status="VERIFIED"] { background: #d1fae5; color: #065f46; }

    /* Jobs Grid */
    .jobs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }
    .job-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.25rem;
      transition: transform 0.2s;
    }
    .job-card:hover { transform: translateY(-4px); border-color: var(--primary); }
    .job-icon {
      width: 32px; height: 32px; background: #f3f4f6;
      border-radius: 6px; display: flex; align-items: center; justify-content: center;
      font-weight: bold; color: var(--primary);
    }

    /* Buttons & Inputs */
    .btn-primary { background: var(--primary); color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-weight: 600; }
    .btn-primary:hover { background: var(--primary-hover); }
    .btn-outline { background: transparent; border: 1px solid var(--primary); color: var(--primary); padding: 8px 16px; border-radius: 6px; cursor: pointer; }
    .btn-success { background: var(--success); color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; }
    
    .full-width { width: 100%; margin-top: 10px; }
    .modern-input {
      width: 100%; padding: 10px; border: 1px solid var(--border); border-radius: 6px; margin-bottom: 12px; outline: none;
    }
    .modern-input:focus { border-color: var(--primary); box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1); }

    /* Modal Styling */
    .modal-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 100;
    }
    .modal-card {
      background: white; padding: 2rem; border-radius: 16px; width: 90%; max-width: 500px;
      max-height: 90vh; overflow-y: auto;
    }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

    /* Utility */
    .text-warning { color: var(--warning); font-size: 0.875rem; font-weight: 500; }
    .offer-alert {
      background: #eff6ff; border-left: 4px solid var(--primary);
      padding: 12px; border-radius: 4px; margin: 15px 0;
    }
  `]
})
export class CandidateDashboardComponent implements OnInit, OnDestroy {
  // ... Logic remains identical to your original provided code ...
  internships: any[] = [];
  applications: any[] = [];
  selectedInternship: any = null;
  candidateName = '';
  phone = '';
  degree = '';
  college = '';
  cgpa = '';
  skills = '';
  resume: any = null;
  signedFiles: any = {};
  onboardingStatusMap: Record<string, any> = {};
  employee: any = null;
  private intervalId: any;
  private pollingPaused = false;
  private refreshTimer: any;
  pickerAppId: any = null;
  @ViewChild('globalSignedInput') globalSignedInput!: ElementRef<HTMLInputElement>;

  constructor(public auth: AuthService, private http: HttpClient, public router: Router) {}

  ngOnInit() {
    if (!this.auth.user?.email) return;
    this.fetchInternships();
    this.fetchApplications();
    this.fetchEmployee();
    this.intervalId = setInterval(() => { 
      if (!this.pollingPaused) { 
        this.fetchApplications(); 
        this.fetchOnboarding(); 
      } 
    }, 8000);
  }

  ngOnDestroy() { clearInterval(this.intervalId); }

  // Logic methods (Copy-pasted from your source to ensure zero breakage)
  logout() { this.auth.logout(); this.router.navigate(['/']); }
  pausePolling() { this.pollingPaused = true; }
  resumePolling() { this.pollingPaused = false; }

  openSignedFilePicker(id: any) {
    this.pickerAppId = id;
    try { this.globalSignedInput.nativeElement.click(); } catch (err) { console.error(err); }
  }

  onGlobalSignedSelected(e: any) {
    const file = e.target.files?.[0];
    if (!file) return;
    this.signedFiles = { ...this.signedFiles, [this.pickerAppId]: file };
    e.target.value = '';
  }

  async fetchInternships() { try { this.internships = await this.http.get<any[]>('http://localhost:8080/api/internships').toPromise() || []; } catch (err) {}}
  
  async fetchApplications() { 
    try {
      const res: any = await this.http.get<any[]>('http://localhost:8080/api/applications').toPromise();
      this.applications = res.filter((app: any) => app.email === this.auth.user?.email);
    } catch (err) {}
  }

  async fetchOnboarding() {
    const signedApps = this.applications.filter((a: any) => a.signedOfferLetter).map(a => a.id);
    await Promise.all(signedApps.map(id => this.fetchOnboardingFor(id)));
  }

  async fetchOnboardingFor(appId: any) {
    try {
      const res: any = await this.http.get(`http://localhost:8080/api/onboarding/application/${appId}`).toPromise();
      const status = res && res.length > 0 ? res[res.length - 1].status : null;
      this.onboardingStatusMap = { ...this.onboardingStatusMap, [appId]: status };
    } catch (err) { this.onboardingStatusMap[appId] = null; }
  }

  getOnboardingStatus(app: any) { return this.onboardingStatusMap[app.id] || null; }

  async fetchEmployee() {
    if (!this.auth.user?.email) return;
    try { this.employee = await this.http.get(`http://localhost:8080/api/employees/${this.auth.user.email}`).toPromise(); } catch (err) { this.employee = null; }
  }

  selectInternship(i: any) { this.selectedInternship = i; }
  onResumeSelected(e: any) { this.resume = e.target.files?.[0]; }
  hasApplied(id: any) { return this.applications.some(a => a.internshipId === id); }
  getInternship(app: any) { return this.internships.find(i => i.id === app.internshipId); }
  formatDate(d: any) { return d ? new Date(d).toLocaleDateString('en-GB') : ''; }
  formatTime(t: any) { return t || ''; }

  async handleApply() {
    if (!this.resume) return alert('Please upload your resume (PDF)');
    if (!this.selectedInternship) return;

    // Show a loading state or pause polling to prevent UI jitter
    this.pausePolling();

    const form = new FormData();
    // These MUST match the @RequestParam or DTO field names in your Spring Boot/Node backend
    form.append('internshipId', this.selectedInternship.id);
    form.append('candidateName', this.candidateName);
    form.append('email', this.auth.user?.email || '');
    form.append('phone', this.phone);
    form.append('degree', this.degree);
    form.append('college', this.college);
    form.append('cgpa', this.cgpa);
    form.append('skills', this.skills);
    form.append('resume', this.resume);

    try {
      await this.http.post('http://localhost:8080/api/applications/apply', form).toPromise();
      
      alert('Application submitted successfully!');
      
      // Reset form fields
      this.selectedInternship = null;
      this.candidateName = '';
      this.phone = '';
      this.degree = '';
      this.college = '';
      this.cgpa = '';
      this.skills = '';
      this.resume = null;
      
      // Refresh the list
      this.scheduleRefresh();
    } catch (err) {
      console.error('Application Error:', err);
      alert('Failed to submit application. Please check if all fields are filled correctly.');
    } finally {
      this.resumePolling();
    }
  }
  updateOfferStatus(id: any, status: string) { 
    this.http.post('http://localhost:8080/api/applications/offer-status', null, { params: { applicationId: id, status } as any })
      .toPromise().then(() => this.fetchApplications()); 
  }

  async uploadSignedOffer(id: any) {
    const file = this.signedFiles[id];
    const form = new FormData(); form.append('applicationId', id); form.append('file', file);
    await this.http.post(`http://localhost:8080/api/applications/upload-signed-offer`, form).toPromise();
    alert('Uploaded!');
    this.fetchApplications();
    this.router.navigate(['/onboarding'], { state: { applicationId: id } });
  }

  openOnboardingForm(appId: any) {
    this.router.navigate(['/onboarding'], { state: { applicationId: appId } });
  }
  scheduleRefresh(delay = 1000) {
    clearTimeout(this.refreshTimer);
    this.refreshTimer = setTimeout(() => {
      this.fetchApplications();
      this.fetchOnboarding();
      this.fetchEmployee();
    }, delay);
  }
}