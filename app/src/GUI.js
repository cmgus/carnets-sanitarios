const { app, BrowserWindow, ipcMain } = require('electron')
const { join } = require('path')
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}
// modules
const { ControllerAddPerson } = require('../modules/carnets-sanitarios/infrastructure/ControllerAddPerson')

class GUI {
    constructor() {
        this.app = app
        this.ipcMain = ipcMain
        this.init()
        this.loadUseCase()
    }
    createWindow() {
        const mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        })
        mainWindow.loadFile(join(__dirname, 'sections/index.html'))
    }
    init() {
        this.app.allowRendererProcessReuse = true
        this.app.on('ready', () => this.createWindow())
        this.app.on('window-all-closed', () => {
            // On OS X it is common for applications and their menu bar
            // to stay active until the user quits explicitly with Cmd + Q
            if (process.platform !== 'darwin') {
                this.app.quit();
            }
        });

        this.app.on('activate', () => {
            // On OS X it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow();
            }
        });
    }
    loadUseCase() {
        this.ipcMain.handle('UseCaseAddPerson', async (ev, personData) => {
            // Ok mover lo casos de uso a la carpeta main-process
            const ctrlAddPerson = new ControllerAddPerson()
            return await ctrlAddPerson.addPerson(personData)
        })
    }
}

module.exports = { GUI }