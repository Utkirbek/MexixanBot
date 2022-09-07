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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const grammy_1 = require("grammy");
const onCommandInfo_1 = require("./handlers/commands/onCommandInfo");
const onCommandHelp_1 = require("./handlers/commands/onCommandHelp");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.bot = new grammy_1.Bot(`${process.env.BOT_TOKEN}`);
// invoking menues
// // Commands
exports.bot.command("info", onCommandInfo_1.onCommandInfo);
exports.bot.command("help", onCommandHelp_1.onCommandHelp);
const inlineKeyboard = new grammy_1.InlineKeyboard()
    .text("Working Hours", "working-hours").row()
    .url("Connect with Admin", "https://t.me/jakhongirabdukhamidov")
    .row()
    .url("Our Menu", "https://drive.google.com/file/d/1K_SessS8Dx7nQP1DaDYiBSma1ZzG84ia/view")
    .row()
    .url("Connect with Owner", "https://t.me/jakhongirabdukhamidov")
    .row()
    .url("Connect with Owner", "https://t.me/jakhongirabdukhamidov");
// Send a keyboard along with a message.
exports.bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.replyWithVideo("BAACAgQAAxkBAAMaYxhP8VrBqt9e-CQdWzvPIa8uCooAAh0DAALZ7DxSPbbGMQ2IDl0pBA", {
        caption: "Welcome to the bot, please select a menu from the below buttons",
        reply_markup: inlineKeyboard,
    });
}));
// Wait for click events with specific callback data.
exports.bot.callbackQuery("working-hours", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.answerCallbackQuery({
        text: "We open from 10:00 to 22:00 on weekdays and from 10:00 to 23:00 on weekends",
        show_alert: true,
    });
}));
// starting bot
exports.bot.start();
