abstract class ReferenceItem {
    // title: string;
    // year: number;
    public edition: number;


    /*    constructor(newTitle: string,newYear: number) {
           console.log('Creating a new Reference...');
           this.title = newTitle;
           this.year = newYear;
       } */

    private _publisher: string;

    #id: number;

    static department: string = 'Recearch';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new Reference...');
        this.#id = id;
    }

    printItem(): void {

    }


}

export { ReferenceItem }