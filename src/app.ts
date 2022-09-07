
import { Bot } from "grammy";
import { onCommandInfo } from "./handlers/commands/onCommandInfo";
import { onCommandStart } from "./handlers/commands/onCommandStart";
import { onCommandHelp } from "./handlers/commands/onCommandHelp";
import { mainMenu } from "./menus/mainMenu";
import * as dotenv from "dotenv";

dotenv.config();

export  const bot = new Bot(`${process.env.BOT_TOKEN}`);
// invoking menues
bot.use(mainMenu)

// Commands
bot.command("info", onCommandInfo) 
bot.command("start", onCommandStart);
bot.command("help", onCommandHelp);


// starting bot
bot.start();