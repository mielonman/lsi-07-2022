import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme } from 'src/app/models/theme.type';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'lsi-theme-selection',
  templateUrl: './theme-selection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSelectionComponent {
  theme: Theme = 'light';
  themeOptions: {label: string; value: Theme}[] = [
    {label: 'Ciemny', value: 'dark'},
    {label: 'Jasny', value: 'light'}
  ];

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}
