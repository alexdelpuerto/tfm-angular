import { Injectable } from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable} from 'rxjs';
import {Events} from './events.model';
import {ApiEndpoint} from '../shared/api-endpoint';

@Injectable()
export class EventsService {

  constructor(private httpService: HttpService) {
  }

  readAll(userId: number): Observable<Events[]> {
    return this.httpService.get(ApiEndpoint.EVENTS + '/' + userId);
  }
}
