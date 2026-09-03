import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, NgForm, ReactiveFormsModule, } from '@angular/forms';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {

  @Output() createUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  
  userForm: FormGroup = new FormGroup({
    name: new FormControl<string | null>('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    username: new FormControl<string | null>('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl<string | null>('', [Validators.required, Validators.email, Validators.maxLength(25)]),
    phone: new FormControl<string | null>('', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]),
    website: new FormControl<string | null>('', [Validators.maxLength(100)]),
  
    address: new FormGroup({
      city: new FormControl<string | null>('', [Validators.required, Validators.maxLength(50)]),
      street: new FormControl<string | null>('', [Validators.required, Validators.maxLength(100)]),
      suite: new FormControl<string | null>('', [Validators.maxLength(50)]),
      zipcode: new FormControl<string | null>('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      geo: new FormGroup({
        lat: new FormControl<string | null>('', [Validators.required]),
        lng: new FormControl<string | null>('', [Validators.required]),
      })
    }),

    company: new FormGroup({
      name: new FormControl<string | null>('', [Validators.required, Validators.maxLength(50)]),
      catchPhrase: new FormControl<string | null>('', [Validators.maxLength(200)]),
      bs: new FormControl<string | null>('', [Validators.maxLength(100)]),
    })
  });
  
  onSubmit(): void {
    if (this.userForm.valid) {
        const newUser: IUser = {id: Date.now(),...this.userForm.value} as IUser;
        this.createUser.emit(newUser);
        this.userForm.reset();
      }
  }
}
