import { Menu } from "@grammyjs/menu";
import { onCommandInfo } from "../handlers/commands/onCommandInfo";
import { onCommandHelp } from "../handlers/commands/onCommandHelp";
import { InlineKeyboard } from "grammy";
export const mainMenu = new InlineKeyboard()
  .url(
    "Menu",
    "https://drive.google.com/file/d/1K_SessS8Dx7nQP1DaDYiBSma1ZzG84ia/view"
  ).row()
  .text("Info", "info").row()
  .text("Help", "help").row()
  .text("About", "about").row()
  .text("Help", "help");



