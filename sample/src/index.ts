import { run, HandlerContext } from "@xmtp/message-kit";

run(async (context: HandlerContext) => {
  // Get the message and the address from the sender
  const { content, sender } = context.message;

  console.log("sender:", sender);
  console.log("content:", content);

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`gm`);

  await context.sendTo("test", ["0x2B38Fc7a2Ec9A732583630b20bAab04aE2458f56"]);
});
