import React from "react";
import styled from "styled-components";
import { Dealing } from "stores/market/types";

import TmpIcon from "assets/tmp.png";
import regex from "lib/regex";

interface Props {
  product: Dealing;
}

function BuyingDetail({ product }: Props) {
  const getCtoCDay = () => {
    if (product) {
      const today = new Date();
      const createdDay = new Date(product.created_at);
      const gap = today.getTime() - createdDay.getTime();
      const res = Math.floor(gap / (1000 * 60 * 60 * 24));
      return res;
    }
  };
  return (
    <Wrap>
      <div className="dlcViewLabel mb15">
        <div className="basicWd">
          <div className="boxL">{product ? product.user.username : null}</div>
          <span>{getCtoCDay()}일전 등록</span>
        </div>
      </div>
      <div className="dlcViewInfo mb5">
        <div>
          <span>구매가능 딜량수량</span>
          <strong>
            {product ? regex.moneyRegex(product.quantity) : null}
            <em>DLC</em>
          </strong>
        </div>
      </div>
      <div className="dlcViewInfo mb15">
        <div>
          <span>1딜링 당 구매가격</span>
          <strong className="won">
            {product ? regex.moneyRegex(product.price) : null}
            <em>KRW</em>
          </strong>
        </div>
      </div>
      <div className="dlcViewQty">
        <div>
          <h3>구매가격</h3>
          <div className="krw">
            <strong className="won">
              {product ? regex.moneyRegex(product.price * product.quantity) : null}
              <em>KRW</em>
            </strong>
          </div>
        </div>
      </div>
      <form>
        <div className="wishBox">
          <button className="wishBtn"></button>
          <div className="btnBox">
            <button className="btn h35 br2">구매신청</button>
          </div>
        </div>
      </form>
      <div className="plr10 basicWd pt15">
        <p className="cautionTxt">판매자 승인완료 후 구매를 진행할 수 있습니다.</p>
      </div>
      <div className="footBtn mt30">
        <div className="basicWd">
          인증상태
          <button className="active">본인인증</button>
          <button>계좌인증</button>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100%;
  margin: 0 auto;
  margin-top: -10px !important;
  max-width: 100% !important;
  padding: 10px 0 60px !important;

  & > form {
    & > .wishBox {
      max-width: 1080px;
      height: 35px;
      padding: 0 10px;
      margin: 0 auto;

      & > .wishBtn {
        float: left;
        width: 35px;
        height: 35px;
        background: #fff url(${TmpIcon}) no-repeat center center;
        background-size: 21px 19px;
        border: 1px solid #e7e7e7;
        border-radius: 2px;
      }

      & > .btnBox {
        margin-left: 44px;
        height: 35px;

        & > .btn {
          width: 100%;
        }
      }
    }
  }

  & > .dlcViewLabel {
    width: 100%;
    height: 55px;
    background: #fff;
    padding: 0 10px;

    & > div {
      & > .boxL {
        float: left;
        height: 55px;
        line-height: 55px;
        font-weight: 600;
        font-size: 1.071em;
      }

      & > span {
        display: block;
        float: right;
        height: 55px;
        line-height: 55px;
        color: #666;
        font-size: 0.857em;
      }
    }
  }

  & > .dlcViewInfo {
    max-width: 1080px;
    padding: 0 10px;
    margin: 0 auto;

    & > div {
      width: 100%;
      height: 80px;
      background: #fff;
      text-align: center;
      padding-top: 15px;

      & > .won {
        background: url(${TmpIcon}) no-repeat left center;
        background-size: 20px;
      }

      & > span {
        display: block;
        color: #666;
        font-size: 1.071em;
        margin-bottom: 5px;
      }

      & > strong {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding-left: 27px;
        background: url(${TmpIcon}) no-repeat left center;
        background-size: 20px;
        color: #000;
        font-size: 1.856em;
        font-family: NanumSquare;

        & > em {
          font-weight: 300;
        }
      }
    }
  }

  & > .dlcViewQty {
    max-width: 1080px;
    padding: 0 10px;
    margin: 0 auto 15px;

    & > div {
      width: 100%;
      background: #fff;

      & > h3 {
        width: 100%;
        height: 31px;
        line-height: 31px;
        background: #e7e7e7;
        padding: 0 10px;
        color: #666;
        font-size: 0.857em;
        font-weight: 400;
      }

      & > .krw {
        width: 100%;
        height: auto;
        min-height: auto;
        background: #fff;
        text-align: center;
        padding: 15px 0;
        & > strong {
          background: url(${TmpIcon}) no-repeat left center;
          background-size: 20px;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          padding-left: 27px;

          color: #000;
          font-size: 1.856em;
          font-family: NanumSquare;
          & > em {
            font-weight: 300;
          }
        }
      }
    }
  }

  & > .footBtn {
    max-width: 1080px;
    height: 51px;
    line-height: 25px;
    padding: 12px 10px;
    font-size: 0.786em;
    font-weight: 600;
    margin: 0 auto;

    & > div {
      & > button {
        width: 60px;
        height: 25px;
        line-height: 22px;
        border: 1px solid #ccc;
        color: #666;
        background: #f6f6f6;
        text-align: center;
        margin-left: 3px;
      }

      & > button.active {
        border: 1px solid #bfbcf9;
        color: #3029d7;
        background: #fff;
      }
    }
  }

  ${({ theme }) => theme.media.mobile`
    & > .footBtn {
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
& > .footBtn {
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

export default BuyingDetail;
