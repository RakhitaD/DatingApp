import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {
    const token = localStorage.getItem('token');
    if (token) {
      // this.authService.decodedToken = this.authService.jwtHelper.decodeToken(token);
      this.authService.decodeToken(token);
    }
  }


  ngOnInit() {
  }

  registerToggle(){
    this.registerMode = true;
  }

  cancelRegistrationMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
