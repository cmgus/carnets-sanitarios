export class Person {
    constructor(
        private names: string,
        private surnames: string,
        private dni: string,
        private address: string,
        private age: number,
        private phones: string[],
        private ch: string
    ) { }
}