import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
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
          <Markdown>{content[currentContentIndex].value}</Markdown>
        </TextWrapper>
      ) : (
        <TextWrapper>{content[currentContentIndex].value}</TextWrapper>
      )}
    </MenuWrapper>
  );
};

export default PickMenu;
