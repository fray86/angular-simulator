import './training';
import { Component, inject, numberAttribute } from '@angular/core';
import { Color } from '../enums/Color';
import { Collection } from './collection';
import { Mode } from '../enums/Mode';
import { FormsModule } from '@angular/forms';
import { Widget } from '../enums/Widget'
import { IProduct } from './interfaces/IProduct';
import { IUser } from './interfaces/IUser';
import { IFeature } from './interfaces/IFeature';
import { IDirection } from './interfaces/IDirection';
import { IMaterial } from './interfaces/IMaterial';
import { MessageService } from '../message.service';
import { LocalStorageService} from '../local-storage.service'
import { Message } from '../enums/Message';
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  messageService: MessageService = inject(MessageService);

  private localStorageService: LocalStorageService = inject(LocalStorageService);

  messageType: typeof Message = Message; 
  count: number = 0;
  modeType: typeof Mode = Mode; 
  currentMode: Mode = Mode.DATE;
  widgetType: typeof Widget = Widget;
  currentWidgetType: Widget = Widget.TEXT;
  companyName: string = 'РУМТИБЕТ';
  currentTime!: string;
  liveInput!: string;
  isLoading: boolean = true;
  selectedLocation: string = "";
  selectedDate: string = "";
  selectedMembers: string = "";

  features: IFeature[] = [
    {
      id: 1,
      img: 'experienced-guide',
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 2,
      img: 'saved-tavel',
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    },
    {
      id: 3,
      img: 'loyalti-price',
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.'
    }
  ];

  directions: IDirection[] = [
    {
      id: 1,
      img: 'river-with-mountains',
      rating: "4.9",
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      price: 480,
    },
    {
      id: 2,
      img: 'night-in-mountains',
      rating: "4.5",
      title: 'Ночь в горах',
      subtitle: 'в компании друзей',
      price: 500,
    },
    {
      id: 3,
      img: 'training-in-mountains',
      rating: "5.0",
      title: 'Растяжка в горах',
      subtitle: 'для тех, кто забоится о себе',
      price: 230,
    }
  ];

  materials: IMaterial[] = [
    {
      id: 1,
      img: 'italy-city',
      title: 'Красивая Италия, какая она в реальности?',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: "01/04/2023",
    },
    {
      id: 2,
      img: 'fly-sky',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: "01/04/2023",
    },
    {
      id: 3,
      img: 'solo-travel-girl',
      title: 'Как подготовиться к путешествию в одиночку? ',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: "01/04/2023",
    },
    {
      id: 4,
      img: 'india-house',
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: "01/04/2023",
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
    this.currentWidgetType = Widget.DATE;
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

  isMainColor(color: Color): boolean {
    const rgb: string[] = [Color.RED, Color.GREEN, Color.BLUE];
    return rgb.includes(color);
  }

  private saveVisitDate(): void {
    const date: string = new Date().toISOString();
    this.localStorageService.setValue('last-visit', date);
  }

  private updateLoginCount(): void {
    let visits: number = parseInt(this.localStorageService.getValue('visit-count') || '0');
    visits = visits + 1;
    this.localStorageService.setValue('visit-count', visits.toString());
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



