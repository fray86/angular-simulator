import './training';
import { Component } from '@angular/core';
import { Color } from '../enums/color';
import { Collection } from './collection';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  
  public companyName: string = 'РУМТИБЕТ';

  constructor() {
    this.saveLoginData();
    this.updateLoginCount();
  }
  
  isMainColor(color: Color): boolean {
    const rgb: string[] = [Color.RED, Color.GREEN, Color.BLUE];
    return rgb.includes(color);
  }

  private saveLoginData(): void {
    const date: string = new Date().toISOString();
    localStorage.setItem('last-visit', date);
  }

  private updateLoginCount(): void {
    let visits: number = parseInt(localStorage.getItem('visit-count') || '0');
    visits = visits + 1;
    localStorage.setItem('visit-count', visits.toString());
  }
}
