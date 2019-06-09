import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {Request} from './request.model';
import {ApiEndpoint} from '../shared/api-endpoint';

@Injectable()
export class RequestsService {

  constructor(private httpService: HttpService) { }

  readRequests(username: string): Observable<Request[]> {
    return this.httpService.get(ApiEndpoint.REQUESTS + '/' + username);
  }

  create(request: Request): Observable<any> {
    return this.httpService.messageCorrect('Solicitud enviada').post(ApiEndpoint.REQUESTS, JSON.stringify(request));
  }

  accept(request: Request): Observable<any> {
    return this.httpService.messageCorrect('Solicitud aceptada').post(ApiEndpoint.REQUESTS + ApiEndpoint.ACCEPT, JSON.stringify(request));
  }
}
