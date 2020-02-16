import { Injectable, NgZone } from '@angular/core';
import { Patient } from '../../interfaces/patient';
import { Therapist } from '../../interfaces/therapist';
import { auth, database } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // saved logged in user data
  /* To Get the generated firebase ID and assgin it to id property in patient class */
  patientCollection: AngularFirestoreCollection<Patient>; // patientCollection
  patients: Observable<Patient[]>; // property of type observable to hold all patient documents
  patienDoc: AngularFirestoreDocument<Patient>; // patient document

  /* To Get the generated firebase id of therapists ... */
  therapistCollection: AngularFirestoreCollection<Therapist>;
  therapists: Observable<Therapist[]>;
  therapistDoc: AngularFirestoreDocument<Therapist>;

  constructor(
    public afs: AngularFirestore, // inject firestore service
    public afAuth: AngularFireAuth, // inject firestore auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope waring
  ) {
    /* Saving user data in localStorage when logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
    /* Assign the generated id to patient classes*/
    this.patientCollection = this.afs.collection('patients');
    this.patients = this.patientCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Patient;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.therapistCollection = this.afs.collection('therapists');
    this.therapists = this.therapistCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Therapist;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  // Sign in with email and password
  SignIn(email, password, membershipType) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.ngZone.run(() => {
        if (membershipType === 'patient') {

          this.router.navigate(['d-patients']);

        } else if (membershipType === 'therapist') {

          this.router.navigate(['d-therapists']);

        } else if (membershipType === 'listener') {

          this.router.navigate(['d-listeners']);
        }
      });
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  // Sign Up with email and password
  SignUp(email, password, memberType, memberData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      /* Call the SendVerficationMail() function when new user sign up and return promise*/
      this.SendVerficationMail();
      if (memberType === 'patient') {
        this.SetPatientData(memberData);
      } else if (memberType === 'therapist') {
        this.SetTherapistData(memberData);
      }
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  SendVerficationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }

  // Sign in with google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }


  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
    }).catch((error) => {
      window.alert(error);
    });
  }

    /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with soical auth provider in firestore database
  using AngularFirestore + AngularFirestoreDocumentation*/
  SetPatientData(patient: Patient) {
    console.log('here in patient function');
    /* then add patient data */
    const patientData: Patient = {
      firstName: patient.firstName,
      lastName: patient.lastName,
      userName: patient.userName,
      gender: patient.gender,
      email: patient.email,
      password: patient.password,
      memberType: 'patient'
    };
    const patientCollection: AngularFirestoreCollection<Patient> =  this.afs.collection(`patients`);
    return patientCollection.add(patientData);
  }

  SetTherapistData(therapist: Therapist) {
    const therapistData: Therapist = {
      firstName: therapist.firstName,
      lastName: therapist.lastName,
      gender: therapist.gender,
      email: therapist.email,
      password: therapist.password,
      memberType: 'therapist',
      phoneNumber: therapist.phoneNumber,
      affiliation: therapist.affiliation,
      address: therapist.address,
      linkedin: therapist.linkedin,
      userName: therapist.userName
    };
    const therapistCollection: AngularFirestoreCollection<Therapist> = this.afs.collection('therapists');
    return therapistCollection.add(therapistData);
  }


  getPatients() {
    return this.therapists;
  }


}
