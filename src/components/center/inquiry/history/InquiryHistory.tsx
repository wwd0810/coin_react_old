import React, { useState } from "react";
import styled from "styled-components";
import HistoryItem from "./item/HistoryItem";

function InquiryHistory() {
  const dateOptions = [
    "전체기간",
    "오늘",
    "최근 1주일",
    "최근 1개월",
    "최근 3개월",
    "6개월",
    "24개월",
    "24개월 이전",
  ];
  const statusOptions = ["전체(답변상태)", "답변완료", "미답변"];
  const [state, setState] = useState({
    open: 0,
  });
  const openChange = (idx: number) => {
    if (state.open === idx) setState({ ...state, open: 0 });
    else setState({ ...state, open: idx });
  };
  return (
    <Wrap className="pt10 mb10">
      <div className="inqAnswerTop mb10">
        <form>
          <select>
            {dateOptions.map((data, idx) => (
              <option key={idx}>{data}</option>
            ))}
          </select>
          <select>
            {statusOptions.map((data, idx) => (
              <option key={idx}>{data}</option>
            ))}
          </select>
        </form>
        <p className="fc666 pt10 tac">
          고객님께서 작성하신 질문은 관리자가 답변을 한 후에는 수정 또는 삭제하실 수 없습니다.
        </p>
      </div>
      <ul className="inqList">
        <HistoryItem open={state.open === 1} onClick={openChange} />
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  /* padding: 10px; */
  /* background: #fff; */
  overflow: hidden;

  /* padding-bottom: 0px; */
  margin-top: -10px;

  & > .inqAnswerTop {
    padding: 10px;
    background: #fff;
    overflow: hidden;

    padding-top: 20px;

    & > form {
      & > select {
        float: left;
        width: 49.5%;
        margin-left: 1%;

        :first-child {
          margin-left: 0;
        }
      }
    }

    & > p {
      clear: both;
    }
  }

  & > .inqList {
    width: 100%;
  }

  ${({ theme }) => theme.media.mobile`
  & > .inqList {
    padding: 0 10px;
  }
  `}
  ${({ theme }) => theme.media.tablet`
  & > .inqList {
    padding: 0 10px;
  }
     
  `}
`;

export default InquiryHistory;
