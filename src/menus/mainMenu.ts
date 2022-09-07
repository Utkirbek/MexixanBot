import { Menu } from "@grammyjs/menu";
import { onCommandInfo } from "../handlers/commands/onCommandInfo";
import { onCommandHelp } from "../handlers/commands/onCommandHelp";

export  const mainMenu = new Menu("main-menu")
  .text("Info", onCommandInfo)
  .row()
  .text("Help", onCommandHelp)
  .row()
  .text("Help", onCommandHelp)
  .row()
  .text("Help", onCommandHelp)
  .row()
  .text("Help", onCommandHelp);

