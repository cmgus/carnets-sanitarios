const { ipcRenderer } = require('electron')
btnSave.onclick = async e => {
    const personAdded = await ipcRenderer.invoke('UseCaseAddPerson', getPersonData())
    console.log(personAdded)
}

function getPersonData() {
    return {
        names: names.value,
        surnames: surnames.value,
        dni: dni.value,
        age: age.value,
        phones: phones.value,
        address: address.value,
        ch: ch.value
    }
}