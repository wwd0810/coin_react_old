import React from "react";
import styled from "styled-components";

function PHItem() {
  return (
    <Wrap>
      <p className="dateInfo">
        <span>전환일시</span> 2019.10.18 21:13:52
      </p>
      <dl>
        <dd>
          <strong className="title">보낸딜링</strong>
          <p>
            <span className="fcRed">2.000</span>
            <em> (DLC)</em>
          </p>
        </dd>
        <dd>
          <strong className="title">받는사람</strong>
          <p>
            <span>wg8255</span>
            <em>(김충근)</em>
          </p>
        </dd>
      </dl>
      <div className="btnBox">
        <button>보낸선물 임시계좌</button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 45px 10px 15px;
  background: #fff;
  margin-bottom: 15px;

  & > .btnBox {
    height: auto;
    overflow: hidden;
    padding-top: 20px !important;
    padding-bottom: 0px !important;

    & > button {
      overflow: hidden;
      display: inline-block;
      color: #fff;
      letter-spacing: -0.5px;
      text-align: center;
      vertical-align: top;
      background-color: #322f78;
      border: 1px solid #322f78;
      padding: 0 5px !important;
      width: 100%;
      height: 35px;
      line-height: 33px;
      border-radius: 2px;
      font-size: 0.857em;
}
    }
  }

  & > dl {
    width: 100%;
    height: auto;

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

export default PHItem;
