import { Injectable } from '@angular/core';
import {HttpService} from '../../../core/http.service';
import {Observable} from 'rxjs';
import {Gifts} from './gifts.model';
import {ApiEndpoint} from '../../shared/api-endpoint';

@Injectable()
export class GiftsService {

  constructor(private httpService: HttpService) {

  }

  readGifts(eventId: number): Observable<Gifts[]> {
    return this.httpService.get(ApiEndpoint.GIFT_EVENT + '/' + eventId);
  }

  create(gift: Gifts): Observable<Gifts> {
    return this.httpService.messageCorrect('Regalo creado correctamente').post(ApiEndpoint.GIFTS, JSON.stringify(gift));
  }

  readGift(giftId: number): Observable<Gifts> {
    return this.httpService.get(ApiEndpoint.GIFTS + '/' + giftId);
  }

  update(giftId: number, gift: Gifts): Observable<any> {
    return this.httpService.messageCorrect('Regalo editado').put(ApiEndpoint.GIFTS + '/' + giftId, JSON.stringify(gift));
  }

  delete(giftId: number): Observable<any> {
    return this.httpService.messageCorrect('Regalo borrado').delete(ApiEndpoint.GIFTS + '/' + giftId);
  }
}
