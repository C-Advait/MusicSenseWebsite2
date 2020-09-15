import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service'
import { HttpClient, HttpErrorResponse, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ LoginService ]
})
export class HeaderComponent implements OnInit {
  title = 'Test';
  constructor(private loginService: LoginService) { }
  private accessToken: any;

  ngOnInit(): void {
  }

  getAccessToken() {
    this.accessToken = this.loginService.loginRequest();
  }

  testFunction() {
    console.log("clicked Me!");
  }

  hardCode() {
    console.log("pressed");
    window.location.replace('https://accounts.spotify.com/authorize?client_id=b542a6a5da9c4516a9dfceae181a59bd&redirect_uri=http://localhost:4200/&scope=user-read-private%20user-read-email&response_type=token&state=123');
  }

}
