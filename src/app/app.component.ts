import './training';
import { Component, inject, numberAttribute, OnInit } from '@angular/core';
import { Color } from '../enums/Сolor';
import { Collection } from './collection';
import { FormsModule } from '@angular/forms';
import { IProduct } from './interfaces/IProduct';
import { IPerson } from './interfaces/IPerson';
import { MessageService } from '../message.service';
import { LocalStorageService} from '../local-storage.service'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { LoaderSpinerComponent } from './components/loader-spiner/loader-spiner.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent, FooterComponent, RouterOutlet, MessageComponent, LoaderSpinerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  messageService: MessageService = inject(MessageService);
  private localStorageService: LocalStorageService = inject(LocalStorageService);
  themeService: ThemeService = inject(ThemeService);

  companyName: string = 'РУМТИБЕТ';

  constructor() {
    this.saveVisitDate();
    this.updateLoginCount();
  }

  ngOnInit(): void {
    this.themeService.applyState(this.themeService.getTheme())
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

  userList: IPerson[] = [
    { id: 1, name: "Max" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Nikita"},
  ];

  productList: IProduct[] = [
    { id: 101, title: "Iphone" },
    { id: 102, title: "Sony Ericson" },
    { id: 103, title: "Nokia" }
  ];

  userCollection: Collection<IPerson> = new Collection<IPerson>(this.userList)

}



