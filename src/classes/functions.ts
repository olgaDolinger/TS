/* eslint-disabled no-redeclare*/

import RefBook from "./ensiclopedia";
import { Book, Callback } from "./interfaces";
import { Category } from "./emuns";
import { BookOrUndefined } from "./types";

export function assertRefBookInstanceв(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not instance of RefBook')
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstanceв(data instanceof RefBook);
    (data as RefBook).printItem();
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getProperty<TObject, TKey extends keyof TObject>(book: TObject, prop: TKey): TObject[TKey] | string {

    if (typeof book[prop] === 'function') {
        const t = book[prop];
        // return (book[prop] as Function).name;
        return (book[prop]['name']).name;
    }
    return book[prop];
}

export function getAllBooks(): readonly any[] {
    const books: readonly Book[] = [
        { id: 1, title: 'Refactoring JavaScript', category: Category.Angular, author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.HTML, author: 'Andrea Chiarelli', available: true }
    ]
    return books;
};

export function logFirstAvailable(books: ReadonlyArray<any> = getAllBooks()): void {
    const numberOfBooks = books.length;
    const title: string = books.find(book => book.available).title;
    console.log(title);
}


export function getBookTitlesByCategory(category: Category): Array<string> {
    const books = getAllBooks();

    return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}


export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index]
    return [title, author]

}

export function createCustomerID(name: string, id: number): string {
    return `name: ${name}, id: ${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name ${name}`)

    if (age) {
        console.log(`Customer age ${age}`)
    }

    if (city) {
        console.log(`Customer city ${city}`)
    }

}

export function getBookByID(id: number = 1): BookOrUndefined {
    const books = getAllBooks()
    return books.find(book => book.id === id);
}

export function сheckoutBooks(custormer: string, ...bookIDs: number[]): string[] {
    console.log(`Custormer name ${custormer}`);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book?.available)
        .map(book => book.title);
}


export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks()
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }

    } else if (args.length === 2) {
        const [id, avalable] = args

        if (typeof id === 'number' && typeof avalable === 'boolean') {
            return books.filter(book => book.available === avalable && book.id === id).map(book => book.title);
        }

    }

    return [];
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('valueshouldhavebeenastring');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function getBooksbyCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category)
            if (titles.length > 0) {
                callback(null, titles)
            } else {
                throw new Error('No books found')
            }
        } catch (err) {
            callback(err, null)

        }
    }, 2000);
}

export function logCategotySearch(error: Error, titles: string[]): void {
    if (error) {
        console.log(error.message)
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromice(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category)
            if (titles.length > 0) {
                resolve(titles)
            } else {
                reject('No books found')
            }

        }, 2000);
    })
}

export async function logSearchResults(category: Category) {
    const result = await getBooksByCategoryPromice(category);
    console.log(result.length);
}