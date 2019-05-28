import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {Request} from './request.model';
import {ApiEndpoint} from '../shared/api-endpoint';

@Injectable()
export class RequestsService {

  constructor(private httpService: HttpService) { }

  readAllRequests(username: string): Observable<Request[]> {
    return this.httpService.get(ApiEndpoint.REQUESTS + '/' + username);
  }
}
