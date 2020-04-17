"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("../models/Person");
class PersonFactory {
    static create(personData) {
        const { names, surnames, dni, phones, address, age, ch } = personData;
        const person = new Person_1.Person(names, surnames, dni, address, age, phones, ch);
        return person;
    }
}
exports.PersonFactory = PersonFactory;
