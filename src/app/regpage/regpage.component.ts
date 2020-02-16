import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {
  membershipType: string;

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }


  member() {
    this.membershipType = 'member';
    this.router.navigate(['memberregister']);
    // this.router.navigate(['Registration']);
    // this.messageService.sendMessage(this.membershipType);
  }

  listener() {
    this.membershipType = 'listener';
    this.router.navigate(['listenerregister']);
    // this.router.navigate(['Registration']);
    // this.messageService.sendMessage(this.membershipType);
  }

  therapist() {
    this.membershipType = 'therapist';
    this.router.navigate(['therrapistregister']);
    // this.router.navigate(['Registration']);
    // this.messageService.sendMessage(this.membershipType);
  }



}
