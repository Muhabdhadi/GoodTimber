import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-intropage',
  templateUrl: './intropage.component.html',
  styleUrls: ['./intropage.component.css']
})
export class IntropageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }




}
