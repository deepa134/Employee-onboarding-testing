import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-online-test',
  template: `
  <div class="container">
    <div class="app-card" style="max-width:820px;margin:0 auto">
      <h2 style="margin-bottom:20px">Online Test</h2>
      <div *ngFor="let q of questions">
        <div style="margin-bottom:18px">
          <p><b>{{q.id}}. {{q.q}}</b></p>
          <label *ngFor="let opt of q.options" style="display:block;margin-bottom:5px">
            <input type="radio" [name]="'q-'+q.id" [value]="opt" [checked]="answers[q.id]===opt" (change)="selectAnswer(q.id,opt)" /> {{opt}}
          </label>
        </div>
      </div>
      <div class="card-actions">
        <button (click)="submitTest()" [disabled]="submitting" class="btn">{{submitting? 'Submitting...' : 'Submit Test'}}</button>
      </div>
    </div>
  </div>
  `
})
export class OnlineTestComponent {
  applicationId: string | null = null;
  answers: any = {};
  submitting = false;

  questions = [
    { id: 1, q: '2 + 3 = ?', options: ['4', '5', '6'], answer: '5' },
    { id: 2, q: 'Capital of India?', options: ['Delhi', 'Mumbai', 'Chennai'], answer: 'Delhi' },
    { id: 3, q: '5 * 6 = ?', options: ['30', '25', '20'], answer: '30' },
    { id: 4, q: 'Java is ?', options: ['Language', 'Database', 'Browser'], answer: 'Language' },
    { id: 5, q: 'HTML stands for?', options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Home Tool Markup Language'], answer: 'Hyper Text Markup Language' },
    { id: 6, q: '10 / 2 = ?', options: ['2', '5', '8'], answer: '5' },
    { id: 7, q: 'React is used for?', options: ['Frontend', 'Backend', 'Database'], answer: 'Frontend' },
    { id: 8, q: '15 - 5 = ?', options: ['5', '10', '15'], answer: '10' },
    { id: 9, q: 'Spring Boot is ?', options: ['Framework', 'IDE', 'Browser'], answer: 'Framework' },
    { id: 10, q: 'Which is OOP?', options: ['Java', 'HTML', 'CSS'], answer: 'Java' },
    { id: 11, q: 'Binary of 2?', options: ['10', '11', '01'], answer: '10' },
    { id: 12, q: 'Largest planet?', options: ['Earth', 'Mars', 'Jupiter'], answer: 'Jupiter' },
    { id: 13, q: 'Which is database?', options: ['MySQL', 'React', 'Node'], answer: 'MySQL' },
    { id: 14, q: '3^2 = ?', options: ['6', '9', '12'], answer: '9' },
    { id: 15, q: 'CSS is used for?', options: ['Styling', 'Logic', 'Database'], answer: 'Styling' }
  ];

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.applicationId = this.route.snapshot.paramMap.get('applicationId');
  }

  selectAnswer(qid: number, opt: string) { this.answers[qid] = opt; }

  async submitTest() {
    if (this.submitting) return;
    if (Object.keys(this.answers).length < this.questions.length) { alert('Please answer all 15 questions before submitting.'); return; }
    let score = 0; this.questions.forEach(q => { if (this.answers[q.id] === q.answer) score++; });
    try {
      this.submitting = true;
      await this.http.post('http://localhost:8080/api/applications/submit-test', null, { params: { applicationId: this.applicationId as any, score } as any }).toPromise();
      alert(`Test Submitted Successfully!\nScore: ${score}/15`);
      this.router.navigate(['/candidate/dashboard']);
    } catch (err) { alert('Error submitting test'); } finally { this.submitting = false; }
  }
}
