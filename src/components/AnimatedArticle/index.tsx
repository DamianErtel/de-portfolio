import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedArticleProps {
  children: ReactNode;
  $key: number;
}

const AnimatedArticle = ({ children, $key }: AnimatedArticleProps) => (
  <AnimatePresence mode="wait">
    <motion.article
      key={$key}
      initial={{ opacity: 0, position: "relative", bottom: 20 }}
      animate={{ opacity: 1, bottom: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ bottom: -200, opacity: 0 }}
      transition={{
        bottom: { duration: 0.425 },
        opacity: { duration: 0.35 },
      }}
    >
      {children}
    </motion.article>
  </AnimatePresence>
);

export default AnimatedArticle;
