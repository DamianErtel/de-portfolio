import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useChangeLocationHashOnView = (hash: string) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      window.location.hash = hash;
    }
  }, [hash, inView]);

  return ref;
};

export default useChangeLocationHashOnView;
