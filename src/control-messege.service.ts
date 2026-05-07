import { Injectable } from '@angular/core';
import { IMessege } from './app/interfaces/IMessege';
import { Messege } from './enums/Messege';

@Injectable({
  providedIn: 'root',
})
export class ControlMessegeService {
  
  public messeges: IMessege[] = [];

  addMessege(text: string, type: Messege): void {
    const newMessege: IMessege = {
      messege: text,
      type: type
    };
    this.messeges.push(newMessege);
    setTimeout(() => {this.delete(newMessege)}, 5000)
  }

  delete(removedMsg: IMessege): void {
    this.messeges = this.messeges.filter((messege: IMessege) => messege !== removedMsg);
  }
}
