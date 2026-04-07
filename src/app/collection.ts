export interface StorageProvider<T> {
  getAll(): T[];
  get(index: number): T | undefined;
  clear(): void;
  remove(index: number): void;
  replace(index:number, item:T): void;
}

export class Collection<T> implements StorageProvider<T> {
  constructor(private items: T[]) {}  
  
  getAll(): T[] {
    return this.items
  }

  get(index:number): T | undefined {
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

const userList = [
  { id: 1, name: "Max" },
  { id: 2, name: "Oleg" },
  { id: 3, name: "Nikita"}
];

const productList = [
  {id: 101, title: "Iphone"},
  {id: 102, title: "Sony Ericson"},
  {id: 103, title: "Nokia"}
]

const usersCollection = new Collection(userList);
const productsCollection = new Collection(productList);




