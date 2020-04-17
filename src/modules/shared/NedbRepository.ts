import * as Nedb from "nedb";

interface ObjectFactory<T> {
    create(data: any): T
}
export class NedbRepository<T> extends Nedb {
    constructor(filename: string, protected factory: ObjectFactory<T>) {
        super({ filename: `db/${filename}.db`})
    }
}