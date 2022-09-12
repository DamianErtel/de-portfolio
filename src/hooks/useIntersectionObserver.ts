import { useEffect, useRef, useState } from "react";
import useChangeSectionIndex from "./useChangeSectionIndex";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  index: number;
}

function useIntersectionObserver({
  threshold = 0.5,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
  index = 0,
}: Args) {
  const elementRef = useRef(null);

  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  console.log("XD");

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);

  useChangeSectionIndex({ isVisible: !!entry?.isIntersecting, index });

  return { elementRef };
}

export default useIntersectionObserver;
