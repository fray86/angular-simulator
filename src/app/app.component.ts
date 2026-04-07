import './training';
import { Component } from '@angular/core';
import { Colors } from '../enums/color';
import { Collection } from './collection';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  constructor() {
    this.saveLoginData();
    this.updateLoginCount();
  }
  
  isMainColor(color: Colors): boolean {
    const rgb = [Colors.RED, Colors.GREEN, Colors.BLUE];
    return rgb.includes(color);
  }

  saveLoginData(): void {
    const date = new Date().toISOString();
    localStorage.setItem('last-visit', date);
  }

  updateLoginCount(): void {
    let visits = parseInt(localStorage.getItem('visitCount') || '0');
    visits = visits + 1;
    localStorage.setItem('visitCount', visits.toString());
  }
}
