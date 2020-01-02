import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../restservice.service';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit {
  show = false;
  email: string;
  password: string;

  constructor(public rservice: RestserviceService) { }

  ngOnInit() {
  }

  openModal(): void {
    this.show = true;
  }

  sendData(): void {
    this.rservice.getUserForLogin(this.email)
      .subscribe(response => {
        this.show = false;
      });
  }

  closeModal(): void {
    this.show = false;
  }
}
