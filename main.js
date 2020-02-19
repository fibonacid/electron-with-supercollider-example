const { app, BrowserWindow } = require("electron");

require("hazardous");
const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });

  mainWindow.loadURL("file://" + __dirname + "/index.html");
});
