import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, map, Observable, of } from 'rxjs';
import { Rates, RatesResponse } from '../models/rates.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.nbp.pl/api/exchangerates/tables/A/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getRates(): Observable<Rates[]> {
    return this.http.get<RatesResponse[]>(`${this.baseUrl}?format=json`).pipe(
      map((res) => res[0].rates),
      catchError((error) => {
        this.notifyError(error);
        return of([]);
      })
    );
  }

  getRatesByDate(date: string): Observable<Rates[]> {
    return this.http
      .get<RatesResponse[]>(`${this.baseUrl}${date}/?format=json`)
      .pipe(
        map((res) => res[0].rates),
        catchError((error) => {
          this.notifyError(error);
          return of([]);
        })
      );
  }

  notifyError(error: HttpErrorResponse): void {
    this.messageService.add({
      severity: 'error',
      summary: `Status: ${error.status}`,
      detail: error.statusText,
    });
  }
}
