import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable} from 'rxjs';
import { IThemeState } from './app/interfaces/IThemeState';
import { ColorMode } from "./enums/ColorMode";
import { Theme } from "./enums/Theme";
import { usePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  localStorageService: LocalStorageService = inject(LocalStorageService);

  readonly defaultState: IThemeState = {
    theme: Theme.AURA,
    colorMode: ColorMode.LIGHT
  };

  private themeSubject: BehaviorSubject<IThemeState> = new BehaviorSubject<IThemeState>(this.getInitalState());
  theme$: Observable<IThemeState> = this.themeSubject.asObservable();

  getInitalState(): IThemeState {
    const savedState: IThemeState | null = this.localStorageService.getValue<IThemeState>('themeState');
    if (!savedState) {
      return this.defaultState;
    }
    return savedState;
  }

  setTheme(newTheme: Theme): void {
    const currentState: IThemeState = this.getTheme();
    const updatedState: IThemeState = {...currentState, theme: newTheme};
    this.updateState(updatedState);
    this.applyState(updatedState);
  }

  setColor(newColorMode: ColorMode): void {
    const currentState: IThemeState = this.getTheme();
    const updatedState: IThemeState = {...currentState, colorMode: newColorMode};
    this.updateState(updatedState);
    this.applyState(updatedState);
  }

  updateState(state: IThemeState): void {
    this.themeSubject.next(state);
    this.localStorageService.setValue('themeState', state);
  }

  applyState(state: IThemeState): void {
    const mainElement: HTMLElement | null = document.querySelector('html');
    if (state.theme === Theme.AURA) {
      usePreset(Aura);
    } else if (state.theme === Theme.NORA) {
      usePreset(Nora);
    } else if (state.theme === Theme.LARA) {
      usePreset(Lara);
    }
    if (state.colorMode === ColorMode.DARK) {
      mainElement?.classList.add('my-app-dark');
    } else {
      mainElement?.classList.remove('my-app-dark');
    }
  }

  getTheme(): IThemeState {
      return this.themeSubject.value;
  }

}
