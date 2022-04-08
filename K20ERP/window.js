// Create window file 
// Created by Daniel Plata

const {app, BrowserWindow } = require('electron'); 

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        fullScreenable: true
    })

    // win.loadFile("src/index.html")o
    win.loadURL(`file://${__dirname}/dist/index.html`);
    // win.fullScreenable(true);
    win.setMenu(null);

    // win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})