import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {ApiEndpoint} from '../shared/api-endpoint';
import {Observable} from 'rxjs';
import {PaymentsCol} from './paymentsCol.model';
import {Payments} from './payments.model';

@Injectable()
export class PaymentsService {

  constructor(private httpService: HttpService) { }

  create(payment: Payments): Observable<any> {
    return this.httpService.messageCorrect('Regalo comprado').post(ApiEndpoint.PAYMENTS, JSON.stringify(payment));
  }

  readCollections(username: string): Observable<PaymentsCol[]> {
    return this.httpService.get(ApiEndpoint.PAYMENTS_COL + '/' + username);
  }


  readPayments(username: string): Observable<Payments[]> {
    return this.httpService.get(ApiEndpoint.PAYMENTS + '/' + username);
  }

  delete(paymentId: number): Observable<any> {
    return this.httpService.messageCorrect('Pago borrado').delete(ApiEndpoint.PAYMENTS + '/' + paymentId);
  }
}
