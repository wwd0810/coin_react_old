import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Footer from "components/common/footer";
import Header from "components/common/header";

function StackTemplate() {
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
      <Header stack={true} visible={visible}></Header>
      <Footer visible={visible}></Footer>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default StackTemplate;
