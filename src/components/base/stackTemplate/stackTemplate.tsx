import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Footer from "components/common/footer";
import Header from "components/common/header";

interface Props {
  children?: React.ReactNode;
  prev?: string;
}

function StackTemplate({ children, prev }: Props) {
  const [prevPos, setPrevPos] = useState<number>(window.pageYOffset);
  const [visible, setVisible] = useState<boolean>(true);

  const history = useHistory();

  const onPrevClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (!prev) history.goBack();
      else history.push(prev);
    },
    [history, prev],
  );

  const handleScroll = useCallback(() => {
    const currentPos = window.pageYOffset;
    const vis = prevPos > currentPos;

    if (currentPos > 0) {
      setPrevPos(currentPos);
      setVisible(vis);
    }
  }, [prevPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <Wrap>
      <Header stack={true} visible={visible} onPrev={onPrevClick}></Header>
      <Section>{children}</Section>
      <Footer visible={visible} pageNum={0}></Footer>
    </Wrap>
  );
}

const Wrap = styled.div``;

const Section = styled.div`
  
  width: 100%;
  
    ${({ theme }) => theme.media.mobile`

    `}
    ${({ theme }) => theme.media.tablet`

    `}
    ${({ theme }) => theme.media.desktop`
 
    `}

    ${({ theme }) => theme.media.large`s

    `}
`;

export default StackTemplate;
