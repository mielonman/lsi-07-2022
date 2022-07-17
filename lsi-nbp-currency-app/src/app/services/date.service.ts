import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dateSubject = new Subject<string>;

  dateChanged$(): Observable<string> {
    return this.dateSubject.asObservable();
  }

  dateChanged(dateStr: string): void {
    this.dateSubject.next((dateStr));
  }
}
