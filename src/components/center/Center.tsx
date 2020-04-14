import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import TmpIcon from "assets/tmp.png";

function Center() {
  const menus = [
    { uri: "/center/notice", name: "공지사항" },
    { uri: "/center/question", name: "자주묻는 질문" },
    { uri: "/center/inquiry", name: "1:1 문의" },
    { uri: "/center/terms", name: "약관및 정책안내" },
    { uri: "/center", name: "이용가이드" },
  ];
  return (
    <Wrap>
      <ul className="customerIndex">
        {menus.map((data, idx) => (
          <li key={idx}>
            <div>
              <Link to={data.uri}>{data.name}</Link>
            </div>
          </li>
        ))}
        <li>
          <div>
            고객센터<strong>1800-4951</strong>
          </div>
        </li>
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100%;
  max-width: 100% !important;
  margin: 0 auto;
  padding: 10px 0 60px !important;

  & > .customerIndex {
    width: 100%;
    margin-top: -10px;

    & > li {
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

        & > strong {
          float: right;
          display: block;
          height: 60px;
          line-height: 60px;
          color: #3029d7;
        }
      }
    }
  }
`;

export default Center;
