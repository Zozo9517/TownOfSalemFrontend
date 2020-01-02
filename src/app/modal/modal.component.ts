import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, EmailValidator} from '@angular/forms';
import { RestserviceService } from '../restservice.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  show = false;
  user: User = {
    name: '',
    pw: ''
  };
  email: string;
  password: string;

  constructor(public rservice: RestserviceService) { }

  ngOnInit() {
  }

  openModal(): void {
    this.show = true;
  }

  sendData(): void {
    this.user.name = this.email;
    this.user.pw = this.password;
    this.rservice.postProgramPage(this.user)
      .subscribe(response => {
        this.show = false;
      });
  }

  closeModal(): void {
    this.show = false;
  }
}
