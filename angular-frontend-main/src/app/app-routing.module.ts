import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HrDashboardComponent } from './pages/hr/hr-dashboard.component';
import { CandidateDashboardComponent } from './pages/candidate/candidate-dashboard.component';
import { OnlineTestComponent } from './pages/candidate/online-test.component';
import { InterviewerDashboardComponent } from './pages/interviewer/interviewer-dashboard.component';
import { OnboardingFormComponent } from './pages/onboarding-form/onboarding-form.component';
import { HrOnboardingDetailsComponent } from './pages/hr/hr-onboarding-details.component';
import { HrCreateEmployeeComponent } from './pages/hr/hr-create-employee.component';
import { HrEmployeeDetailsComponent } from './pages/hr/hr-employee-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { VerifyComponent } from './components/verify/verify.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent },

  { path: 'hr/dashboard', component: HrDashboardComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  { path: 'candidate/dashboard', component: CandidateDashboardComponent, canActivate: [AuthGuard], data: { role: 'CANDIDATE' } },
  { path: 'candidate/test/:applicationId', component: OnlineTestComponent, canActivate: [AuthGuard], data: { role: 'CANDIDATE' } },
  { path: 'interviewer/:id', component: InterviewerDashboardComponent, canActivate: [AuthGuard], data: { role: 'INTERVIEWER' } },
  { path: 'onboarding', component: OnboardingFormComponent, canActivate: [AuthGuard], data: { role: 'CANDIDATE' } },
  { path: 'hr/onboarding/:email', component: HrOnboardingDetailsComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  { path: 'hr/create-employee/:email', component: HrCreateEmployeeComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  { path: 'hr/employee/:email', component: HrEmployeeDetailsComponent, canActivate: [AuthGuard], data: { role: 'HR' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
