import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs';

@Component({
  selector: 'app-users-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './users-filter.component.html',
  styleUrl: './users-filter.component.scss',
})
export class UsersFilterComponent implements OnInit {

  private destroyRef: DestroyRef = inject(DestroyRef);

  @Output() filterUser: EventEmitter<string> = new EventEmitter<string>();

  liveInput: FormControl<string | null> = new FormControl<string>('');

  ngOnInit(): void {
    this.liveInput.valueChanges.pipe(
      debounceTime(200), 
      distinctUntilChanged(),
      map((text: string | null) => (text || '').trim().toLowerCase()),
      tap((cleanText: string) => this.filterUser.emit(cleanText)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}
