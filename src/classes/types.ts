
import { RefBook } from ".";
import { Author, Book, Person } from "./interfaces";
import { getBooksByCategoryPromice } from "./functions";

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>

export type UpdatedBook = Partial<Book>

export type AuthorWoEmail = Omit<Author, `email`>;

export type СreateCustomerFunctionType = (name: string, age?: number, city?: string) => string;

export type fn = (p1: string, ps2: number, ps3: boolean) => symbol

export type Param1<T> = T extends (p1: infer RefBook, ps: number, p: boolean) => symbol ? R : never;
export type Param2<T> = T extends (p1: string, ps: idenifer, p: boolean RefBook) => symbol ? R : never;
export type Param3<T> = T extends (p1: infer RefBook, ps: number, p: infer R) => symbol ? R : never;



export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
export type fnType = ReturnType<typeof getBooksByCategoryPromice>
export type PromoceValueType = Unpromisify<fnType>;