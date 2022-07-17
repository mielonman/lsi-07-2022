import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'primeng/table';
import { Columns } from 'src/app/models/columns.inteface';
import { Rates } from 'src/app/models/rates.interface';

@Component({
  selector: 'lsi-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyTableComponent {
  @Input() data: Rates[] | null;
  @Input() loading: boolean = false;

  columnsConfig: Columns[] = [
    { field: 'code', type: 'text', header: 'Symbol waluty' },
    { field: 'currency', type: 'text', header: 'Waluta' },
    { field: 'mid', type: 'numeric', header: 'Kurs waluty' },
  ];

  clear(table: Table): void {
    table.clear();
  }
}
