import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { RestserviceService } from '../restservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';
import { LoginmodalComponent } from '../loginmodal/loginmodal.component';
import { CookieService } from 'ngx-cookie-service';
import { stringify } from 'querystring';
import * as jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  cookie: string;
  decodedjwt: JWTuser;
  regist = true;
  log = true;
  user = false;
  username: string;

  @ViewChild(ModalComponent, { static: true })
  modal: ModalComponent;
  @ViewChild(LoginmodalComponent, { static: true })
  loginmodal: LoginmodalComponent;


  constructor(public rservice: RestserviceService, public cookieService: CookieService, private toastr: ToastrService) { }


  ngOnInit() {
    this.cookie = this.cookieService.get('sesstoken');
    if (this.cookie !== '') {
      this.decodedjwt = jwt_decode(this.cookie);
      this.regist = false;
      this.log = false;
      this.user = true;
      this.username = this.decodedjwt.sub;
  }
  }

  register(): void {
    this.modal.openModal();
  }

  login(): void {
    this.loginmodal.openModal();
  }
  logout(): void {
    this.cookieService.delete('sesstoken');
    location.reload();
  }
}
