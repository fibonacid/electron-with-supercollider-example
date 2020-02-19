'use strict';

require ('hazardous');
const path = require ('path');
const { app, BrowserWindow } = require("electron");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  });

  mainWindow.loadURL("file://" + __dirname + "/index.html");
});

function vendor(filepath) {
  return path.join(__dirname, "../vendor/mac", filepath);
}

const sc = require("supercolliderjs");

const options = {
  debug: true,
  echo: true,
  sclang: vendor("SuperCollider/MacOS/sclang")
};

async function bootSclang() {
  try {
    const lang = await sc.lang.boot(options);
    await lang.interpret('s.boot');
  } catch(err) {
    console.error(err)
  }
};

bootSclang();