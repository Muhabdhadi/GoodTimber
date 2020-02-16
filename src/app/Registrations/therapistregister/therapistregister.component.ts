import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-therapistregister',
  templateUrl: './therapistregister.component.html',
  styleUrls: ['./therapistregister.component.css']
})
export class TherapistregisterComponent implements OnInit {
  therapistForm = new FormGroup({
    firstName: new FormControl('muhammad'),
    lastName: new FormControl('Abdelhadi'),
    userName: new FormControl('muhabdhadi'),
    password: new FormControl('123456789'),
    email: new FormControl('muhabdhadi@gmail.com'),
    gender: new FormControl('male'),
    membershipType: new FormControl(''),
    phoneNumber: new FormControl(''),
    affiliation: new FormControl(''),
    linkedin: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.SignUp(this.therapistForm.value.email, this.therapistForm.value.password, 'therapist', this.therapistForm.value);
  }
  getPatients() {
    this.authService.getPatients().subscribe( item => {
      console.log(item);
    });
  }

}
