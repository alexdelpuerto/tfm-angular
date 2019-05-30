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
    return this.httpService.get(ApiEndpoint.GIFTS + '/' + eventId);
  }

  createGift(gift: Gifts): Observable<Gifts> {
    return this.httpService.messageCorrect('Regalo creado correctamente').post(ApiEndpoint.GIFTS, JSON.stringify(gift));
  }
}
