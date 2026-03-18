import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { OnboardingFormComponent } from './pages/onboarding-form/onboarding-form.component';
import { CandidateDashboardComponent } from './pages/candidate/candidate-dashboard.component';
import { OnlineTestComponent } from './pages/candidate/online-test.component';
import { InterviewerDashboardComponent } from './pages/interviewer/interviewer-dashboard.component';
import { HrDashboardComponent } from './pages/hr/hr-dashboard.component';
import { HrOnboardingDetailsComponent } from './pages/hr/hr-onboarding-details.component';
import { HrCreateEmployeeComponent } from './pages/hr/hr-create-employee.component';
import { HrEmployeeDetailsComponent } from './pages/hr/hr-employee-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OnboardingFormComponent,
    CandidateDashboardComponent,
    OnlineTestComponent,
    InterviewerDashboardComponent,
    HrDashboardComponent,
    HrOnboardingDetailsComponent,
    HrCreateEmployeeComponent,
    HrEmployeeDetailsComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
