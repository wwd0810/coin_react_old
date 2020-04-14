import React, { useState, useCallback } from "react";
import styled from "styled-components";
import CoinItem from "components/home/coinItem";

function MyLike() {
  const [state, setState] = useState({
    modify: false,
  });

  const onModify = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      if (state.modify) setState({ ...state, modify: false });
      else setState({ ...state, modify: true });
    },
    [state],
  );
  return (
    <Wrap className="wd100p pdt mt-10" id="wrap">
      <div className="basicWd plr10 pt15">
        <ul className="listBox">
          {/* <CoinItem />
          <CoinItem />
          <CoinItem />
          <CoinItem /> */}
        </ul>
        <div className="btnWrap basicWd pt10">
          <button className="btn h42 w49 list_more">더보기</button>
        </div>
      </div>
      <div className="footBtn">
        {state.modify ? (
          <div className="basicWd">
            <button>전체선택</button>
            <button>선택삭제</button>
            <button onClick={onModify}>완료</button>
          </div>
        ) : (
          <div className="basicWd">
            <button onClick={onModify}>편집</button>
          </div>
        )}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  ${({ theme }) => theme.media.mobile`
 & .footBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
}
`}
  ${({ theme }) => theme.media.tablet`
    & .footBtn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
}
`}
`;

export default MyLike;
