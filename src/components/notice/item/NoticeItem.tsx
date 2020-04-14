import React from "react";
import styled from "styled-components";

import TmpIcon from "assets/tmp.png";

function NoticeItem() {
  return (
    <Wrap>
      <p>
        <strong>2020.03.31 11:21:50</strong>
        <button className="alarm"></button>
        <button className="delete">
          <img src={TmpIcon} alt="" />
        </button>
      </p>
      <div>
        <img src={TmpIcon} alt="" />
        <p>
          <em>구매신청</em>
          <span> 거래번호 200331-20477494</span>
          <br />
          <strong>
            foryou1sj<span>님의</span> 구매신청취소<span>를 했습니다.</span>
          </strong>
        </p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.li`
  width: 100%;
  min-height: 110px;
  margin-bottom: 20px;

  & > p {
    height: 30px;
    line-height: 14px;
    padding: 8px 10px;
    background: #e7e7e7;

    & > .alarm {
      width: 14px;
      height: 14px;
      background: url(${TmpIcon}) no-repeat center center;
      background-size: 12px 14px;
      margin: -2px 0 0 10px;
    }

    & > .delete {
      display: block;
      float: right;
      height: 14px;
      line-height: 14px;

      & > img {
        width: 10px;
      }
    }
  }

  & > div {
    height: auto;
    min-height: 80px;
    padding: 20px 10px 15px;
    background: #fff;
    overflow: hidden;

    & > img {
      float: left;
      width: 38px;
    }

    & > p {
      margin-left: 45px;
      height: auto;
      min-height: 40px;
      line-height: 20px;
      padding: 0px;
      background: none;
      letter-spacing: -1px;

      & > em {
        display: inline-block;
        height: 20px;
        line-height: 18px;
        border: 1px solid #adc4fa;
        color: #0f4cd7;
        font-weight: 600;
        font-size: 0.846em;
        padding: 0 8px;
        border-radius: 10px;
      }

      & > em.red {
        border: 1px solid #f69696;
        color: #c80c0c;
      }

      & > span {
        color: #666;
        font-size: 0.857em;
        line-height: 13px;
      }

      & > strong {
        color: #333;

        & > span {
          color: #333;
          font-weight: 400;
          font-size: 1em;
        }
      }
    }
  }
`;

export default NoticeItem;
