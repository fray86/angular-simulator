import './training';
import { Component, numberAttribute } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from './collection';
import { Mode } from '../enums/Mode';
import { FormsModule } from '@angular/forms';
import { InputsType } from '../enums/InputsType'
import { IProduct } from './interfaces/IProduct';
import { IUser } from './interfaces/IUser';
import { IFeature } from './interfaces/IFeature';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  count: number = 0;
  readonly ModeType = Mode; 
  readonly InputType = InputsType;
  inputType: string = 'text';
  currentMode: Mode = Mode.Date;
  companyName: string = 'РУМТИБЕТ';
  currentTime: string = "";
  liveInput: string = "";
  isLoading: boolean = true;
  selectedLocation: string = "";
  selectedDate: string = "";
  selectedMembers: string = "";

  features: IFeature[] = [
    {
      id: 1,
      img: '/images/experienced-guide.svg',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      img: '/images/saved-tavel.svg',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      img: '/images/loyalti-price.svg',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    }
  ];

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
    this.saveVisitDate();
    this.updateLoginCount();
    setInterval(() => {
      const now: Date = new Date();
      this.currentTime = now.toLocaleString();
    }, 1000)
  }

  onFocus(): void {
    this.inputType = 'date';
  }

  toggle(): void {
    if (this.currentMode === Mode.Date) {
      this.currentMode = Mode.Counter;
    } else {
      this.currentMode = Mode.Date;
    }
  }

  decrease(): void {
    if (this.count > 0) {
      this.count = this.count - 1;
    }
  }

  increase(): void {
    this.count = this.count + 1;
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

  userCollection: Collection<IUser> = new Collection<IUser>(this.userList)

}



