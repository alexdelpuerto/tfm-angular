import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {UserLogin} from './user-login.model';
import {ApiEndpoint} from '../shared/api-endpoint';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) { }

  login(user: UserLogin): Observable<any> {
    return this.httpService.login(ApiEndpoint.USERS + ApiEndpoint.LOGIN, JSON.stringify(user));
  }
}
