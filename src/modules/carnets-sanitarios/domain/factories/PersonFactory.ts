import { Person } from "../models/Person";

export class PersonFactory {
    public static create(personData: any): Person {
        const { names, surnames, dni, phones, address, age, ch } = personData
        const person = new Person(names, surnames, dni, address, age, phones, ch)
        return person
    }
}