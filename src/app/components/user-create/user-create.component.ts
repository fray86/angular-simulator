import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, FormsModule, NgForm, ReactiveFormsModule, FormBuilder, } from '@angular/forms';
import { IUser } from '../../interfaces/IUser';
import { FormControls } from '../../types.ts/FormControls';
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'app-user-create',
  imports: [ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {

  fb: FormBuilder = inject(FormBuilder)

  @Output() createUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  

  userForm: FormGroup<FormControls<IUser>> = this.fb.nonNullable.group({
    id: [0],
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(25)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]],
    website: ['', [Validators.maxLength(100)]],
    address: this.fb.nonNullable.group({
      city: ['', [Validators.required, Validators.maxLength(50)]],
      street: ['', [Validators.required, Validators.maxLength(100)]],
      suite: ['', [Validators.maxLength(50)]],
      zipcode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      geo: this.fb.nonNullable.group({
        lat: ['', [Validators.required]],
        lng: ['', [Validators.required]],
      }),
    }),
    company: this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      catchPhrase: ['', [Validators.maxLength(200)]],
      bs: ['', [Validators.maxLength(100)]],
    })
  })
  
  onSubmit(): void {
    if (this.userForm.valid) {
        const newUser: IUser = {id: Date.now(), ...this.userForm.getRawValue} as IUser;
        this.createUser.emit(newUser);
        this.userForm.reset();
      }
  }
}
