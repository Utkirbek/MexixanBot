import {  Context } from "grammy";

export const onCommandInfo = async (ctx: Context) => {
  await ctx.reply("Hello, I am Delivery Bot, I can help you to find food , buy and deliver them in the best price \nI am still in development, so I can't do much, but I will be able to do more in the future, so stay tuned!");
};
