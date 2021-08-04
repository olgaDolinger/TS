import { Category } from './classes/emuns'

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean,
    category: Category,
    pages?: number,
    //markDamaged?: (reason: string) => void,
    markDamaged?: DamageLogger,
}

interface DamageLogger {
    (p: string): void;
}


interface Person {
    name: string,
    email: string
}


interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    deoartment: string,
    assistCUstormer: (custName: string) => void;
}

interface Person2 {
    name: string;
}

interface Magasine {
    title: string,
    publisher: string
}

interface ShelfItem {
    title: string;
}


interface LibMGRCallback<T> {
    (err: Error, data: string[]): void;
}

interface Callback<T> {
    (err: Error, data: T): void;
}

interface A {

}

export { Person2, Person, Author, A, Librarian, Book, DamageLogger as Logger, Magasine, ShelfItem, LibMGRCallback, Callback };

