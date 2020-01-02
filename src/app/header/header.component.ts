import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { RestserviceService } from '../restservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';
import { LoginmodalComponent } from '../loginmodal/loginmodal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(ModalComponent, { static: true })
  modal: ModalComponent;
  @ViewChild(LoginmodalComponent, { static: true })
  loginmodal: LoginmodalComponent;

  constructor(public rservice: RestserviceService) { }


  ngOnInit() {
  }

  register(): void {
    console.log("asd");
    console.log(this.modal);
    this.modal.openModal();
  }

  login(): void {
    console.log("asd");
    console.log(this.loginmodal);
    this.loginmodal.openModal();
  }
}
