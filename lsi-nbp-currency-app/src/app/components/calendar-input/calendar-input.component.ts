import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'lsi-calendar-input',
  templateUrl: './calendar-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarInputComponent implements OnInit {
  dateForm: FormGroup<{ date: FormControl<string> }>;
  today = new Date();
  nbpMinDate = new Date('2002-01-02');
  private dateRegEx = /^\d{4}-\d{1,2}-\d{1,2}$/;

  get dateCtrl(): FormControl<string> {
    return this.dateForm.controls.date;
  }

  constructor(private dateService: DateService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.dateCtrl.valueChanges.subscribe((date) => {
      if (this.dateCtrl.valid) {
        this.dateService.dateChanged(date);
      }
    });
  }

  createForm(): void {
    this.dateForm = this.fb.nonNullable.group({
      date: ['', [Validators.required, Validators.pattern(this.dateRegEx)]],
    });
  }
}
