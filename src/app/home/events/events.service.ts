import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {Events} from './events.model';
import {ApiEndpoint} from '../shared/api-endpoint';

@Injectable()
export class EventsService {

  constructor(private httpService: HttpService) {
  }

  readEvents(userId: number): Observable<Events[]> {
    return this.httpService.get(ApiEndpoint.EVENT_USER + '/' + userId);
  }

  create(event: Events): Observable<Events> {
    return this.httpService.messageCorrect('Evento creado correctamente').post(ApiEndpoint.EVENTS, JSON.stringify(event));
  }

  readEvent(eventId: number): Observable<Events> {
    return this.httpService.get(ApiEndpoint.EVENTS + '/' + eventId);
  }

  update(eventId: number, event: Events): Observable<any> {
    return this.httpService.messageCorrect('Evento editado').put(ApiEndpoint.EVENTS + '/' + eventId, JSON.stringify(event));
  }

  delete(eventId: number): Observable<any> {
    return this.httpService.messageCorrect('Evento borrado').delete(ApiEndpoint.EVENTS + '/' + eventId);
  }
}
