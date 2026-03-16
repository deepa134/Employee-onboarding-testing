import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-interviewer-dashboard',
  template: `
  <div class="dashboard-wrapper">
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-icon">INT</div>
        <span class="brand-text">Interviewer Portal</span>
      </div>
      
      <nav class="sidebar-nav">
        <div class="nav-section-label">Main Menu</div>
        <a class="nav-item active">
          <span class="nav-icon">📊</span> My Interviews
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="user-pill">
          <div class="user-avatar">{{ auth.user?.interviewerName?.[0]?.toUpperCase() }}</div>
          <div class="user-meta">
            <span class="u-name">{{auth.user?.interviewerName}}</span>
            <button class="logout-btn" (click)="logout()">Logout</button>
          </div>
        </div>
      </div>
    </aside>

    <main class="main-content">
      <header class="content-header">
        <div class="header-titles">
          <h1>Pending Assessments</h1>
          <p>Review and evaluate candidates assigned to you.</p>
        </div>
        <div class="header-stats">
          <div class="h-stat-card">
            <div class="h-stat-val">{{ applications.length }}</div>
            <div class="h-stat-lbl">Total Requests</div>
          </div>
        </div>
      </header>

      <section class="assessment-section">
        <p *ngIf="applications.length === 0" class="empty-state">No interview requests at the moment.</p>

        <div class="card-grid">
          <div *ngFor="let app of applications" class="assessment-card">
            <div class="card-top">
              <div class="candidate-profile">
                <div class="avatar-sq">{{app.candidateName[0]}}</div>
                <div>
                  <h3 class="candidate-name">{{app.candidateName}}</h3>
                  <span class="level-badge">{{ getLevel(app) }} Round</span>
                </div>
              </div>
              <div class="status-indicator" [attr.data-status]="getInterviewerStatus(app)">
                {{ getInterviewerStatus(app) }}
              </div>
            </div>

            <div class="interview-details">
              <div class="detail-item">
                <span class="label">DATE</span>
                <span class="val">{{ formatDate(getDate(app)) }}</span>
              </div>
              <div class="detail-item">
                <span class="label">TIME</span>
                <span class="val">{{ formatTime(getTime(app)) }}</span>
              </div>
              <div class="detail-item">
                <span class="label">MODE</span>
                <span class="val">{{ getMode(app) }}</span>
              </div>
            </div>

            <div class="card-actions-area">
              <div *ngIf="getInterviewerStatus(app) === 'REQUESTED'" class="action-flex">
                <p class="hint-text">HR has assigned this candidate to you.</p>
                <div class="btn-group">
                  <button (click)="respondToRequest(app.id,'ACCEPTED')" class="btn btn-solid">Accept</button>
                  <button (click)="respondToRequest(app.id,'REJECTED')" class="btn btn-outline-danger">Decline</button>
                </div>
              </div>

              <div *ngIf="getInterviewerStatus(app) === 'ACCEPTED' && app.interviewStatus.includes('SCHEDULED')" class="result-actions">
                <div class="btn-group-vertical" *ngIf="!isResultDone(app)">
                  <button (click)="updateResult(app.id, getLevel(app) === 'L1' ? 'L1_PASSED' : 'L2_PASSED')" class="btn btn-success">Mark as Passed</button>
                  <button (click)="updateResult(app.id, getLevel(app) === 'L1' ? 'L1_FAILED' : 'L2_FAILED')" class="btn btn-danger-soft">Mark as Failed</button>
                </div>

                <div class="final-result-box" *ngIf="isResultDone(app)">
                  <div *ngIf="isPassed(app)" class="res-tag res-pass">✅ CANDIDATE PASSED</div>
                  <div *ngIf="!isPassed(app)" class="res-tag res-fail">❌ CANDIDATE FAILED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  `,
  styles: [`
    :host {
      --primary: #4f46e5;
      --sidebar-bg: #0f172a;
      --bg: #f8fafc;
      --white: #ffffff;
      --text-dark: #1e293b;
      --text-soft: #64748b;
      --border: #e2e8f0;
    }

    .dashboard-wrapper { display: flex; min-height: 100vh; background: var(--bg); font-family: 'Inter', sans-serif; }

    /* Sidebar */
    .sidebar { width: 280px; background: var(--sidebar-bg); color: white; position: fixed; height: 100vh; display: flex; flex-direction: column; z-index: 1000; }
    .sidebar-brand { padding: 30px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #1e293b; }
    .brand-icon { background: var(--primary); padding: 5px 10px; border-radius: 6px; font-weight: 800; }
    .sidebar-nav { padding: 20px; flex: 1; }
    .nav-section-label { font-size: 11px; text-transform: uppercase; color: #475569; font-weight: 700; padding: 10px; }
    .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px; color: #94a3b8; text-decoration: none; border-radius: 8px; cursor: pointer; }
    .nav-item.active { background: rgba(255,255,255,0.1); color: white; }
    .sidebar-footer { padding: 20px; border-top: 1px solid #1e293b; }
    .user-pill { display: flex; align-items: center; gap: 12px; }
    .user-avatar { width: 38px; height: 38px; background: var(--primary); border-radius: 50%; display: grid; place-items: center; font-weight: 700; }
    .u-name { display: block; font-size: 13px; font-weight: 600; }
    .logout-btn { background: none; border: none; color: #f87171; font-size: 11px; cursor: pointer; padding: 0; }

    /* Main Content */
    .main-content { margin-left: 280px; flex: 1; padding: 40px; }
    .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
    .header-titles h1 { font-size: 28px; font-weight: 800; color: var(--text-dark); margin: 0; }
    .header-titles p { color: var(--text-soft); margin: 5px 0 0; }
    .h-stat-card { background: white; padding: 15px 30px; border-radius: 12px; border: 1px solid var(--border); box-shadow: 0 4px 6px rgba(0,0,0,0.02); text-align: center; }
    .h-stat-val { font-size: 24px; font-weight: 800; color: var(--primary); }
    .h-stat-lbl { font-size: 11px; color: var(--text-soft); font-weight: 700; }

    /* Assessment Cards */
    .card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 24px; }
    .assessment-card { background: white; border-radius: 16px; border: 1px solid var(--border); padding: 24px; display: flex; flex-direction: column; transition: 0.3s; }
    .assessment-card:hover { transform: translateY(-4px); box-shadow: 0 12px 20px rgba(0,0,0,0.05); }
    
    .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
    .candidate-profile { display: flex; gap: 15px; align-items: center; }
    .avatar-sq { width: 45px; height: 45px; background: #f1f5f9; border-radius: 10px; display: grid; place-items: center; font-weight: 700; color: var(--primary); font-size: 18px; }
    .candidate-name { font-size: 16px; margin: 0; font-weight: 700; }
    .level-badge { font-size: 11px; background: #eef2ff; color: var(--primary); padding: 2px 8px; border-radius: 4px; font-weight: 700; }
    
    .status-indicator { font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; }
    .status-indicator[data-status="ACCEPTED"] { background: #dcfce7; color: #166534; }
    .status-indicator[data-status="REQUESTED"] { background: #fef9c3; color: #854d0e; }

    .interview-details { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; background: #f8fafc; padding: 15px; border-radius: 12px; margin-bottom: 20px; }
    .detail-item { text-align: left; }
    .detail-item .label { display: block; font-size: 9px; font-weight: 800; color: var(--text-soft); margin-bottom: 3px; }
    .detail-item .val { font-size: 12px; font-weight: 700; color: var(--text-dark); }

    /* Actions */
    .btn-group { display: flex; gap: 10px; margin-top: 15px; }
    .btn-group-vertical { display: flex; flex-direction: column; gap: 10px; }
    .btn { padding: 10px 20px; border-radius: 8px; font-weight: 700; font-size: 13px; cursor: pointer; border: none; transition: 0.2s; }
    .btn-solid { background: var(--primary); color: white; }
    .btn-success { background: #22c55e; color: white; }
    .btn-outline-danger { background: white; border: 1px solid #fee2e2; color: #ef4444; }
    .btn-danger-soft { background: #fee2e2; color: #991b1b; }
    
    .hint-text { font-size: 12px; color: var(--text-soft); margin: 0; }
    .final-result-box { padding: 10px; text-align: center; border-radius: 8px; }
    .res-tag { font-size: 13px; font-weight: 800; }
    .res-pass { color: #166534; }
    .res-fail { color: #991b1b; }
  `]
})
export class InterviewerDashboardComponent implements OnInit, OnDestroy {
  applications: any[] = [];
  private intervalId: any;
  employeeMap: Record<number,string> = {};

  constructor(public auth: AuthService, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    if (!this.auth.user || this.auth.user.role !== 'INTERVIEWER') { this.router.navigate(['/']); return; }
    this.fetchApplications();
    this.fetchEmployees();
    this.intervalId = setInterval(() => this.fetchApplications(), 5000);
  }

  ngOnDestroy() { if (this.intervalId) clearInterval(this.intervalId); }

  logout() { this.auth.logout(); this.router.navigate(['/']); }

  async fetchApplications() { 
    try { 
      const id = this.auth.user?.interviewerId; 
      const res = await this.http.get<any[]>(`http://localhost:8080/api/applications/interviewer/${id}`).toPromise(); 
      this.applications = res || [];
    } catch (err) { console.error(err); } 
  }

  async fetchEmployees() {
    try {
      const list: any[] = await this.http.get<any[]>('http://localhost:8080/api/employees').toPromise();
      this.employeeMap = {};
      (list || []).forEach(e => { 
        const id = e.id ?? e.interviewerId ?? e.employeeId; 
        this.employeeMap[id] = e.name ?? e.interviewerName ?? e.fullName ?? e.email; 
      });
    } catch (err) { console.error('Failed to load employees', err); }
  }

  async respondToRequest(applicationId: any, status: string) {
    const interviewerId = this.auth.user?.interviewerId;
    try {
      await this.http.post('http://localhost:8080/api/applications/interviewer-response', null, { 
        params: { applicationId, status, interviewerId }, 
        responseType: 'text' 
      }).toPromise();
      this.fetchApplications();
    } catch (err) { alert('Error responding to request'); }
  }

  async updateResult(applicationId: any, result: string) {
    const interviewerId = this.auth.user?.interviewerId;
    try {
      // Logic fix: Try standard params first
      await this.http.post('http://localhost:8080/api/applications/update-interview-result', null, { 
        params: { applicationId, result, interviewerId }, 
        responseType: 'text' 
      }).toPromise();
      
      this.fetchApplications();
      alert('Interview result updated & candidate notified');
    } catch (err) {
      console.warn("Primary result update failed, attempting alternate mapping...");
      try {
        // Fallback: Some backends prefer simple "PASSED" or "FAILED"
        const simplifiedResult = result.includes('PASSED') ? 'PASSED' : 'FAILED';
        await this.http.post('http://localhost:8080/api/applications/update-interview-result', null, { 
          params: { applicationId, result: simplifiedResult, interviewerId }, 
          responseType: 'text' 
        }).toPromise();
        this.fetchApplications();
        alert('Interview result updated!');
      } catch (err2) {
        alert('Error updating result. Please check if the interview is already marked.');
      }
    }
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

  getLevel(app: any) { 
    const id = this.auth.user?.interviewerId; 
    return Number(id) === app.l1InterviewerId ? 'L1' : 'L2'; 
  }
  
  getInterviewerStatus(app: any) { 
    const id = this.auth.user?.interviewerId; 
    return Number(id) === app.l1InterviewerId ? app.l1InterviewerStatus : app.l2InterviewerStatus; 
  }
  
  getDate(app: any) { 
    const id = this.auth.user?.interviewerId; 
    return Number(id) === app.l1InterviewerId ? app.l1Date : app.l2Date; 
  }
  
  getTime(app: any) { 
    const id = this.auth.user?.interviewerId; 
    return Number(id) === app.l1InterviewerId ? app.l1Time : app.l2Time; 
  }
  
  getMode(app: any) { 
    const id = this.auth.user?.interviewerId; 
    return Number(id) === app.l1InterviewerId ? app.l1Mode : app.l2Mode; 
  }

  isResultDone(app: any) { 
    const level = this.getLevel(app); 
    return level === 'L1' ? (!!app.l1Result) : (!!app.l2Result); 
  }

  isPassed(app: any) {
    const level = this.getLevel(app);
    return level === 'L1' ? app.l1Result === 'PASSED' : app.l2Result === 'PASSED';
  }
}