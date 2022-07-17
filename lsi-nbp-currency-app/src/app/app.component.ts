import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Rates } from './models/rates.interface';
import { ApiService } from './services/api.service';
import { DateService } from './services/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  data: Rates[];
  loading: boolean;
  private destroy$ = new Subject<void>;

  constructor(
    private apiService: ApiService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.getInitialData();

    this.dateService.dateChanged$().subscribe((date: string) => {
      this.getDataByDate(date);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getInitialData(): void {
    this.apiService.getRates().subscribe((data) => {
      this.data = data;
    });
  }

  getDataByDate(date: string): void {
    this.loading = true;
    this.apiService.getRatesByDate(date)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading = false;
        })
      ).subscribe((data) => {
        this.data = data
      })
  }
}
