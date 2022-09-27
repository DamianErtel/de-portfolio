import { useContext, useEffect } from "react";
import { LocationContext } from "../utils/LocationContext";

interface UseChangeSectionIndexProps {
  isVisible: boolean;
  index: number;
}

const useChangeSectionIndex = ({
  isVisible,
  index,
}: UseChangeSectionIndexProps) => {
  const { setScrollIndex } = useContext(LocationContext);

  useEffect(() => {
    if (isVisible) {
      setScrollIndex(index);
    }
  }, [index, setScrollIndex, isVisible]);
};

export default useChangeSectionIndex;
