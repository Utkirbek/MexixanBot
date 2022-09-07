"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenu = void 0;
const menu_1 = require("@grammyjs/menu");
const onCommandInfo_1 = require("../handlers/commands/onCommandInfo");
const onCommandHelp_1 = require("../handlers/commands/onCommandHelp");
exports.mainMenu = new menu_1.Menu("main-menu")
    .text("Info", onCommandInfo_1.onCommandInfo)
    .row()
    .text("Help", onCommandHelp_1.onCommandHelp)
    .row()
    .text("Help", onCommandHelp_1.onCommandHelp)
    .row()
    .text("Help", onCommandHelp_1.onCommandHelp)
    .row()
    .text("Help", onCommandHelp_1.onCommandHelp);
