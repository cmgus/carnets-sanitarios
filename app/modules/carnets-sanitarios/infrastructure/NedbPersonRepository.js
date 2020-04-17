"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NedbRepository_1 = require("../../shared/NedbRepository");
const PersonFactory_1 = require("../domain/factories/PersonFactory");
class NedbPersonRepository extends NedbRepository_1.NedbRepository {
    constructor() {
        super('Person', PersonFactory_1.PersonFactory);
    }
    addPerson(personData) {
        this.loadDatabase(err => err ? console.log('Error al cargar la BD', err) : "");
        return new Promise((resolve, reject) => {
            this.insert(personData, (err, doc) => {
                if (err)
                    return reject(err.errorType);
                resolve(this.factory.create(doc));
            });
        });
    }
    findPersonByDni(dni) {
        throw new Error("Method not implemented.");
    }
}
exports.NedbPersonRepository = NedbPersonRepository;
