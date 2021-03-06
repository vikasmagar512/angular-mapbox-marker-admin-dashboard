import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { SessionService } from './session.service';
import { Observable } from 'rxjs/index';
import 'rxjs-compat/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs-compat/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ApiService {

  constructor(private http: HttpClient,
              private session: SessionService) { }
  // personalNumber= '198112289874') {
  public signIn(payload) {
    // http://192.168.10.224:8081/bankidauth
    // const url ='http://192.168.10.224:8081/'+'bankidauth'
    let url = API_URL+'/users/signin'
    // let url = '/backend/users/signin'
    payload = {
      username:'demo@demo.com', password:'demo'
    }
    if(payload['pno']){
      // if(payload['personalNo']){
      //   url ='http://localhost:8081/api/authenticate'
      //   url =API_URL+'/backend/authenticate'
      url ='/backend/authenticate'
      // url ='http://192.168.10.224:8081/'+'bankidauth'
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(url)
    return this.http
      .post(url, payload)
      //.map(response => {
      // console.log(response)
      //return response})
      .catch(this.handleError);
    /*return this.http
      // .get('/backend/helloSfs',httpOptions)
      .get('/backend/getAllAssetDetails',httpOptions)
      //.map(response => {
      // console.log(response)
      //return response})
      .catch(this.handleError);*/
  }

  public getLoggedInUserData() {
    // const options = this.getRequestOptions();
    // console.log('options is ',options)
    return this.http
      .get(API_URL + '/users/me')
  }
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
