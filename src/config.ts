// src/config.ts

import { http, createConfig } from "wagmi";
import { monadTestnet } from "wagmi/chains";

export const config = createConfig({
  chains: [monadTestnet],
  transports: {
    [monadTestnet.id]: http(),
  },
});