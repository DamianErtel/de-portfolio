import { createContext } from "react";

export interface LocationContextProps {
  scrollIndex: number;
  setScrollIndex: (c: number) => void;
}

export const LocationContext = createContext<LocationContextProps>({
  scrollIndex: 0,
  setScrollIndex: () => {},
});
