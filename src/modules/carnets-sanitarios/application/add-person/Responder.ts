import { Person } from "../../domain/models/Person";

export interface Responder {
    addedPerson(person: Person): void
    unaddedPerson(error: Error): void
}