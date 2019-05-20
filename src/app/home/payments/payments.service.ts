import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {ApiEndpoint} from '../shared/api-endpoint';
import {Observable} from 'rxjs';

@Injectable()
export class PaymentsService {

  constructor(private httpService: HttpService) { }

  create(json: string): Observable<any> {
    return this.httpService.messageCorrect('Regalo comprado').post(ApiEndpoint.PAYMENTS, json);
  }
}
