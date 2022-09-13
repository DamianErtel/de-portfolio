import React, { ReactNode } from "react";
import {
  ButtonsWrapper,
  Divider,
  MenuWrapper,
  TextButton,
  TextWrapper,
} from "./PickMenu.styled";
import { IContent, NonEmptyArr } from "../../utils/content";

interface PickMenuProps {
  contentArray: NonEmptyArr<IContent>;
  currentContent: IContent;
  setCurrentContent: (value: IContent) => void;
  children: ReactNode;
}

const PickMenu = ({
  contentArray,
  currentContent,
  setCurrentContent,
  children,
}: PickMenuProps) => {
  return (
    <MenuWrapper>
      <ButtonsWrapper>
        {contentArray.map((content) => (
          <TextButton
            $active={currentContent.name === content.name}
            type="button"
            key={`content-button-${content.name}`}
            onClick={() => setCurrentContent(content)}
          >
            <span>{content.name}</span>
          </TextButton>
        ))}
      </ButtonsWrapper>
      <Divider />
      <TextWrapper>{children}</TextWrapper>
    </MenuWrapper>
  );
};

export default PickMenu;
