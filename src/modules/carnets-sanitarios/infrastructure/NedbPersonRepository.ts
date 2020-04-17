import { PersonRepository } from "../domain/repositories/PersonRepository";
import { NedbRepository } from "../../shared/NedbRepository";
import { Person } from "../domain/models/Person"
import { PersonFactory } from "../domain/factories/PersonFactory";

export class NedbPersonRepository extends NedbRepository<Person> implements PersonRepository {
    constructor() {
        super('Person', PersonFactory)
    }
    addPerson(personData: any): Promise<Person> {
        this.loadDatabase(err => err ? console.log('Error al cargar la BD', err) : "")
        return new Promise((resolve, reject) => {
            this.insert(personData, (err: any, doc: any) => {
                if (err) return reject(err.errorType)
                resolve(this.factory.create(doc))
            })
        })
    }
    findPersonByDni(dni: string): Person {
        throw new Error("Method not implemented.");
    }

}