import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {UserLogin} from './user-login.model';
import {ApiEndpoint} from '../shared/api-endpoint';
import {UserRegister} from './user-register.model';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) { }

  login(user: UserLogin): Observable<any> {
    return this.httpService.messageCorrect('Bienvenido').login(ApiEndpoint.USERS + ApiEndpoint.LOGIN, JSON.stringify(user));
  }

  register(user: UserRegister): Observable<any> {
    return this.httpService.messageCorrect('Usuario registrado').register(ApiEndpoint.USERS, JSON.stringify(user));
  }
}
