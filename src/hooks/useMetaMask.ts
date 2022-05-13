import detectEthereumProvider from "@metamask/detect-provider";
import { useState } from "react";

interface UseMetaMask{
  detectMetaMask: boolean;
  connectMetaMask: () => Promise<boolean>;
};

export const useMetaMask = () => {
  const [detectMetaMask, setDetectMetaMask] = useState<boolean>(false);

  const connectMetaMask = async (): Promise<void> => {
    const provider = await detectEthereumProvider();
    console.log("1 detectMetaMask", detectMetaMask);

    if (provider) {
      setDetectMetaMask(true);
      console.log("2 detectMetaMask", detectMetaMask);

      await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [
          {
            eth_accounts: {}
          }
        ]
      });
  

    }
  }

  return { detectMetaMask, connectMetaMask };
}