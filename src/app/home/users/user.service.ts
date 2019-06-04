import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {UserLogin} from './user-login.model';
import {ApiEndpoint} from '../shared/api-endpoint';
import {UserRegister} from './user-register.model';
import {Friends} from '../friends/friends.model';
import {MembersAdd} from '../events/members-dialog/members-add.model';

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) { }

  login(user: UserLogin): Observable<any> {
    return this.httpService.messageCorrect('Bienvenido').login(ApiEndpoint.USERS + ApiEndpoint.LOGIN, JSON.stringify(user));
  }

  register(user: UserRegister): Observable<any> {
    return this.httpService.messageCorrect('Usuario registrado').register(ApiEndpoint.USERS, JSON.stringify(user));
  }

  readFriends(username: string): Observable<Friends[]> {
    return this.httpService.get(ApiEndpoint.USERS + ApiEndpoint.FRIENDS + '/' + username);
  }

  readUsers(userSearch: string): Observable<Friends[]> {
    return this.httpService.get(ApiEndpoint.USERS + ApiEndpoint.SEARCH + '/' + userSearch);
  }

  readUsersEvent(eventId: number): Observable<Friends[]> {
    return this.httpService.get(ApiEndpoint.USERS + '/' + eventId);
  }

  addUser(eventId: number, membersAdd: MembersAdd): Observable<any> {
    return this.httpService.messageCorrect('Usuario añadido al evento').put(ApiEndpoint.USERS + '/' + eventId,
      JSON.stringify(membersAdd));
  }
}
