import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'lsi-clear-button',
  templateUrl: './clear-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClearButtonComponent {
  @Output() onClick = new EventEmitter<void>();
}
