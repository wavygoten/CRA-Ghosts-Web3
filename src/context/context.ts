import { createContext } from "react";

interface ContextProps {
  init: () => void;
  status: string | undefined;
  address: string | undefined;
  contractAddress: string;
  errorMessage: string | undefined;
  mint: () => void;
}

export const Context = createContext<Partial<ContextProps>>({});
