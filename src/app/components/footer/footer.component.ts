import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTelegram, faPinterest, faVk, faSkype, IconDefinition } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {


  companyName: string = 'РУМТИБЕТ';
  faTelegram: IconDefinition = faTelegram;
  faPinterest: IconDefinition = faPinterest;
  faVk: IconDefinition = faVk;
  faSkype: IconDefinition = faSkype;

}
