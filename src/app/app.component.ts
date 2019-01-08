import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private afAuth: AngularFireAuth,
    private loginService: LoginService
  ) {  }
  
  ngOnInit() {
 
  }
}
