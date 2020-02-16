import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
patientLogin = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.SignIn(this.patientLogin.value.email, this.patientLogin.value.password, 'patient');
  }

}
