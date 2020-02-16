import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntropageComponent } from './intropage/intropage.component';
import { MemberregisterComponent } from './Registrations/memberregister/memberregister.component';
import { ListenerregisterComponent } from './Registrations/listenerregister/listenerregister.component';
import { TherapistregisterComponent } from './Registrations/therapistregister/therapistregister.component';

// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';



// Services
import { AuthService } from './shared/services/auth.service';
import { DPatientsComponent } from './dashboards/d-patients/d-patients.component';
import { RegpageComponent } from './regpage/regpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PatientLoginComponent } from './logins/patient-login/patient-login.component';
import { DTherapistsComponent } from './dashboards/d-therapists/d-therapists.component';
import { DListenersComponent } from './dashboards/d-listeners/d-listeners.component';
import { ListenerLoginComponent } from './logins/listener-login/listener-login.component';
import { TherapistLoginComponent } from './logins/therapist-login/therapist-login.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    IntropageComponent,
    MemberregisterComponent,
    ListenerregisterComponent,
    TherapistregisterComponent,
    DPatientsComponent,
    RegpageComponent,
    LoginpageComponent,
    PatientLoginComponent,
    DTherapistsComponent,
    DListenersComponent,
    ListenerLoginComponent,
    TherapistLoginComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
