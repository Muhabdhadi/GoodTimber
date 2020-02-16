import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Patient } from '../../interfaces/patient';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-memberregister',
  templateUrl: './memberregister.component.html',
  styleUrls: ['./memberregister.component.css']
})
export class MemberregisterComponent implements OnInit {
  patienMember: Patient;
  registerMemberForm = new FormGroup({
    firstName: new FormControl('muhammad'),
    lastName: new FormControl('Abdelhadi'),
    userName: new FormControl('muhabdhadi'),
    password: new FormControl('123456789'),
    email: new FormControl('muhabdhadi@gmail.com'),
    gender: new FormControl('male'),
    membershipType: new FormControl(''),
  });
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signUp() {
    // tslint:disable-next-line: max-line-length
    this.authService.SignUp(this.registerMemberForm.value.email, this.registerMemberForm.value.password, 'patient', this.registerMemberForm.value);
  }

}
