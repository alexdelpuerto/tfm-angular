import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {Events} from './events.model';
import {ApiEndpoint} from '../shared/api-endpoint';
import {Gifts} from './gifts/gifts.model';

@Injectable()
export class EventsService {

  constructor(private httpService: HttpService) {
  }

  readAll(userId: number): Observable<Events[]> {
    return this.httpService.get(ApiEndpoint.EVENTS + '/' + userId);
  }

  create(event: Events): Observable<Events> {
    return this.httpService.messageCorrect('Evento creado correctamente').post(ApiEndpoint.EVENTS, JSON.stringify(event));
  }

  readGifts(eventId: number): Observable<Gifts[]> {
    return this.httpService.get(ApiEndpoint.GIFTS + '/' + eventId);
  }
}
