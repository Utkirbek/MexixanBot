import { Context } from "grammy";
import { mainMenu } from "../../menus/mainMenu";

export const onCommandStart = async (ctx: Context) => {
  await ctx.reply("Check out this menu:", { reply_markup: mainMenu });
};
