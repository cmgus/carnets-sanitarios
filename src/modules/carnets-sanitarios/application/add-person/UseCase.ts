import { Person } from "../../domain/models/Person";
import { Responder } from "./Responder";
import { PersonRepository } from "../../domain/repositories/PersonRepository";

export class UseCase {
    constructor(private repository: PersonRepository) { }
    public async execute(personData: any, responder: Responder) {
        try {
            const person = await this.repository.addPerson(personData)
            responder.addedPerson(person)
        } catch (error) {
            responder.unaddedPerson(error)
        }
    }
}