export class Collection<T> {
  
  constructor(private items: T[]) {}
  
  getAll(): T[] {
    return this.items;
  }
  
  get(index: number): T {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  remove(removeIndex: number): void {
    this.items = this.items.filter((item, index) => index !== removeIndex);
  }

  replace(index: number, item: T): void {
    this.items[index] = item;
  }
}