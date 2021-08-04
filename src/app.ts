import { Book, Librarian, Logger } from './interfaces'
import { Category } from './classes/emuns'
import { Shelf, ReferenceItem, UL, RefBook } from './classes'
import { createCustomer, createCustomerID, getAllBooks, getBookByID, getBooksbyCategory, getBooksByCategoryPromice, getProperty, logCategotySearch, logFirstAvailable, logSearchResults, printRefBook, purge, сheckoutBooks } from './classes';
import type { Library } from './classes'
import { BookRequiredFields, PersonBook, UpdatedBook } from './classes/types';
import { UnivercityLibrarian } from './classes/university-librarian';


showHello('greeting', 'TypeScript');

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}



//function calcTotalPages(): BigInt {
//   const data = [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
//
//   const num = data.reduce((total: Number, books) => { return total + (BigInt(books.books) * BigInt(books.avgPagesPerBook)), 0n });
//   return num

//}

//logFirstAvailable();
//getBookTitlesByCategory(Category.JavaScript);
//console.log(getBookAuthorByIndex(0));
//


// ==========================================================
// Task 03
// ==========================================================


// ==========================================================
//  1
// ==========================================================


const muId = createCustomerID('Ann', 1);

//console.log(muId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `name: ${name}, id: ${id}`;

idGenerator = createCustomerID;

//console.log(idGenerator("Name", 20));

//createCustomer('Anna', 25, 'Kiev')


console.log(getBookByID(1));


const myBooks = сheckoutBooks('Ann', 1, 2, 4);
//console.log(myBooks);


//=========================================
// 03.03
//=========================================

//console.log(getTitles(false));

//=========================================
// 03.04
//=========================================



//const test1 = bookTitleTransform('Some Title');
//const test2 = bookTitleTransform(256)

//console.log(test1);
//console.log(test2);


//=========================================
// Interface
//=========================================


//=========================================
// 04.01
//=========================================

// function printBook(book: Book) {
//     console.log(`print book: ${book.title} ${book.author}`)
// }

//const myBook: Book = { id: 5, title: 'Colors, Backgrounds, and Gradients', author: 'Eric A. Meyer', available: true, category: Category.CSS, pages: 200, markDamaged: (reason: string) => console.log(`Damage reason: ${reason}`) }

// printBook(myBook);

// myBook.markDamaged('missing cover');

//=========================================
// 04.02
//=========================================

const logDamage: Logger /*DamageLogger*/ = ((reason: string) => console.log(`Damaged: ${reason}`));
logDamage('missing back cover');

//=========================================
// 04.03
//=========================================

// const favoriteAuthor: Author = {
//     name: 'Ann',
//     email: 'test@test.com',
//     numBooksPublished: 1,
// }

// const librariant: Librarian = {
//     name: 'Ann',
//     email: 'test@test.com',
//     deoartment: 'Test department',
//     assistCUstormer: (custName: string) => console.log(custName)
// }


//=========================================
// 04.04
//=========================================

// const offer: any = {
//     book: {
//         title: 'War anf Peace'
//     }
// }

// console.log(offer.magazine)
// console.log(offer.magazine?.getTitle())
// console.log(offer.book?.getTitle?.());
// console.log(offer.book.authors?.[0])
// console.log(offer.book['titles']?.())

//=========================================
// 04.05
//=========================================

// function getProperty(book: Book, prop: BookProperties): any {

//     if (typeof book[prop] === 'function') {
//         const t = book[prop];
//         return (book[prop] as Function).name;
//     }
//     return book[prop];
// }

// console.log(getProperty(myBook, 'title'))
// console.log(getProperty(myBook, 'markDamaged'))
// //getProperty(myBook, 'title1')

//=========================================
// 04.06
//=========================================

//=========================================
// 05.01
//=========================================

// const ref: ReferenceItem = new ReferenceItem('Tolstoy', 1886);
// ref.publisher = 'test';


//=========================================
// 05.02
//=========================================

//const refBook = new Encyclopedia('1', 'Java Sctipr', 2001, 20);

// console.log(refBook);

// refBook.printItem();
// refBook.printCitation();


// class UniversityLibrarian implements Librarian {
//     name: string;
//     email: string;
//     deoartment: string;

//     a: number = 1;

//     assistCUstormer(custName: string): void {
//         console.log(`${this.name} assists ${custName} `)
//     }
// }

// const favotiteLibrarian: Librarian = new UniversityLibrarian();

// favotiteLibrarian.name = 'Ann';
// favotiteLibrarian.assistCUstormer('Nick');

//=========================================
// 05.04
//=========================================

//const favouriteLibrarian: Librarian = new UnivercityLibrarian();

//const favouriteLibrarian: Librarian = new UL.UnivercityLibrarian();


//=========================================
// 05.05
//=========================================

const personBook: PersonBook = {
    name: 'Ann',
    email: 'test@test.com',
    id: 1,
    author: 'Amina',
    available: true,
    category: Category.Angular,
    title: 'My Light Book'
}

//=========================================
// 06.03
//=========================================
/*
const refBook = new RefBook(1, 'TypeScript', 2021, 2);
printRefBook(refBook);

const universityLibrarian = new UL.UnivercityLibrarian();
printRefBook(universityLibrarian); */

//=========================================
// 06.05
//=========================================
/* const flag = true;

if (flag) {
    // const module = await import('./classes');

    import('./classes').then(
        module => {
            let reader = new module.Reader();

            reader.name = 'Ann';
            reader.take(getAllBooks()[2]);
        }
    )
}
 */

//=========================================
// 06.06
//=========================================

//const L: Library = new Library();
const L: Library = {
    id: 1,
    name: 'test',
    address: 'rrr'
}

//=========================================
// 07.01
//=========================================

const inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
]

// const result: Array<interfaces.Book> = purge(inventory)

// console.log(result);

// const result1: Array<number> = purge([1, 2, 3, 4]);

// console.log(result1);

//=========================================
// 07.02
//=========================================
// const bookShelf = new Shelf<interfaces.Book>();
// inventory.forEach((book) => bookShelf.add(book));

// console.log(bookShelf.getFirst().title);

// const magasines: interfaces.Magasine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ]

// const magasinesShelf = new Shelf<interfaces.Magasine>();

// magasines.forEach((magasines) => magasinesShelf.add(magasines));

// console.log(magasinesShelf.getFirst().title);

// magasinesShelf.printTitles()

// console.log(magasinesShelf.find('some'));

//=========================================
// 07.03
//=========================================

console.log(getProperty(getAllBooks()[0], 'title'));

//=========================================
// 07.04
//=========================================

const book: BookRequiredFields = {
    author: 'Anna',
    id: 1,
    available: true,
    category: Category.Angular,
    markDamaged: null,
    pages: 100,
    title: 'Unknown'
}

const updatedBook: UpdatedBook = {
    id: 1,
    author: 'Lee'
}


//const params: Parameters<CreateCusetomerFunctionType> = [`Anna`]
//createCustomer(...params);

//=========================================
// 08.01
//=========================================

//const ulLib = new UL.UniversityLibrarian()

//=========================================
// 08.02
//=========================================

// const unLib = new UL.UniversityLibrarian();
// unLib.name = 'Anna';
// // unLib['printLibrarian']();
// unLib['printLibrarian']?.();
// console.log(unLib);

//=========================================
// 08.03
//=========================================
// const unLib = new UL.UniversityLibrarian();
// unLib.assistFaculty = null;
// console.log(unLib);
// unLib.teachComunity = null;

//=========================================
// 08.04
//=========================================

//const enc: RefBook = new RefBook(1, 'TS', 2021, 2);


//=========================================
// 08.04, 06
//=========================================
// const unLib = new UL.UniversityLibrarian();
// console.log(unLib);
// unLib.name = "Ann"
// unLib.assistCUstorm1wer('Nick');
// console.log(unLib.name)

//=========================================
// 08.07
//=========================================
/*
const enc = new RefBook(1, 'TS', 2021, 2)
enc.copies = 2
console.log(enc);*/

//=========================================
// 09.01
//=========================================
// console.log('Begin');
// getBooksbyCategory(Category.JavaScript, logCategotySearch);
// getBooksbyCategory(Category.JavaScript, logCategotySearch);
// console.log('End');

//=========================================
// 09.02
//=========================================
/*
console.log('Begin');
getBooksByCategoryPromice(Category.JavaScript)
    .then(titles => {
        console.log(titles);
        return titles.length
    })
    .then(n => console.log(n))
    .catch(error => console.log(error));
getBooksByCategoryPromice(Category.JavaScript)
    .then(titles => console.log(titles))
    .catch(error => console.log(error));
console.log('End');*/


//=========================================
// 09.03
//=========================================

console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software)
    .catch((error) => console.log(error));
console.log('End');