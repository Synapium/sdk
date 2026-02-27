import { DataRetriever } from "../retriever/DataRetriever";
import { LiquidityRouter } from "../router/LiquidityRouter";
import { MultiSigVerifier } from "../verification/MultiSigVerifier";

interface SynapiumConfig {
  apiKey: string;
  network: string;
}

export class Synapium {
  public retriever: DataRetriever;
  public router: LiquidityRouter;
  public verifier: MultiSigVerifier;

  constructor(config: SynapiumConfig) {
    this.retriever = new DataRetriever(config.apiKey);
    this.router = new LiquidityRouter();
    this.verifier = new MultiSigVerifier();
  }
}
