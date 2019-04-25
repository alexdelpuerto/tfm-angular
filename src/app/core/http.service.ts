import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Error} from './error.model';

@Injectable()
export class HttpService {
  static API_END_POINT = environment.API;
  static NOT_FOUND = 404;

  private headers: HttpHeaders;
  private params: HttpParams;
  private responseType: string;
  private correct = undefined;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.resetOptions();
  }

  login(endPoint: string, user?: Object): Observable<any> {
    return this.http.post(HttpService.API_END_POINT + endPoint, user, this.createOptions()).pipe(
      map(response => this.extractData(response, user)
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

  private extractData(response, user): any {
    if (this.correct) {
      this.snackBar.open(this.correct, '', {
        duration: 2000
      });
      this.correct = undefined;
    }
    const contentType = response.headers.get('content-type');
    if (contentType) {
      if (contentType.indexOf('application/json') !== -1) {
        localStorage.setItem('currentUser', JSON.parse(user).name);
        return response.body; // with 'text': JSON.parse(response.body);
      }
    } else {
      return response;
    }
  }

  private handleError(response): any {
    let error: Error;
    try {
      if (response.status === HttpService.NOT_FOUND) {
        error = {error: 'Not Found', message: response.error.message, path: ''};
      } else {
        error = response.error;
      }
      this.snackBar.open(error.error + ': ' + error.message, 'Error', {
      duration: 5000
    });
      return throwError(error);
    } catch (e) {
      this.snackBar.open('No hay respuesta del servidor', 'Error', {
      duration: 5000
    });
      return throwError(response.error);
    }
  }

  private resetOptions() {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
  }
}
