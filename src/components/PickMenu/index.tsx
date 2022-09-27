import React, { useState } from "react";
import {
  ButtonsWrapper,
  Divider,
  MenuWrapper,
  TextButton,
  TextWrapper,
} from "./PickMenu.styled";
import { IContent, IEmployer, NonEmptyArr } from "../../types";

interface PickMenuProps {
  content: NonEmptyArr<IContent | IEmployer>;
}

const PickMenu = ({ content }: PickMenuProps) => {
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
      <TextWrapper>{content[currentContentIndex].value}</TextWrapper>
    </MenuWrapper>
  );
};

export default PickMenu;
