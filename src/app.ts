
import { Bot, CallbackQueryContext, Context, InlineKeyboard } from "grammy";
import { onCommandInfo } from "./handlers/commands/onCommandInfo";

import { onCommandHelp } from "./handlers/commands/onCommandHelp";
import axios from "axios";
import * as dotenv from "dotenv";


dotenv.config();

export type MyAppContext = Context 
    

export  const bot = new Bot<MyAppContext>(`${process.env.BOT_TOKEN}`);
// invoking menues





// // Commands


bot.on("message:contact", async (ctx) => {
    const URL = `https://kosherplugback.eu-4.evennode.com/api/user/update/${ctx.message.contact.phone_number}/${ctx.from.id}`;
    const response = await axios.get(URL);
  console.log(response);
  await ctx.reply("Thank you!");
});

bot.command("info", onCommandInfo) 
bot.command("help", onCommandHelp);

const inlineKeyboard = new InlineKeyboard()
  
  .url("הזמנה מנציג | שירות לקוחות 👩‍💻", "https://t.me/thekosherplugcs")
  .row()
  .url("תפריט 📃", "http://Kosherplugmenu.com")
  .row()
  .text("שעות פעילות ⏰", "working-hours")
  .row()
  .url("לוח מודעות 📰™️", "https://t.me/+5ukDOLDvYKI2ZGEx");
  
// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
    await ctx.replyWithVideo(
      "BAACAgIAAxkBAAM1YyDxDHuqPpFd9HBu8zpgrdNIQ3cAArIjAAIJlghJJ_GGAAFObVgfKQQ",
      {
        caption: `ברוכים הבאים ל-™The Kosher Plug
שירות משלוחי קנאביס 
בלוס אנג׳לס 🚚`,
        reply_markup: inlineKeyboard,
      }
    );
  
});

// Wait for click events with specific callback data.
bot.callbackQuery("working-hours", async (ctx) => {
  await ctx.answerCallbackQuery({
    text: `שעות פעילות

א׳-ה׳   10:00-0:00
ו׳           10:00-18:00
מוצ״ש    10:00-2:00

⛔️לא עובדים בשבתות 
וחגי ישראל⛔️`,
    show_alert: true,
  });
});

// starting bot
bot.start();