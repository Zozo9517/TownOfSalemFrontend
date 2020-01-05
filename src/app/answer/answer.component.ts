import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestserviceService } from '../restservice.service';
import { TouchSequence } from 'selenium-webdriver';
import { MatRadioButton } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent implements OnInit {
  role: Role = {
    name: '',
    role: ''
  };
  cookie: string;
  decodedjwt: JWTuser;
  constructor(public rservice: RestserviceService, public cookieService: CookieService, private toastr: ToastrService) {
  }
  private usersUrl: string;
  request: string;

  ngOnInit() {
  }
  setRole(name): void {
    console.log(name);
    this.cookie = this.cookieService.get('sesstoken');
    if (this.cookie !== '') {
      this.decodedjwt = jwt_decode(this.cookie);
      this.role.name = this.decodedjwt.sub;
      this.role.role = name;
    }
  }
  onSendButtonClick(): void {
    this.rservice.setRole(this.role)
      .subscribe(response => {
        if (response === 'Success') {
          this.toastr.success('Access gained', 'Success', {
            positionClass: 'toast-bottom-right'
          });
          location.reload();
        } else {
          this.toastr.warning(response, 'Error', {
            positionClass: 'toast-bottom-right'
          });
        }
      });
  }
}
