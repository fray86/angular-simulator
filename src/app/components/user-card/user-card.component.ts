import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [UpperCasePipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {

  @Input({ required: true }) user!: IUser;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  deleteUser(): void {
    this.delete.emit(this.user.id);
  }

}
