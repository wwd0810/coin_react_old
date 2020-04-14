import React, { useState } from "react";
import styled from "styled-components";
import NoticeItem from "./item";

function CenterNotice() {
  const [state, setState] = useState({
    open: 0,
  });

  const openChange = (idx: number) => {
    if (state.open === idx) setState({ ...state, open: 0 });
    else setState({ ...state, open: idx });
  };

  return (
    <Wrap className="wd100p pdt" id="wrap">
      <ul className="boardList">
        <NoticeItem open={state.open === 1} onClick={openChange} />
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  & > .boardList {
    width: 100%;
    margin-top: -10px;
  }
`;

export default CenterNotice;
