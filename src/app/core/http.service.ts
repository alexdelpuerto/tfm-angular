import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Error} from './error.model';
import {UserRegister} from '../home/users/user-register.model';

@Injectable()
export class HttpService {
  static API_END_POINT = environment.API;
  static NOT_FOUND = 404;
  static BAD_REQUEST = 400;

  private headers: HttpHeaders;
  private params: HttpParams;
  private responseType: string;
  private correctNotification = undefined;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.resetOptions();
  }

  login(endPoint: string, user: Object): Observable<any> {
    return this.http.post(HttpService.API_END_POINT + endPoint, user, this.createOptions()).pipe(
      map(response => this.extractData(response, user)
      ), catchError(error => {
        return this.handleError(error);
      })
    );
  }

  register(endPoint: string, user: Object): Observable<any> {
    return this.http.post(HttpService.API_END_POINT + endPoint, user, this.createOptions()).pipe(
      map(response => this.extractData(response)
      ), catchError(error => {
        return this.handleError(error);
      })
    );
  }

  private createOptions(): any {
    const options: any = {
      headers: this.headers,
      params: this.params,
      responseType: this.responseType,
      observe: 'response'
    };
    return options;
  }

  private extractData(response, user?): any {
    if (this.correctNotification) {
      this.snackBar.open(this.correctNotification, '', {
        duration: 2000
      });
      this.correctNotification = undefined;
    }
    const contentType = response.headers.get('content-type');
    if (contentType) {
      if (contentType.indexOf('application/json') !== -1) {
        sessionStorage.setItem('currentUser', JSON.parse(user).username);
        return response.body;
      }
    } else {
      return response;
    }
  }

  private handleError(response): any {
    let error: Error;
    // try {
    if (response.status === HttpService.NOT_FOUND) {
        error = {error: 'Not Found', message: response.error.message, path: ''};
      } else if (response.status === HttpService.BAD_REQUEST) {
        error = {error: 'Bad Request', message: response.error.message, path: ''};
      } else {
        error = response.error;
      }
    this.snackBar.open(error.error + ': ' + error.message, 'Error', {
      duration: 5000
    });
    return throwError(error);
    /*} catch (e) {
      this.snackBar.open('No hay respuesta del servidor', 'Error', {
      duration: 5000
    });
      return throwError(response.error);
    }*/
  }

  private resetOptions() {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
  }

  messageCorrect(notification = 'Correcto'): HttpService {
    this.correctNotification = notification;
    return this;
  }
}
