import { ShelfItem } from "../interfaces";

//export default class Shelf<T>{ /// also possible
export default class <T extends ShelfItem> {
    private items: T[] = new Array<T>();

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

