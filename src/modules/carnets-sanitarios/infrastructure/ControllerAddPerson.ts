import { Person } from "../domain/models/Person";
import { UseCase } from "../application/add-person/UseCase";
import { Responder } from "../application/add-person/Responder";
import { NedbPersonRepository } from "./NedbPersonRepository";

export class ControllerAddPerson implements Responder {
    private person: Person
    public async addPerson(personData: any) {
        const useCase = new UseCase(new NedbPersonRepository())
        await useCase.execute(personData, this)
        return this.person
    }
    addedPerson(person: Person): void {
        this.person = person
    }
    unaddedPerson(error: Error): void {
        throw error
    }
}
