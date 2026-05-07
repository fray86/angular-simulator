import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlLocalStorageService {
  
  setValue<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getValue<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key)!)
  }

  removeValue(key:string): void {
    localStorage.removeItem(key)
  }

  clearAll(): void {
    localStorage.clear()
  }
}
