import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { UpperCasePipe } from '@angular/common';
import { TelTransformPipe } from '../../pipes/tel-transform.pipe';
import { TelFormat } from '../../../enums/TelFormat';
import { BoldHoverDirective } from '../../directives/bold-hover.directive';

@Component({
  selector: 'app-user-card',
  imports: [UpperCasePipe, TelTransformPipe, BoldHoverDirective],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {

  @Input({ required: true }) user!: IUser;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  TelFormat: typeof TelFormat = TelFormat; 

  deleteUser(): void {
    this.delete.emit(this.user.id);
  }

}
