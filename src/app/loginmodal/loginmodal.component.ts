import { Component, OnInit } from '@angular/core';
import { RestserviceService } from '../restservice.service';
import { parseWebDriverCommand } from 'blocking-proxy/built/lib/webdriver_commands';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit {
  show = false;
  email: string;
  password: string;
  user: User;
  constructor(public rservice: RestserviceService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  openModal(): void {
    this.show = true;
  }

  sendData(): void {
    this.user = {
      name : this.email,
      pw : this.password
    };
    console.log(this.user);
    this.rservice.getUserForLogin(this.user)
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
        this.show = false;
      });
  }

  closeModal(): void {
    this.show = false;
  }
}
