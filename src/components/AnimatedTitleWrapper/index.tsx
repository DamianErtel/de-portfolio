import React, { ReactNode, useEffect, useRef } from "react";
import { useAnimationControls, useInView } from "framer-motion";
import { TitleWrapper } from "../../commonStyles";

interface AnimatedTitleWrapperProps {
  children: ReactNode;
}

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  inView: { opacity: 1, y: 0 },
};

const AnimatedTitleWrapper = ({ children }: AnimatedTitleWrapperProps) => {
  const wrapperRef = useRef(null);
  const controls = useAnimationControls();
  const inView = useInView(wrapperRef);

  useEffect(() => {
    if (inView) {
      controls.start("inView").then(null).catch(null);
    }
  }, [controls, inView]);

  return (
    <TitleWrapper
      ref={wrapperRef}
      initial="initial"
      transition={{ duration: 0.3, delay: 0.1 }}
      animate={controls}
      variants={variants}
    >
      {children}
    </TitleWrapper>
  );
};

export default AnimatedTitleWrapper;
