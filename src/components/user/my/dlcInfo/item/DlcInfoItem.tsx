import React from "react";
import styled from "styled-components";

function DlcInfoItem() {
  return (
    <Wrap className="dealListBox">
      <p className="dateInfo">2020.04.04</p>
      <dl className="pb0">
        <dd>
          <span className="acc use">사용</span>
          {/* 클래스에 use빼면 적립 */}
          <strong> 선물주기</strong>
        </dd>
        <dd>
          <span className="fc666 fs13">wg8255(김충근)님에게 선물보냄</span>
          <p>
            <strong className="fcRed">-2,000</strong>
            {/* 위에 클래스에 fcBlue1 넣으면 적립 */}
            <em> (DLC)</em>
          </p>
        </dd>
      </dl>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  height: auto;
  padding: 45px 10px 15px;
  background: #fff;
  margin-bottom: 15px;
  float: left;
  width: 49.5%;
  margin-right: 1%;

  :nth-child(odd) {
    margin-right: 0px;
  }

  & > .dateInfo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 31px;
    line-height: 31px;
    padding: 0 10px;
    background: #e7e7e7;
    font-size: 0.857em;
    font-weight: 600;
  }

  & > dl {
    width: 100%;
    height: auto;
    padding-bottom: 10px;

    & > dd {
      height: 32px;
      line-height: 32px;

      & > span.acc {
        display: inline-block;
        height: 16px;
        line-height: 14px;
        padding-bottom: 1px;
        border: 1px solid #adc4fa;
        border-radius: 8px;
        margin: 0 0 3px;
        padding: 0 10px;
        color: #0f4cd7;
        font-size: 11px;
        font-weight: 600;
      }

      & > span.acc.use {
        border: 1px solid #f69696;
        color: #c80c0c;
      }

      & > p {
        float: right;
        width: auto;
        height: 32px;
        font-size: 1em;

        & > em {
          font-size: 0.928em;
        }
      }
    }
  }

  ${({ theme }) => theme.media.mobile`
    float: none;
    width: 100%;
    margin-right: 0%;
  `}
`;

export default DlcInfoItem;
