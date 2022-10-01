import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  ButtonsWrapper,
  Divider,
  MenuWrapper,
  TextButton,
  TextWrapper,
} from "./PickMenu.styled";
import { IContent, IEmployer, IProject, NonEmptyArr } from "../../types";

interface PickMenuProps {
  content: NonEmptyArr<IContent | IEmployer | IProject>;
  markdown: boolean;
}

const PickMenu = ({ content, markdown }: PickMenuProps) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  return (
    <MenuWrapper>
      <ButtonsWrapper>
        {content.map(({ name, id }, index) => (
          <TextButton
            $active={currentContentIndex === index}
            type="button"
            key={id}
            onClick={() => setCurrentContentIndex(index)}
          >
            <span>{name}</span>
          </TextButton>
        ))}
      </ButtonsWrapper>
      <Divider />
      {markdown ? (
        <TextWrapper>
          <AnimatePresence mode="wait">
            <motion.article
              key={currentContentIndex}
              initial={{ opacity: 0, position: "relative", bottom: 20 }}
              animate={{ opacity: 1, bottom: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ bottom: -200, opacity: 0 }}
              transition={{
                bottom: { duration: 0.425 },
                opacity: { duration: 0.35 },
              }}
            >
              <Markdown>{content[currentContentIndex].value}</Markdown>
            </motion.article>
          </AnimatePresence>
        </TextWrapper>
      ) : (
        <TextWrapper>
          <AnimatePresence mode="wait">
            <motion.article
              key={currentContentIndex}
              initial={{ opacity: 0, position: "relative", bottom: 20 }}
              animate={{ opacity: 1, bottom: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ bottom: -100, opacity: 0 }}
              transition={{
                bottom: { duration: 0.425 },
                opacity: { duration: 0.35 },
              }}
            >
              {content[currentContentIndex].value}
            </motion.article>
          </AnimatePresence>
        </TextWrapper>
      )}
    </MenuWrapper>
  );
};

export default PickMenu;
