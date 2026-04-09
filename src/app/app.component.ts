import './training';
import { Component } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from './collection';

interface IUser {
  id: number;
  name: string;
}

interface IProduct {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  
  public companyName: string = 'РУМТИБЕТ';

  constructor() {
    this.saveVisitDate();
    this.updateLoginCount();
  }
  
  isMainColor(color: Color): boolean {
    const rgb: string[] = [Color.RED, Color.GREEN, Color.BLUE];
    return rgb.includes(color);
  }

  private saveVisitDate(): void {
    const date: string = new Date().toISOString();
    localStorage.setItem('last-visit', date);
  }

  private updateLoginCount(): void {
    let visits: number = parseInt(localStorage.getItem('visit-count') || '0');
    visits = visits + 1;
    localStorage.setItem('visit-count', visits.toString());
  }
  
  userList: IUser[] = [
    { id: 1, name: "Max" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Nikita"},
  ];

  productList: IProduct[] = [
    { id: 101, title: "Iphone" },
    { id: 102, title: "Sony Ericson" },
    { id: 103, title: "Nokia" }
  ];

  userCollection = new Collection<IUser>(this.userList)

}



