import { Component, inject } from '@angular/core';
import { Mode } from '../../../enums/Mode'; 
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigation } from '../../interfaces/INavigation';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../theme.service';
import { faSun, faMoon, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ColorMode } from '../../../enums/ColorMode';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Theme } from '../../../enums/Theme';
import { IThemeOption } from '../../interfaces/IThemeOption';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IThemeState } from '../../interfaces/IThemeState';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, SelectButtonModule, ToggleSwitchModule, FormsModule, FontAwesomeModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent  {

  themeService: ThemeService = inject(ThemeService);

  count: number = 0;
  modeType: typeof Mode = Mode; 
  currentMode: Mode = Mode.DATE;
  currentTime!: string;
  companyName: string = 'РУМТИБЕТ'; 
  faSun: IconDefinition = faSun;
  faMoon: IconDefinition = faMoon;
  theme$: Observable<IThemeState> = this.themeService.theme$;
  colorMode: typeof ColorMode = ColorMode;

  themeOptions: IThemeOption[] = [
    { label: 'Aura', value: Theme.AURA },
    { label: 'Nora', value: Theme.NORA },
    { label: 'Lara', value: Theme.LARA }
  ];

  navigations: INavigation[] = [
    {
      name: 'Главная',
      link: '/'
    }, 
    { 
      name: 'Пользователи',
      link: '/users'
    }
  ];
  
  constructor() {
    setInterval(() => {
      const now: Date = new Date();
      this.currentTime = now.toLocaleString();
    }, 1000);
  }

  toggleMode(mode: Mode): void {
    this.currentMode = mode;
  }
  
  decrease(): void {
    if (this.count > 0) {
      this.count--;
    }
  }
  
  increase(): void {
    this.count++;
  }

  onColorModeChange(checked: boolean): void {
    if (checked) {
      this.themeService.setColor(ColorMode.DARK);
    } else {
      this.themeService.setColor(ColorMode.LIGHT);
    }
  }

  onThemeChange(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
  
}