"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Nedb = require("nedb");
class NedbRepository extends Nedb {
    constructor(filename, factory) {
        super({ filename: `db/${filename}.db` });
        this.factory = factory;
    }
}
exports.NedbRepository = NedbRepository;
