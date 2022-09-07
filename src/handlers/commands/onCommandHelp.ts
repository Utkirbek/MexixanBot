import { Context } from "grammy";

export const onCommandHelp = async (ctx: Context) => {
  await ctx.reply("Do you need help?\n\n /start - Start the bot\n /info - Get info about the bot\n /help - Get help about the bot\n\nI am still in development, so I can't do much, but I will be able to do more in the future, so stay tuned!");
};
