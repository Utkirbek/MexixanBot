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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const grammy_1 = require("grammy");
const onCommandInfo_1 = require("./handlers/commands/onCommandInfo");
const onCommandHelp_1 = require("./handlers/commands/onCommandHelp");
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.bot = new grammy_1.Bot(`${process.env.BOT_TOKEN}`);
// invoking menues
// // Commands
exports.bot.on("message:contact", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const URL = `https://kosherplugback.eu-4.evennode.com/api/user/update/${ctx.message.contact.phone_number}/${ctx.from.id}`;
    const response = yield axios_1.default.get(URL);
    console.log(response);
    yield ctx.reply("Thank you!");
}));
exports.bot.command("info", onCommandInfo_1.onCommandInfo);
exports.bot.command("help", onCommandHelp_1.onCommandHelp);
const inlineKeyboard = new grammy_1.InlineKeyboard()
    .webApp("חנות 🏪", "https://kosherplug.vercel.app/")
    .row()
    .url("תפריט 📃", "http://Kosherplugmenu.com")
    .row()
    .text("שעות פעילות ⏰", "working-hours")
    .row()
    .url("עמוד רשמי ™️", "https://t.me/+5ukDOLDvYKI2ZGEx")
    .row()
    .url("שירות לקוחות 👩‍💻", "https://t.me/thekosherplugcs");
// Send a keyboard along with a message.
exports.bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.replyWithVideo("BAACAgIAAxkBAAM1YyDxDHuqPpFd9HBu8zpgrdNIQ3cAArIjAAIJlghJJ_GGAAFObVgfKQQ", {
        caption: `ברוכים הבאים ל-™The Kosher Plug
שירות משלוחי קנאביס 
בלוס אנג׳לס 🚚`,
        reply_markup: inlineKeyboard,
    });
}));
// Wait for click events with specific callback data.
exports.bot.callbackQuery("working-hours", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.answerCallbackQuery({
        text: `שעות פעילות

א׳-ה׳   10:00-0:00
ו׳           10:00-18:00
מוצ״ש    10:00-2:00

⛔️לא עובדים בשבתות 
וחגי ישראל⛔️`,
        show_alert: true,
    });
}));
// starting bot
exports.bot.start();
