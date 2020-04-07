import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import Header from "components/common/header";
import Footer from "components/common/footer";

interface Props {
  children?: React.ReactNode;
  stack?: boolean;
  navPage?: boolean;
  pageNum?: number;
}

function BaseTemplate({ children, stack, navPage, pageNum }: Props) {
  const [prevPos, setPrevPos] = useState<number>(window.pageYOffset);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = useCallback(() => {
    const currentPos = window.pageYOffset;
    const vis = prevPos > currentPos;
    setPrevPos(currentPos);
    setVisible(vis);
  }, [prevPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Wrap>
      <Header visible={visible} stack={stack} navPage={navPage}></Header>
      <Section>{children}</Section>
      <Footer visible={visible} pageNum={pageNum}></Footer>
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

export default BaseTemplate;
