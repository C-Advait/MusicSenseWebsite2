import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  accessToken: any;
  constructor(private httpClient: HttpClient) { }

  loginRequest() {
    console.log("inside");
    let params = new HttpParams();
    let returnStatus: any;
    params.append("client_id", 'b542a6a5da9c4516a9dfceae181a59bd');
    params.append("response_type", 'token');
    params.append("redirect_uri", 'http://localhost:4200/');
    params.append("scope", 'user-top-read playlist-read-private user-library-read');
    params.append("show_dialog", 'true');
    returnStatus = this.httpClient.get("'https://accounts.spotify.com/authorize?client_id=b542a6a5da9c4516a9dfceae181a59bd&redirect_uri=http://localhost:4200/&scope=user-read-private%20user-read-email&response_type=token&state=123");
    console.log("returnStatus is: ", returnStatus);
    return returnStatus;
  }

  getAccessToken() {
    this.accessToken = this.loginRequest();
  }

}
