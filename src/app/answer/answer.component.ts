import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestserviceService } from '../restservice.service';
import { TouchSequence } from 'selenium-webdriver';
import { MatRadioButton } from '@angular/material';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit {
  role: string;
  constructor(public rservice: RestserviceService) {
  }
  private usersUrl: string;
  request: string;

  ngOnInit() {
  }
  setRole(name): void {
    this.role = name;
  }
  onSendButtonClick(): void {
    console.log(this.role);
  }
}
