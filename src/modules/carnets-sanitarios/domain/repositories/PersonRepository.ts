import { Person } from "../models/Person";

export interface PersonRepository {
    addPerson(personData: any): Promise<Person>
    findPersonByDni(dni: string): Person
}