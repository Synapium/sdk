import axios from "axios";
import { logger } from "../utils/logger";

export class DataRetriever {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getPrice(pair: string): Promise<number> {
    try {
      logger.info(`Fetching price for ${pair}`);

      // Example public API (replace with real aggregator/oracle)
      const response = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${pair.replace("/", "")}`
      );

      return parseFloat(response.data.price);
    } catch (error) {
      logger.error("Failed to fetch price");
      throw error;
    }
  }
}
