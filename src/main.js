const { app, BrowserWindow, Menu } = require("electron");

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Charger GeoGuessr
    mainWindow.loadURL("https://www.geoguessr.com/fr/multiplayer");

    // Menu superposé
    const menu = Menu.buildFromTemplate([
        {
            label: "Outils",
            submenu: [
                {
                    label: "Tracker",
                    click: () => {
                        console.log("Tracker activé !");
                    }
                },
                {
                    label: "Quitter",
                    role: "quit"
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);
});
