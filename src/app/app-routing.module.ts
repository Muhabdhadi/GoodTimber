import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Components */
import { MemberregisterComponent } from './Registrations/memberregister/memberregister.component';
import { ListenerregisterComponent } from './Registrations/listenerregister/listenerregister.component';
import { TherapistregisterComponent } from './Registrations/therapistregister/therapistregister.component';
import { IntropageComponent } from './intropage/intropage.component';
import { DPatientsComponent } from './dashboards/d-patients/d-patients.component';
import { RegpageComponent } from './regpage/regpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PatientLoginComponent } from './logins/patient-login/patient-login.component';
import { DTherapistsComponent } from './dashboards/d-therapists/d-therapists.component';
import { DListenersComponent } from './dashboards/d-listeners/d-listeners.component';
import { TherapistLoginComponent } from './logins/therapist-login/therapist-login.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {path: '', component: IntropageComponent},
  /* Regis pages */
  { path: 'memberregister', component: MemberregisterComponent},
  {path: 'listenerregister', component: ListenerregisterComponent},
  {path: 'therrapistregister', component: TherapistregisterComponent },
  /* regi % login intro pages */
  {path: 'regi-page', component: RegpageComponent},
  {path: 'login-page', component: LoginpageComponent},
  /* Login pages */
  {path: 'patient-login', component: PatientLoginComponent},
  {path: 'therapist-login', component: TherapistLoginComponent},
  /* Dashboard pages */
  {path: 'd-patients', component: DPatientsComponent},
  {path: 'd-therapists', component: DTherapistsComponent},
  {path: 'd-listeners', component: DListenersComponent},

  {path: 'verify-email-address', component: VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
