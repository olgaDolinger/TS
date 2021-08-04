import { positiveInteger, timeout } from "./decoretors";
import { ReferenceItem } from "./reference-item";


export default class Encyclopedia extends ReferenceItem {
    private _copies: number
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    @timeout(5000)
    printItem(): void {
        super.printItem();
        console.log(`Edition ${this.edition} ${this.year}`);

    }

    printCitation(): void {
        console.log(`${this.title} ${this.year}`);
    }

}

