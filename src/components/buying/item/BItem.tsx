import React from "react";
import styled from "styled-components";

function BItem() {
  return (
    <Wrap>
      <dl>
        <dt>
          거래번호<span>P000011914K</span>
        </dt>
        <dd>
          <strong className="title">구매금액</strong>
          <p>
            <span className="fcRed">1,000,000</span>
            <em> KRW(원)</em>
          </p>
        </dd>
        <dd>
          <strong className="title">구매수량</strong>
          <p>
            <span className="fcBlue">100</span>
            <em> 딜링(DLC)</em>
          </p>
        </dd>
        <dd>
          <strong className="title">개당가격</strong>
          <p>
            <span>10,000</span>
            <em> KRW(원)</em>
          </p>
        </dd>
      </dl>
      <p className="infoTxtBox">
        <strong>거래신청취소</strong>
        <span>취소일시 2019.10.18 21:23</span>
      </p>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 45px 10px 15px;
  padding-top: 15px !important;
  background: #fff;
  margin-bottom: 15px;

  & > .infoTxtBox {
    height: 45px;
    line-height: 15px;
    padding: 15px 10px;
    background: #f6f6f6;
    letter-spacing: -1px;

    & > strong {
      font-size: 0.857em;
      color: #666;
    }

    & > span {
      display: block;
      float: right;
      height: 15px;
    }
  }

  & > dl {
    width: 100%;
    height: auto;
    padding-bottom: 10px;

    & > dt {
      height: 30px;
      line-height: 16px;
      color: #666;
      font-size: 0.928em;
      padding-bottom: 13px;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 5px;

      & > span {
        display: block;
        float: right;
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        font-weight: 600;
      }
    }

    & > dd {
      height: 32px;
      line-height: 32px;

      & > .title {
        display: block;
        float: left;
        width: auto;
        height: 32px;
        font-size: 0.928em;
        padding-left: 10px;
        background: url(/sw/resources/img/icon-dot-gray.png) no-repeat left center;
        background-size: 5px;
      }

      & > p {
        float: right;
        width: auto;
        height: 32px;
        font-size: 1em;

        & > .fcRed {
          font-weight: 600;
          color: #c80c0c;
        }

        & > .fcBlue {
          font-weight: 600;
          color: #2d28af;
        }
      }
    }
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

    & > span {
      font-weight: 400;
      color: #666;
    }
  }
`;

export default BItem;
