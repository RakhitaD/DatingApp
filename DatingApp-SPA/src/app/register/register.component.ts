import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegisterMode = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe( next => {
      this.alertify.success('User registered successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegisterMode.emit(false);
    this.alertify.message('Registration cancelled');
  }

}
