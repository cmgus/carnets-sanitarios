const { app, BrowserWindow } = require('electron');
const path = require('path');
const { UseCase } = require('../modules/carnets-sanitarios/application/add-person/UseCase')
const { Responder } = require('../modules/carnets-sanitarios/application/add-person/Responder')
const { ControllerAddPerson } = require('../modules/carnets-sanitarios/infrastructure/ControllerAddPerson')
const { GUI } = require('./GUI')
class Index {
  static run() {
    new GUI()
  }
}
Index.run()