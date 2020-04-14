import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import TmpIcon from "assets/tmp.png";
import CoinItem from "components/home/coinItem";
import { User, Account } from "stores/users/types";
import regex from "lib/regex";

interface Props {
  user?: { user: User; account: Account };
}

function MyWallet({ user }: Props) {
  return (
    <Wrap>
      <div className="myGradeOut">
        <div className="inGrade">
          <p>
            <strong>{user?.user.username}</strong> 님<br />
            반갑습니다.
          </p>
          <Link to="/my/setting">회원정보</Link>
        </div>
        <div className="inGrade reverse">
          <img src={TmpIcon} alt="" />
          <br />
          <Link to="/my/auth">보안등급</Link>
        </div>
      </div>
      <div className="myTotalWalletOut">
        <div className="inBox">
          <img src={TmpIcon} alt="" />
          <p>
            <span className="bank">나의 계좌번호</span>
          </p>
          <strong>{user?.account.id}</strong>
        </div>
      </div>
      <div className="myTotalWalletOut">
        <div className="inBox">
          <img src={TmpIcon} alt="" />
          <p>
            <span>보유딜링</span>
            <strong>{regex.moneyRegex(user?.account.balance!)}</strong> DLC
          </p>
          <Link to="/my/dlcinfo">내역보기</Link>
        </div>
      </div>
      <div className="myDealing">
        <div className="inBox">
          <span>판매진행 중</span>
          <br />
          <Link to="/selling">0</Link>
        </div>
        <div className="inBox reverse">
          <span>구매진행 중</span>
          <br />
          <Link to="/buying">0</Link>
        </div>
      </div>
      <ul className="myCsLinkOut">
        <li>
          <Link to="/my/like">찜한물품</Link>
        </li>
        <li>
          <Link to="/center/inquiry">1:1 문의</Link>
        </li>
        <li>
          <Link to="/center/notice">공지사항</Link>
        </li>
        <li>
          <Link to="/center">고객센터</Link>
        </li>
      </ul>
      <div className="basicWd">
        <p>
          <strong>최근 본 물품</strong>
        </p>
        <ul className="listBox">
          {/* <CoinItem />
          <CoinItem />
          <CoinItem />
          <CoinItem />
          <CoinItem /> */}
        </ul>
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

  & > .myGradeOut {
    max-width: 1080px;
    height: 165px;
    padding: 15px 10px 15px;
    margin: 0 auto;

    & > .inGrade {
      float: left;
      width: 49.5%;
      height: 100%;
      padding-top: 25px;
      text-align: center;
      font-size: 0.857em;
      background: #fff;
      border-radius: 2px;

      & > p {
        height: 60px;
        line-height: 20px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #666;
        padding: 10px 15px 10px;

        & > strong {
          color: #000;
          font-size: 15px;
        }
      }

      & > a {
        display: inline-block;
        width: 90px;
        height: 25px;
        line-height: 23px;
        border: 1px solid #e7e7e7;
        border-radius: 2px;
        text-align: center;
      }
    }

    & > .reverse {
      float: right !important;

      & > img {
        width: 48px;
        height: 60px;
        margin-bottom: 10px;
      }
    }
  }

  & > .myTotalWalletOut {
    width: 100%;
    height: 80px;
    background: #fff;
    padding: 15px 10px;
    margin-bottom: 5px;

    & .inBox {
      position: relative;
      max-width: 1060px;
      height: 100%;
      margin: 0 auto;

      & > img {
        float: left;
        width: 50px;
        height: 50px;
        vertical-align: middle;
      }

      & > p {
        margin-left: 60px;
        padding-right: 70px;

        & > span {
          display: block;
          height: 20px;
          line-height: 20px;
          color: #757575;
          font-size: 1.071em;
        }
        & > strong {
          font-size: 1.428em;
        }

        & > .bank {
          height: 50px;
          line-height: 50px;
        }
      }

      & > strong {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 70px;
        height: 100%;
        line-height: 50px;
        padding-right: 20px;
        color: #333;
      }

      & > a {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 70px;
        height: 100%;
        line-height: 50px;
        background: url(${TmpIcon}) no-repeat right center;
        background-size: 14px 29px;
        padding-right: 20px;
        color: #999;
        font-size: 0.857em;
      }
    }
  }

  & > .myDealing {
    max-width: 1080px;
    height: 105px;
    padding: 10px 10px 15px;
    margin: 0 auto;

    & > .inBox {
      float: left;
      width: 50%;
      height: 100%;
      padding-top: 10px;
      text-align: center;
      color: #fff;
      background: #2d28af;

      & > span {
        display: inline-block;
        font-size: 0.857em;
        padding-bottom: 3px;
        border-bottom: 1px solid #fff;
      }

      & > a {
        display: inline-block;
        color: #fff;
        font-size: 2.143em;
        font-weight: 600;
        font-family: NanumSquare;
      }
    }

    & > .reverse {
      background: #283242;
    }
  }

  & > .myCsLinkOut {
    max-width: 1080px;
    padding: 0 10px 10px;
    margin: 0 auto;
    overflow: hidden;

    & > li {
      float: left;
      width: 49.85%;
      height: 40px;
      margin-right: 0.3%;
      background: #fff url(${TmpIcon}) no-repeat right 10px center;
      background-size: 8px 14px;
      margin-bottom: 5px;

      :nth-child(even) {
        margin-right: 0;
      }

      & > a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 40px;
        padding: 0 25px 0 15px;
        font-size: 0.857em;
        font-weight: 600;
      }
    }
  }

  & > .basicWd {
    padding-left: 10px !important;
    padding-right: 10px !important;
    max-width: 1080px;

    height: auto;
    margin: 0 auto;
    overflow: hidden;

    & > p {
      margin-bottom: 10px !important;

      & > strong {
        font-size: 12px !important;
        line-height: 18px;
      }
    }

    & > .listBox {
      width: 100%;
      padding-right: 1px;
      height: auto;
      overflow: hidden;
    }
  }
`;

export default MyWallet;
