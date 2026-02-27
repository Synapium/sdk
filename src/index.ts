import dotenv from "dotenv";
import { Synapium } from "./core/Synapium";

dotenv.config();

async function main() {
  const client = new Synapium({
    apiKey: process.env.SYNAPIUM_KEY || "",
    network: process.env.NETWORK || "mainnet"
  });

  const price = await client.retriever.getPrice("ETHUSDT");
  console.log("ETH Price:", price);

  const route = await client.router.findBestRoute({
    fromToken: "ETH",
    toToken: "USDC",
    amount: "1"
  });

  console.log("Best Route:", route);

  const verified = client.verifier.verify(["sig1", "sig2"], 2);
  console.log("MultiSig Verified:", verified);
}

main();
