import { Component, inject } from '@angular/core';
import { IFeature } from '../../interfaces/IFeature';
import { IDirection } from '../../interfaces/IDirection';
import { IMaterial } from '../../interfaces/IMaterial';
import { IPhoto } from '../../interfaces/IPhoto';
import { MessageService } from '../../../message.service';
import { Message } from '../../../enums/Message';
import { Widget } from '../../../enums/Widget';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  messageService: MessageService = inject(MessageService);

  selectedLocation: string = "";
  selectedDate: string = "";
  selectedMembers: string = "";
  messageType: typeof Message = Message; 
  widgetType: typeof Widget = Widget;
  currentWidgetType: Widget = Widget.TEXT;
  liveInput!: string;
  
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
  
  photos: IPhoto[] = [
    {
      id: 1,
      img: 'people-with-ballon'
    },
    {
      id: 2,
      img: 'map-with-camera'
    },
    {
      id: 3,
      img: 'sea-city'
    },
    {
      id: 4,
      img: 'beach-from-sky'
    },
    {
      id: 5,
      img: 'girl-in-canion'
    },
    {
      id: 6,
      img: 'book-glasses'
    }
  ]
  
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
  
  onFocus(): void {
    this.currentWidgetType = Widget.DATE;
  }

}
