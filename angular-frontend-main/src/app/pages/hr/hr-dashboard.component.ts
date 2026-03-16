import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-hr-dashboard',
  template: `
  <div class="dashboard-container">
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-logo">H</div>
        <span>HR Dashboard</span>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-item active" (click)="scrollTo('top')">📊 Overview</div>
        <div class="nav-item" (click)="scrollTo('post-section')">✍️ Post Internship</div>
        <div class="nav-item" (click)="scrollTo('candidates-section')">👥 Candidates</div>
      </nav>
      <div class="sidebar-footer">
        <div class="user-pill">
          <div class="avatar">{{ auth.user?.email?.[0]?.toUpperCase() }}</div>
          <div class="user-info">
            <span class="user-name">HR Admin</span>
            <button class="logout-link" (click)="logout()">Logout</button>
          </div>
        </div>
      </div>
    </aside>

    <main class="main-content" id="top">
      <header class="main-header">
        <div class="header-titles">
          <h1>Recruitment Hub</h1>
          <p class="text-secondary">Manage your postings and candidate pipeline in real-time.</p>
        </div>
        <div class="header-stats">
          <div class="stat-card">
            <span class="stat-label">Internships</span>
            <span class="stat-value">{{ internships.length }}</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">Applicants</span>
            <span class="stat-value">{{ applications.length }}</span>
          </div>
        </div>
      </header>

      <section id="post-section" class="content-section">
        <div class="glass-card">
          <div class="card-header">
            <h2>Create New Opportunity</h2>
            <p>Fill in the details to publish a new internship role.</p>
          </div>
          <div class="form-grid">
            <div class="form-group">
              <label>Role Title</label>
              <input class="modern-input" placeholder="e.g. Frontend Developer" [(ngModel)]="title" />
            </div>
            <div class="form-group">
              <label>Location</label>
              <input class="modern-input" placeholder="e.g. Remote / Bangalore" [(ngModel)]="location" />
            </div>
            <div class="form-group">
              <label>CTC</label>
              <input class="modern-input" placeholder="e.g. 5,00,000" [(ngModel)]="ctc" />
            </div>
            <div class="form-group">
              <label>Company</label>
              <input class="modern-input" placeholder="e.g. EventNest" [(ngModel)]="companyName" />
            </div>
            <div class="form-group full-width">
              <label>Job Description</label>
              <textarea class="modern-input" rows="3" placeholder="Describe the role..." [(ngModel)]="description"></textarea>
            </div>
            <div class="form-group full-width">
              <label>JD Document (PDF)</label>
              <div class="file-drop-zone">
                <input type="file" (change)="onPdfSelected($event)" (focus)="pausePolling()" (blur)="resumePolling()" />
                <span class="file-hint" *ngIf="!pdfUploaded">Select PDF JD file</span>
                <span class="file-success" *ngIf="pdfUploaded">✅ PDF Uploaded</span>
              </div>
            </div>
          </div>
         <div class="card-footer-actions">

  <button
    (click)="handlePdfUpload()"
    class="btn-outline">
    Upload Document
  </button>

 <button (click)="handlePost()" class="btn-solid">
  Post Internship
</button>

</div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-header">
          <h2>Active Postings</h2>
        </div>
        <div class="card-grid">
          <div *ngFor="let i of internships" class="internship-card">
            <div class="card-status-badge">Active</div>
            <h3>{{i.title}}</h3>
            <div class="meta-row">
              <span>🏢 {{i.companyName}}</span>
              <span>📍 {{i.location}}</span>
            </div>
            <div class="ctc-badge">💰 {{i.ctc}}</div>
            <p class="description-preview">{{i.description}}</p>
            <div class="card-footer">
              <button class="btn-ghost-danger" (click)="handleDelete(i.id)">Remove Posting</button>
            </div>
          </div>
        </div>
      </section>

      <section id="candidates-section" class="content-section">
        <div class="section-header">
          <h2>Candidate Pipeline</h2>
          <span class="badge-count">{{ applications.length }} Candidates</span>
        </div>

        <div *ngFor="let app of applications" class="candidate-row">
          <div class="candidate-header">
            <div class="candidate-info">
              <div class="candidate-avatar">{{ app.candidateName[0] }}</div>
              <div>
                <h3>{{app.candidateName}}</h3>
                <span class="test-cleared-tag">✓ Test Passed</span>
              </div>
            </div>
            <button class="btn-outline-sm" (click)="selectedCandidate = app">Profile Details</button>
          </div>

          <div class="pipeline-status">
            <div class="interview-timeline" *ngIf="app.l1Date || app.l2Date || app.l1Mode || app.l2Mode || app.hrDate || app.hrMode">
              <div class="timeline-item" *ngIf="app.l1Date || app.interviewStatus === 'L1_SCHEDULED'">
                <span class="round-label">Round 1 (L1)</span>
                <p *ngIf="app.interviewStatus === 'L1_SCHEDULED' && app.l1InterviewerStatus === 'REQUESTED'" class="status-waiting">⏳ Waiting for interviewer response</p>
                <p *ngIf="!(app.interviewStatus === 'L1_SCHEDULED' && app.l1InterviewerStatus === 'REQUESTED') && app.l1Date" class="status-scheduled">
                  📅 {{ formatDate(app.l1Date) }} | 👤 {{ getInterviewerName(app.l1InterviewerId) }} | 💻 {{ app.l1Mode }}
                </p>
                <div class="result-pill" *ngIf="app.l1Result" [attr.data-result]="app.l1Result">L1: {{ app.l1Result }}</div>
              </div>

              <div class="timeline-item" *ngIf="app.l2Date || app.interviewStatus === 'L2_SCHEDULED'">
                <span class="round-label">Round 2 (L2)</span>
                <p *ngIf="app.interviewStatus === 'L2_SCHEDULED' && app.l2InterviewerStatus === 'REQUESTED'" class="status-waiting">⏳ Waiting for interviewer response</p>
                <p *ngIf="!(app.interviewStatus === 'L2_SCHEDULED' && app.l2InterviewerStatus === 'REQUESTED') && app.l2Date" class="status-scheduled">
                  📅 {{ formatDate(app.l2Date) }} | 👤 {{ getInterviewerName(app.l2InterviewerId) }} | 💻 {{ app.l2Mode }}
                </p>
                <div class="result-pill" *ngIf="app.l2Result" [attr.data-result]="app.l2Result">L2: {{ app.l2Result }}</div>
              </div>

              <div class="timeline-item" *ngIf="app.hrDate || app.interviewStatus === 'HR_SCHEDULED' || app.hrResult">
                <span class="round-label">Final Round (HR)</span>
                <div class="result-pill" *ngIf="app.hrResult" [attr.data-result]="app.hrResult">HR: {{ app.hrResult }}</div>
                <p *ngIf="app.interviewStatus === 'HR_SCHEDULED'" class="status-scheduled">
                  📅 {{ formatDate(app.hrDate) }} | ⏰ {{ formatTime(app.hrTime) }} | 💻 {{ app.hrMode }}
                </p>
              </div>
            </div>

            <div class="candidate-actions-grid">
              
              <div class="action-block" *ngIf="app.signedOfferLetter">
                <span class="success-text">Offer Signed ✅</span>
                <a class="view-link" [href]="'http://localhost:8080/signed-offers/' + app.signedOfferLetter" target="_blank">View Document</a>
                
                <div class="onboarding-summary" *ngIf="getOnboardingRecord(app) as ob">
                  <p>Onboarding: <span [style.color]="statusColor(ob.status)">{{ ob.status }}</span></p>
                  <div class="btn-group">
                    <button class="btn-dark-sm" (click)="router.navigate(['/hr/onboarding', app.email])">View Details</button>
                    <button *ngIf="ob.status === 'VERIFIED' && !employeeExists(app.email)" class="btn-solid-sm" (click)="router.navigate(['/hr/create-employee', app.email], { state: { applicationId: app.id } })">Create Profile</button>
                    <button *ngIf="employeeExists(app.email)" class="btn-outline-sm" (click)="router.navigate(['/hr/employee', app.email])">Employee View</button>
                  </div>
                </div>
                <button *ngIf="!getOnboardingRecord(app)" class="btn-solid-sm" (click)="router.navigate(['/hr/onboarding', app.email])">Fill Onboarding</button>
              </div>

              <div class="action-block" *ngIf="app.interviewStatus === 'HR_SCHEDULED' && app.status !== 'SELECTED' && app.status !== 'REJECTED'">
                <button (click)="updateHrResult(app.id, 'HR_PASSED')" class="btn-success">Approve Selection</button>
                <button (click)="updateHrResult(app.id, 'HR_FAILED')" class="btn-danger">Reject</button>
              </div>

              <div class="action-block" *ngIf="(app.status === 'SELECTED' || app.status === 'OFFER_PENDING' || app.status === 'OFFER_SENT') && !app.offerLetterFile">
                <label class="small-label">Upload Offer Letter (PDF)</label>
                <div class="mini-upload">
                  <input type="file" (change)="handleOfferFileChange(app.id, $event)" (focus)="pausePolling()" />
                  <button (click)="uploadOfferLetter(app.id)" class="btn-solid-sm">Upload</button>
                </div>
                <div class="debug-text" *ngIf="uploadedOfferForApp[app.id]">Uploaded: {{ uploadedOfferForApp[app.id] }}</div>
              </div>

              <div class="scheduler-card" *ngIf="showScheduleOptions(app)">
                <h4>Schedule Next Round</h4>
                <div class="scheduler-grid">
                  <input type="date" class="modern-input-sm" [ngModel]="getScheduleValue(app.id,'date')" (ngModelChange)="setScheduleValue(app.id,'date',$event)" />
                  <input type="time" class="modern-input-sm" [ngModel]="getScheduleValue(app.id,'time')" (ngModelChange)="setScheduleValue(app.id,'time',$event)" />
                  <select class="modern-input-sm" [ngModel]="getScheduleValue(app.id,'mode')" (ngModelChange)="setScheduleValue(app.id,'mode',$event)">
                    <option value="">Mode</option>
                    <option value="ONLINE">Online</option>
                    <option value="OFFLINE">Offline</option>
                  </select>
                  <select class="modern-input-sm" *ngIf="app.status !== 'HR_PENDING'" [ngModel]="getScheduleValue(app.id,'interviewerId')" (ngModelChange)="setScheduleValue(app.id,'interviewerId',$event)">
                    <option value="">Interviewer</option>
                    <option *ngFor="let iv of interviewerOptionsForApp(app)" [value]="iv.id">{{ iv.name }}</option>
                  </select>
                </div>
                <button (click)="scheduleInterview(app.id, app.status)" class="btn-solid-full">{{ scheduleLabel(app) }}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div class="panel-overlay" *ngIf="selectedCandidate" (click)="selectedCandidate = null"></div>
    <div class="side-panel" [class.panel-open]="selectedCandidate">
      <div class="panel-header">
        <h2>Candidate Profile</h2>
        <button class="close-btn" (click)="selectedCandidate = null">&times;</button>
      </div>
      <div class="panel-body" *ngIf="selectedCandidate">
        <div class="profile-summary">
          <div class="large-avatar">{{ selectedCandidate.candidateName[0] }}</div>
          <h3>{{selectedCandidate.candidateName}}</h3>
          <p>{{selectedCandidate.email}}</p>
        </div>
        <div class="info-grid">
          <div class="info-item"><strong>Phone</strong> {{selectedCandidate.phone}}</div>
          <div class="info-item"><strong>CGPA</strong> {{selectedCandidate.cgpa}}</div>
          <div class="info-item full"><strong>College</strong> {{selectedCandidate.college}}</div>
          <div class="info-item full"><strong>Degree</strong> {{selectedCandidate.degree}}</div>
          <div class="info-item full"><strong>Skills</strong> {{selectedCandidate.skills}}</div>
        </div>
        <a [href]="'http://localhost:8080/resumes/' + selectedCandidate.resumeFileName" target="_blank" class="btn-download-resume">Download Resume PDF</a>
      </div>
    </div>
  </div>
  `,
  styles: [`
    :host {
      --primary: #4f46e5;
      --primary-dark: #4338ca;
      --sidebar: #0f172a;
      --bg: #f8fafc;
      --text-main: #1e293b;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --white: #ffffff;
      --success: #22c55e;
      --danger: #ef4444;
    }

    .dashboard-container {
      display: flex;
      min-height: 100vh;
      background: var(--bg);
      font-family: 'Inter', system-ui, sans-serif;
      color: var(--text-main);
    }

    /* Sidebar */
    .sidebar {
      width: 260px;
      background: var(--sidebar);
      color: white;
      position: fixed;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 24px;
      z-index: 100;
    }

    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 40px;
    }

    .brand-logo {
      background: var(--primary);
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }

    .nav-item {
      padding: 12px 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      color: #94a3b8;
      margin-bottom: 8px;
    }

    .nav-item:hover, .nav-item.active {
      background: rgba(255,255,255,0.1);
      color: white;
    }

    .sidebar-footer {
      margin-top: auto;
    }

    .user-pill {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .avatar {
      width: 40px;
      height: 40px;
      background: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
    }

    .logout-link {
      background: none;
      border: none;
      color: var(--danger);
      padding: 0;
      font-size: 0.875rem;
      cursor: pointer;
    }

    /* Main Content */
    .main-content {
      margin-left: 260px;
      flex: 1;
      padding: 40px;
    }

    .main-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 40px;
    }

    .header-titles h1 {
      font-size: 1.875rem;
      font-weight: 800;
      margin: 0;
    }

    .header-stats {
      display: flex;
      gap: 16px;
    }

    .stat-card {
      background: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      text-align: center;
      min-width: 120px;
    }

    .stat-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; }
    .stat-value { display: block; font-size: 1.5rem; font-weight: 700; color: var(--primary); }

    /* Forms and Cards */
    .glass-card {
      background: white;
      padding: 32px;
      border-radius: 16px;
      border: 1px solid var(--border);
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 24px;
    }

    .full-width { grid-column: span 2; }

    .form-group label {
      display: block;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .modern-input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: #fdfdfd;
      transition: border-color 0.2s;
    }

    .modern-input:focus {
      outline: none;
      border-color: var(--primary);
    }

    .file-drop-zone {
      border: 2px dashed var(--border);
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      position: relative;
    }

    /* Internship Grid */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      margin-top: 20px;
    }

    .internship-card {
      background: white;
      padding: 24px;
      border-radius: 16px;
      border: 1px solid var(--border);
      position: relative;
      transition: transform 0.2s;
    }

    .internship-card:hover { transform: translateY(-4px); }

    .card-status-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      background: #dcfce7;
      color: #166534;
      font-size: 0.7rem;
      padding: 4px 8px;
      border-radius: 12px;
      font-weight: 700;
    }

    /* Candidate Rows */
    .candidate-row {
      background: white;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }

    .candidate-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .candidate-info {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .candidate-avatar {
      width: 48px;
      height: 48px;
      background: #f1f5f9;
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.25rem;
      border-radius: 12px;
    }

    .test-cleared-tag {
      font-size: 0.75rem;
      color: var(--success);
      font-weight: 600;
    }

    .interview-timeline {
      display: flex;
      gap: 20px;
      background: #f8fafc;
      padding: 16px;
      border-radius: 12px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }

    .timeline-item {
      flex: 1;
      min-width: 200px;
      padding-right: 12px;
      border-right: 1px solid var(--border);
    }

    .timeline-item:last-child { border-right: none; }

    .round-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--text-muted);
    }

    .result-pill {
      display: inline-block;
      font-size: 0.75rem;
      padding: 2px 8px;
      border-radius: 6px;
      margin-top: 4px;
      font-weight: 600;
    }
    .result-pill[data-result="PASSED"] { background: #dcfce7; color: #166534; }
    .result-pill[data-result="FAILED"] { background: #fee2e2; color: #991b1b; }

    /* Scheduler */
    .scheduler-card {
      background: #fff;
      border: 1px solid var(--border);
      padding: 16px;
      border-radius: 12px;
      margin-top: 16px;
    }

    .scheduler-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin: 12px 0;
    }

    /* Buttons */
    .btn-solid {
      background: var(--primary);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }

    .btn-solid-full {
      width: 100%;
      background: var(--primary);
      color: white;
      border: none;
      padding: 10px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }

    .btn-outline {
      background: white;
      color: var(--text-main);
      border: 1px solid var(--border);
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
    }

    .btn-success { background: var(--success); color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; }
    .btn-danger { background: var(--danger); color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; }

    /* Side Panel */
    .side-panel {
      position: fixed;
      right: 0;
      top: 0;
      width: 400px;
      height: 100vh;
      background: white;
      box-shadow: -4px 0 20px rgba(0,0,0,0.1);
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 200;
      padding: 40px;
    }

    .panel-open { transform: translateX(0); }

    .panel-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
      z-index: 199;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 24px 0;
    }

    .info-item strong { display: block; font-size: 0.75rem; color: var(--text-muted); }
  `]
})
export class HrDashboardComponent implements OnInit, OnDestroy {
  title = '';
  location = '';
  ctc = '';
  description = '';
  companyName = '';

  internships: any[] = [];
  applications: any[] = [];
  interviewerList: any[] = [];
  scheduleData: any = {};
  selectedCandidate: any = null;
  offerFiles: any = {};
  uploadedOfferForApp: Record<string,string> = {};
  lastUploadDebug: { url: string; status: string; body: any } | null = null;
  onboardingForms: Record<string, any> = {};
  employeeForms: Record<string, any> = {};

  pdfFile: any = null;
  uploadedFileName = '';
  pdfUploaded = false;
  onboardingList: any[] = [];
  employeeList: any[] = [];

  private intervalId: any;
  private pollingPaused = false;
  private refreshTimer: any;

  constructor(public auth: AuthService, private http: HttpClient, public router: Router) {}

  ngOnInit() {
    if (!this.auth.user || this.auth.user.role !== 'HR') {
      this.router.navigate(['/']);
      return;
    }

    this.fetchAll();
    this.startPolling();
  }

  ngOnDestroy() {
    this.stopPolling();
  }

  startPolling() {
    this.stopPolling();
    this.intervalId = setInterval(() => { if (!this.pollingPaused) this.fetchAll(); }, 8000);
  }

  stopPolling() { if (this.intervalId) { clearInterval(this.intervalId); this.intervalId = null; } }

  pausePolling() { this.pollingPaused = true; }

  resumePolling() { this.pollingPaused = false; }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  private fetchAll() {
    const y = window.scrollY || 0;
    Promise.all([
      this.fetchInternships(),
      this.fetchApplications(),
      this.fetchOnboarding(),
      this.fetchEmployees()
    ]).finally(() => { setTimeout(() => window.scrollTo(0, y), 0); });
  }

  formatDate(dateString: any) {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  formatTime(time: string) {
    if (!time) return '';
    const [h, m] = time.split(':');
    const d = new Date(); d.setHours(Number(h), Number(m));
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  getInterviewerName(id: number) {
    if (!id) return '';
    const known: Record<number,string> = { 1: 'Kavya', 2: 'Arun', 3: 'Divya' };
    if (known[id]) return known[id];
    const emp = this.employeeList && this.employeeList.find(e => (e.id ?? e.interviewerId ?? e.employeeId) === id);
    if (emp) return emp.name ?? emp.fullName ?? emp.interviewerName ?? emp.email ?? '';
    return '';
  }

  async fetchOnboarding() {
    try {
      const res: any = await this.http.get('http://localhost:8080/api/onboarding').toPromise();
      this.onboardingList = res || [];
    } catch (err) { console.error(err); }
  }

  async fetchInternships() {
    try { this.internships = await this.http.get<any[]>('http://localhost:8080/api/internships').toPromise(); } catch (err) { console.error(err); }
  }

  async fetchApplications() {
    try { this.applications = await this.http.get<any[]>('http://localhost:8080/api/applications').toPromise(); } catch (err) { console.error(err); }
  }

  handleOfferFileChange(id: any, event: any) {
    const file = event.target.files?.[0];
    if (!file) return;
    const isPdfMime = file.type && file.type.toLowerCase().includes('pdf');
    const isPdfExt = file.name && file.name.toLowerCase().endsWith('.pdf');
    if (!isPdfMime && !isPdfExt) {
      alert('Please select a PDF file for the offer letter');
      return;
    }
    this.offerFiles = { ...this.offerFiles, [id]: file };
  }

  async uploadOfferLetter(id: any) {
    const file = this.offerFiles[id];
    if (!file) return alert('Select offer letter');
    this.pausePolling();
    const y = window.scrollY || 0;
    try {
      const url = 'http://localhost:8080/api/applications/upload-offer-letter';
      const form = new FormData();
      form.append('applicationId', id);
      form.append('file', file);
      const res: any = await this.http.post(url, form, { responseType: 'text' as 'json' }).toPromise();
      if (typeof res === 'string' && res.trim()) {
        this.uploadedOfferForApp[id] = res;
      }
      this.scheduleRefresh();
      alert('Offer uploaded');
    } catch (err) {
      console.error('Offer upload failed', err);
      alert('Error uploading offer letter');
    } finally {
      setTimeout(() => window.scrollTo(0, y), 0);
      this.resumePolling();
    }
  }

  async updateOnboardingStatus(id: any, status: string) {
    await this.http.put(`http://localhost:8080/api/onboarding/update/${id}/${status}`, {}).toPromise();
    this.scheduleRefresh();
  }

  openOnboardingForm(appId: any, email: string) {
    this.onboardingForms = { ...this.onboardingForms, [appId]: { address: '', aadhaar: '', pan: '', bankAccount: '', email, applicationId: appId } };
    this.pausePolling();
  }

  cancelOnboardingForm(appId: any) {
    const copy = { ...this.onboardingForms };
    delete copy[appId];
    this.onboardingForms = copy;
    this.resumePolling();
  }

  async submitOnboarding(appId: any) {
    const payload = this.onboardingForms[appId];
    if (!payload) return;
    if (!payload.address || !payload.aadhaar || !payload.pan || !payload.bankAccount) return alert('Fill all fields');
    try {
      await this.http.post('http://localhost:8080/api/onboarding', payload).toPromise();
      alert('Onboarding details saved');
      this.scheduleRefresh();
      this.cancelOnboardingForm(appId);
    } catch (err) { console.error(err); alert('Error saving onboarding'); }
  }

  openEmployeeForm(appId: any, email: string) {
    const template = {
      name: '', contactNumber: '', department: '', designation: '', workLocation: '', workMode: '', employmentType: '', dateOfJoining: '', reportingTime: '', managerName: '', managerEmail: '', managerContact: '', accommodation: '', officialEmail: ''
    };
    this.employeeForms = { ...this.employeeForms, [appId]: { ...template, email, applicationId: appId } };
    this.pausePolling();
  }

  cancelEmployeeForm(appId: any) {
    const copy = { ...this.employeeForms };
    delete copy[appId];
    this.employeeForms = copy;
    this.resumePolling();
  }

  employeeFormKeys(appId: any) {
    return Object.keys(this.employeeForms[appId] || { name: '', contactNumber: '', department: '', designation: '', workLocation: '', workMode: '', employmentType: '', dateOfJoining: '', reportingTime: '', managerName: '', managerEmail: '', managerContact: '', accommodation: '', officialEmail: '' });
  }

  async submitEmployeeForm(appId: any, email: string) {
    const form = this.employeeForms[appId];
    if (!form) return;
    try {
      await this.http.post('http://localhost:8080/api/employees', { ...form, email }).toPromise();
      alert('Employee Created & Mail Sent ✅');
      this.fetchEmployees();
      this.scheduleRefresh();
      this.cancelEmployeeForm(appId);
    } catch (err) { console.error(err); alert('Error creating employee'); }
  }

  scheduleRefresh(delay = 1000) {
    clearTimeout(this.refreshTimer);
    this.refreshTimer = setTimeout(() => {
      this.fetchInternships();
      this.fetchApplications();
      this.fetchOnboarding();
      this.fetchEmployees();
    }, delay);
  }

  onPdfSelected(e: any) { this.pdfFile = e.target.files?.[0]; }

  async handlePdfUpload() {
    if (!this.pdfFile) return alert('Select PDF');
    try {
      const form = new FormData();
      form.append('file', this.pdfFile);
      const res = await this.http.post('http://localhost:8080/api/internships/upload-pdf', form, { responseType: 'text' }).toPromise();
      this.uploadedFileName = res as string;
      this.pdfUploaded = true;
    } catch (err) {
      console.error('PDF upload failed', err);
      alert('Error uploading PDF');
    }
  }

  async handlePost() {

  if (!this.title ||
      !this.location ||
      !this.ctc ||
      !this.companyName ||
      !this.description ||
      !this.pdfUploaded) {

    alert("Fill all fields before posting");
    return;
  }

  const form = new FormData();

  form.append('companyName', this.companyName);
  form.append('title', this.title);
  form.append('location', this.location);
  form.append('ctc', this.ctc);
  form.append('description', this.description);
  form.append('pdfFileName', this.uploadedFileName);

  await this.http.post(
    'http://localhost:8080/api/internships/post',
    form
  ).toPromise();

  this.companyName = '';
  this.title = '';
  this.location = '';
  this.ctc = '';
  this.description = '';

  this.pdfUploaded = false;
  this.pdfFile = null;

  this.fetchInternships();
}

  async handleDelete(id: any) { await this.http.delete(`http://localhost:8080/api/internships/${id}`).toPromise(); this.fetchInternships(); }

  handleInputChange(appId: any, field: string, value: any) {
    this.scheduleData = { ...this.scheduleData, [appId]: { ...(this.scheduleData[appId] || {}), [field]: value } };
  }

  getScheduleValue(appId: any, field: string) {
    return (this.scheduleData[appId] && this.scheduleData[appId][field]) || '';
  }

  setScheduleValue(appId: any, field: string, value: any) {
    this.scheduleData = { ...this.scheduleData, [appId]: { ...(this.scheduleData[appId] || {}), [field]: value } };
  }
  canPost() {
  return this.pdfUploaded &&
    this.title?.trim() &&
    this.location?.trim() &&
    this.ctc?.trim() &&
    this.companyName?.trim() &&
    this.description?.trim();
}

  async scheduleInterview(appId: any, status: any) {
    const data = this.scheduleData[appId];
    if (!data?.date || !data?.time || !data?.mode) { return alert('Fill all fields'); }
    this.pausePolling();
    const y = window.scrollY || 0;
    const params = new HttpParams()
      .set('applicationId', appId)
      .set('level', status === 'TEST_PASSED' ? 'L1' : status === 'L2_PENDING' ? 'L2' : 'HR')
      .set('date', data.date)
      .set('time', data.time)
      .set('mode', data.mode)
      .set('interviewerId', data.interviewerId || '');
    try {
      await this.http.post('http://localhost:8080/api/applications/schedule-interview', null, { params, responseType: 'text' }).toPromise();
      await this.fetchApplications();
    } catch (err) { console.error('Schedule interview failed', err); alert('Error scheduling interview'); }
    finally {
      setTimeout(() => window.scrollTo(0, y), 0);
      this.resumePolling();
    }
  }

  async fetchEmployees() { try { this.employeeList = await this.http.get<any[]>('http://localhost:8080/api/employees').toPromise(); } catch (err) { console.error(err); } }

  interviewerOptionsForApp(app: any) {
    const fallback = [{ id: 1, name: 'Kavya' }, { id: 2, name: 'Arun' }, { id: 3, name: 'Divya' }];
    if (!this.employeeList || !this.employeeList.length) return fallback.filter(iv => iv.id !== app.l1InterviewerId);

    const candidates = this.employeeList.filter(e => {
      const role = (e.role || e.designation || '') as string;
      const roleIsInterviewer = role && role.toLowerCase().includes('interviewer');
      const flagInterviewer = e.isInterviewer === true || e.interviewer === true || !!e.interviewerId;
      const notSelf = !(this.auth.user && this.auth.user.email && this.auth.user.email === e.email);
      return (roleIsInterviewer || flagInterviewer) && notSelf;
    });

    const list = candidates.map(e => ({ id: e.id ?? e.interviewerId ?? e.employeeId, name: e.name ?? e.fullName ?? e.interviewerName ?? e.email }));
    if (!list.length) return fallback.filter(iv => iv.id !== app.l1InterviewerId);
    return list.filter(iv => iv.id !== app.l1InterviewerId);
  }

  async updateHrResult(id: any, result: string) {
    this.pausePolling();
    const y = window.scrollY || 0;
    try {
      const localApp = this.applications.find(a => a.id === id);
      if (localApp) {
        localApp.status = (result === 'HR_PASSED') ? 'SELECTED' : (result === 'HR_FAILED' ? 'REJECTED' : localApp.status);
        localApp.hrResult = (result === 'HR_PASSED') ? 'PASSED' : (result === 'HR_FAILED' ? 'FAILED' : localApp.hrResult);
      }
      await this.http.post('http://localhost:8080/api/applications/hr-result', null, { params: new HttpParams().set('applicationId', id).set('result', result), responseType: 'text' }).toPromise();
      await this.fetchAll();
    } catch (errParams) {
      try {
        await this.http.post('http://localhost:8080/api/applications/hr-result', { applicationId: id, result }, { responseType: 'text' }).toPromise();
        await this.fetchAll();
      } catch (errBody) {
        alert('Error updating HR result');
      }
    }
    finally {
      setTimeout(() => window.scrollTo(0, y), 0);
      this.resumePolling();
    }
  }

  getOnboardingRecord(app: any) {
    return this.onboardingList.filter(ob => ob.applicationId === app.id).slice(-1)[0];
  }

  statusColor(status: string) {
    if (!status) return '#9ca3af';
    return status === 'VERIFIED' ? 'green' : status === 'REJECTED' ? 'red' : 'orange';
  }

  employeeExists(email: string) { return !!this.employeeList.find(emp => emp.email === email); }

  showScheduleOptions(app: any) {
    return (app.status === 'TEST_PASSED' && app.interviewStatus !== 'L1_SCHEDULED') ||
      (app.status === 'L2_PENDING' && app.interviewStatus !== 'L2_SCHEDULED') ||
      (app.status === 'HR_PENDING' && app.interviewStatus !== 'HR_SCHEDULED') ||
      app.l1InterviewerStatus === 'REJECTED' || app.l2InterviewerStatus === 'REJECTED';
  }

  scheduleLabel(app: any) {
    return app.status === 'TEST_PASSED' ? 'Schedule L1' : app.status === 'L2_PENDING' ? 'Schedule L2' : 'Schedule HR';
  }

  scrollTo(target: string) {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}