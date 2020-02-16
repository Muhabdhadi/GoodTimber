import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-therapist-login',
  templateUrl: './therapist-login.component.html',
  styleUrls: ['./therapist-login.component.css']
})
export class TherapistLoginComponent implements OnInit {
  therapistLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.SignIn(this.therapistLogin.value.email, this.therapistLogin.value.password, 'therapist');
  }

}
