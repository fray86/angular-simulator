import { Injectable } from '@angular/core';
import { IMessage } from './app/interfaces/IMessage';
import { Message } from './enums/Message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  
  messages: IMessage[] = [];

  private addMessage(text: string, type: Message): void {
    const newMessage: IMessage = {
      message: text,
      type: type
    };
    this.messages = [...this.messages, newMessage];
    setTimeout(() => {
      this.delete(newMessage)
    }, 5000);
  }

  delete(removedMsg: IMessage): void {
    this.messages = this.messages.filter((message: IMessage) => message !== removedMsg);
  }
  
  showWarn(text: string): void {
    this.addMessage( text, Message.WARN);
  } 
  
  showError(text: string): void {
    this.addMessage(text, Message.ERROR);
  } 
  
  showSuccess(text: string): void {
    this.addMessage(text, Message.SUCCESS);
  }

  showInfo(text: string): void {
    this.addMessage(text, Message.INFO);
  }

}
