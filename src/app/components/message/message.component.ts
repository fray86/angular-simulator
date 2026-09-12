import { Component, inject } from '@angular/core';
import { MessageService } from '../../../message.service';
import { NgTemplateOutlet } from "@angular/common";
import { AsyncPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, IconDefinition} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-message',
  imports: [NgTemplateOutlet, AsyncPipe, FontAwesomeModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {

  messageService: MessageService = inject(MessageService);

  faEnvelope: IconDefinition = faEnvelope;

}
