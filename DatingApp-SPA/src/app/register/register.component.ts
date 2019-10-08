import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegisterMode = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe( next =>{
      console.log('registered successfully');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegisterMode.emit(false);
    console.log('cancelled');
  }

}
