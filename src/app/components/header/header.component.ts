import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Mode } from '../../../enums/Mode'; 
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavigation } from '../../interfaces/INavigation';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../theme.service';
import { tap } from 'rxjs';
import { faSun, faMoon, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ColorMode } from '../../../enums/ColorMode';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Theme } from '../../../enums/Theme';
import { IThemeOption } from '../../interfaces/IThemeOption';
import { IThemeState } from '../../interfaces/IThemeState';



@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, SelectButtonModule, ToggleSwitchModule, FormsModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  themeService: ThemeService = inject(ThemeService);
  destroyRef: DestroyRef = inject(DestroyRef)

  count: number = 0;
  modeType: typeof Mode = Mode; 
  currentMode: Mode = Mode.DATE;
  currentTime!: string;
  companyName: string = 'РУМТИБЕТ';
  checked: boolean = false; 
  faSun: IconDefinition = faSun;
  faMoon: IconDefinition = faMoon;
  selectedTheme: Theme = Theme.AURA;

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
  ]
  
  constructor() {
    setInterval(() => {
      const now: Date = new Date();
      this.currentTime = now.toLocaleString();
    }, 1000);
  }

  ngOnInit(): void {
    this.themeService.theme$.pipe(
      tap((value: IThemeState) => {
        this.checked = value.colorMode === ColorMode.DARK;
        this.selectedTheme = value.theme;
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
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