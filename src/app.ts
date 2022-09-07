
import { Bot, CallbackQueryContext, Context, InlineKeyboard } from "grammy";
import { onCommandInfo } from "./handlers/commands/onCommandInfo";

import { onCommandHelp } from "./handlers/commands/onCommandHelp";

import * as dotenv from "dotenv";


dotenv.config();

export type MyAppContext = Context 
    

export  const bot = new Bot<MyAppContext>(`${process.env.BOT_TOKEN}`);
// invoking menues





// // Commands
bot.command("info", onCommandInfo) 

bot.command("help", onCommandHelp);

const inlineKeyboard = new InlineKeyboard()
  .url("מדריך למשתמש 👨‍🏫", "https://t.me/jakhongirabdukhamidov")
  .row()
  .url(
    "תפריט 📃",
    "https://drive.google.com/file/d/1K_SessS8Dx7nQP1DaDYiBSma1ZzG84ia/view"
  )
  .row()
  .text("שעות פעילות ⏰", "working-hours")
  .row()
  .url("עמוד רשמי ™️", "https://t.me/jakhongirabdukhamidov")
  .row()
  .url("שירות לקוחות 👩‍💻", "https://t.me/jakhongirabdukhamidov");

// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
    await ctx.replyWithVideo(
      "BAACAgQAAxkBAAMaYxhP8VrBqt9e-CQdWzvPIa8uCooAAh0DAALZ7DxSPbbGMQ2IDl0pBA",
      {
        caption:
          `ברוכים הבאים ל-™The Kosher Plug
שירות משלוחי קנאביס 
בלוס אנג׳לס 🚚`,
        reply_markup: inlineKeyboard,
      }
    );
  
});

// Wait for click events with specific callback data.
bot.callbackQuery("working-hours", async (ctx) => {
  await ctx.answerCallbackQuery({
    text: "We open from 10:00 to 22:00 on weekdays and from 10:00 to 23:00 on weekends",
    show_alert : true,
  });
});

// starting bot
bot.start();