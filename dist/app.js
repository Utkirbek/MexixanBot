"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const grammy_1 = require("grammy");
const onCommandInfo_1 = require("./handlers/commands/onCommandInfo");
const onCommandStart_1 = require("./handlers/commands/onCommandStart");
const onCommandHelp_1 = require("./handlers/commands/onCommandHelp");
const mainMenu_1 = require("./menus/mainMenu");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.bot = new grammy_1.Bot(`${process.env.BOT_TOKEN}`);
// invoking menues
exports.bot.use(mainMenu_1.mainMenu);
// Commands
exports.bot.command("info", onCommandInfo_1.onCommandInfo);
exports.bot.command("start", onCommandStart_1.onCommandStart);
exports.bot.command("help", onCommandHelp_1.onCommandHelp);
// starting bot
exports.bot.start();
