import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {UserLogin} from './user-login.model';

@Injectable()
export class UserService {
  static END_POINT = '/users';

  constructor(private httpService: HttpService) { }

  login(user: UserLogin): Observable<any> {
    return this.httpService.login(UserService.END_POINT, JSON.stringify(user));
  }
}
