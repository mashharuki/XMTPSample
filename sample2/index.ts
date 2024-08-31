import { Client } from "@xmtp/xmtp-js";
import { Wallet } from "ethers";
 
/**
 * メインスクリプト
 */
const main = async() => {
    // You'll want to replace this with a wallet from your application
    const signer = Wallet.createRandom();
    // Create the client with your wallet. This will connect to the XMTP development network by default
    const xmtp = await Client.create(signer, { env: "dev" });

    console.log("Client created", xmtp.address);

    const WALLET_TO = "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072"
    const isOnProdNetwork = await xmtp.canMessage(WALLET_TO);
    console.log("Can message: " + isOnProdNetwork);

    // Start a conversation with XMTP
    const conversation = await xmtp.conversations.newConversation(
        WALLET_TO,
    );

    // Load all messages in the conversation
    const messages = await conversation.messages();
    console.log("messages:", messages)
    // Send a message
    await conversation.send("gm");

    // Listen for new messages in the conversation
    for await (const message of await conversation.streamMessages()) {
        console.log(`[${message.senderAddress}]: ${message.content}`);
    }
}

main();