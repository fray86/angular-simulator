import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import { Theme } from '../enums/Theme';
import { IThemeState } from './interfaces/IThemeState';
import { Preset } from '@primeuix/themes/types';


function getSavedTheme(): Theme {
  const currentValue: string | null = localStorage.getItem('themeState');
  if (!currentValue) {
    return Theme.AURA;
  } else {
    const savedState: IThemeState = JSON.parse(currentValue);
    return savedState.theme;
  }
}

function getThemePreset(theme:Theme): Preset {
  if (theme === Theme.AURA) {
    return Aura;
  } else if (theme === Theme.LARA) {
    return Lara;
  } else if (theme === Theme.NORA) {
    return Nora;
  } else {
    return Aura;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZoneChangeDetection(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: getThemePreset(getSavedTheme()),
        options: {
          darkModeSelector: '.my-app-dark' 
        }
      }
    })
  ]
};
