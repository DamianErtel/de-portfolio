import { createContext } from "react";

export interface LocationContextProps {
  scrollIndex: number;
  location: Location | null;
}

export const LocationContext = createContext<LocationContextProps>({
  scrollIndex: 0,
  location: null,
});
