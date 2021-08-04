import { logger, logMethod, logParameter, sealed, writable } from "./decoretors";
import * as Inerfaces from "./../interfaces";


@sealed('UnivercityLibrarian')
// @logger('UnivercityLibrarian')
export class UnivercityLibrarian implements Inerfaces.Librarian, Inerfaces.Author, Inerfaces.A {
    //TODO: add functional

    name: string;
    email: string;
    department: string;
    a: number = 1;


    numBooksPublished = 10;

    @logMethod
    assistCUstormer(@logParameter customerName: string): void {
        console.log(`${this.name} is assistant ${customerName}`);
    }

    @writable(true)
    assistFaculty(): void {
        console.log("Assist faculty")
    }

    @writable(false)
    teachComunity(): void {
        console.log("Teaching comunity")
    }
}