import { Client } from "@xmtp/xmtp-js";
import { ethers, Wallet } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

const {
    PRIVATE_KEY
} = process.env;
 
/**
 * メインスクリプト
 */
const main = async() => {
    // You'll want to replace this with a wallet from your application
    const signer = new ethers.Wallet(PRIVATE_KEY!);
    // Create the client with your wallet. This will connect to the XMTP development network by default
    const xmtp = await Client.create(signer, { env: "dev" });

    console.log("Client created", xmtp.address);
}

main();