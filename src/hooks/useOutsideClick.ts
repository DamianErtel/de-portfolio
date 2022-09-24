import { RefObject, useEffect } from "react";

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>;
  callback: () => void;
  currentState: boolean;
}

function useOutsideClick({
  ref,
  callback,
  currentState,
}: UseOutsideClickProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        currentState
      ) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currentState, ref, callback]);
}

export default useOutsideClick;
