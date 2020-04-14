import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import TmpIcon from "assets/tmp.png";

function CenterTerm() {
  const terms = [
    { idx: 0, name: "ONDLC 이용약관" },
    { idx: 1, name: "ONDLC 개인정보취급방침" },
    { idx: 2, name: "민감정보 - ONDLC 이용약관 관련" },
    { idx: 3, name: "민감정보 - ONDLC 제3자 수집 이용 제공 정책 관련" },
    { idx: 4, name: "ONDLC 제3자 수집 이용 제공 정책" },
    { idx: 5, name: "우고스 이용약관" },
    { idx: 6, name: "우고스 전자금융거래 이용약관" },
    { idx: 7, name: "우고스 개인정보취급방침" },
    { idx: 8, name: "우고스 위치정보 이용약관" },
    { idx: 9, name: "민감정보 - 우고스 이용약관" },
  ];

  return (
    <Wrap>
      <ul>
        {terms.map((data, idx) => (
          <Item key={idx}>
            <div>
              <Link to={`/center/terms/detail/${data.idx}`}>{data.name}</Link>
            </div>
          </Item>
        ))}
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 100% !important;
  height: 100%;
  margin: 0 auto;
  padding: 10px 0 60px !important;

  & > ul {
    width: 100%;
    margin-top: -10px;
    margin-bottom: 60px !important;
  }
`;

const Item = styled.li`
  height: 61px;
  border-bottom: 1px solid #e7e7e7;
  background: #fff;

  & > div {
    position: relative;
    max-width: 1080px;
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
    margin: 0 auto;
    font-weight: 600;

    & > a {
      display: block;
      width: 100%;
      height: 60px;
      background: url(${TmpIcon}) no-repeat right center;
      background-size: 8px 14px;
    }
  }
`;

export default CenterTerm;
