/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from "react";
import styled from "styled-components";
import MTDrawer from "@material-ui/core/Drawer";

import TmpIcon from "assets/tmp.png";
import { User, Account } from "stores/users/types";
import regex from "lib/regex";
import { Link } from "react-router-dom";

interface Props {
  user: { user: User; account: Account };
  openDrawer: boolean;
  onClick: (open: boolean) => void;
  userLogout: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

function Drawer({ openDrawer, onClick, user, userLogout }: Props) {
  // const onLogin = useCallback(
  //   (e: any) => {
  //     e.preventDefault();
  //     if (login) setLogin(false);
  //     else setLogin(true);
  //   },
  //   [login],
  // );
  // ================================= //
  const menus = ["우고스", "글로벌직구", "ONDLC 소개", "이용가이드"];

  const tmp = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onClick(false);
    },
    [onClick],
  );

  return (
    <MTDrawer open={openDrawer} onClose={tmp}>
      <Wrap>
        {!user ? (
          <>
            <ul className="pc">
              {menus.map((data, idx) => (
                <li key={idx}>
                  <a>{data}</a>
                </li>
              ))}
            </ul>
            <div className="beTit">
              <img src={TmpIcon} alt="1" />
              <h3>
                안녕하세요.
                <br />
                ONDLC 입니다.
              </h3>
              <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
            </div>
            <a
              href={`${process.env.REACT_APP_AUTH_API_BASE}/oauth/authorize?client_id=cashlink&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`}
            >
              로그인
            </a>
          </>
        ) : (
          <>
            <div className="topInfo">
              <p>
                안녕하세요. ONDLC입니다.
                <br />
                <strong>
                  {user.user.username}
                  <em>님</em>
                </strong>
              </p>
              <button>
                <img src={TmpIcon} alt="1" />
              </button>
            </div>
            <div className="myDlc">
              <img src={TmpIcon} alt="1" />
              <div className="boxR">
                <span>
                  나의 보유딜링<em>(DLC)</em>
                </span>
                <p>{regex.moneyRegex(user.account.dl)}</p>
              </div>
              <Link to="/my" className="myWallet">
                딜링 스마트 월렛 >
              </Link>
              <span className="bank">
                나의계좌
                <strong>{user.account.id}</strong>
              </span>
            </div>
            <ul className="mobile">
              {menus.map((data, idx) => (
                <li key={idx}>
                  <a>{data}</a>
                </li>
              ))}
            </ul>
            <div className="csInfo">
              <p className="bt0">
                - <strong>고객센터 :</strong> 1800-4951
                <br />- <strong>이용시간(평일) :</strong> 10:00 ~ 18:30
              </p>
            </div>
            <a className="btnLogout" onClick={userLogout}>
              로그아웃
            </a>
          </>
        )}
      </Wrap>
    </MTDrawer>
  );
}

const Wrap = styled.div`
  width: 300px;

  background: #fff;
  padding: 15px 10px 0;
  z-index: 101;
  /* 로그인 전 스타일 */
  & > .pc {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 28px;
    text-align: center;
    font-size: 0;
    background: #8c8c8c;
    padding: 0 5px;

    & > li {
      display: inline-block;
      width: auto;
      height: 28px;
      background: #8c8c8c;
      margin-bottom: 0px;
      border: 0;

      & > a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 28px;
        padding: 0 5px;
        border: 0;
        background: none;
        color: #fff;
        font-size: 12px;
      }
    }
  }
  /* 로그인 후 스타일 */

  & > .mobile {
    position: absolute;
    top: 280px;
    left: 0px;
    width: 100%;
    padding: 0 20px;
    height: auto;

    & > li {
      width: 100%;
      height: 47px;
      line-height: 46px;
      background: #fff;
      border-bottom: 1px solid #e1e1e1;

      :first-child {
        border-top: 1px solid #e1e1e1;
      }

      & > a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 46px;
        padding: 0 35px 0 5px;
        border: 1px solid #fff;
        background: #fff url(${TmpIcon}) no-repeat right 10px center;
        background-size: 11px 21px;

        & > strong {
          font-weight: 400;
        }
      }
    }
  }

  & > .btnLogout {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #5c5c5c;
    color: #fff;
    font-size: 1.071em;
    font-weight: 600;
    text-align: center;
  }

  & > .csInfo {
    position: absolute;
    bottom: 55px;
    left: 0;
    width: 100%;
    height: 35px;
    line-height: 15px;
    color: #777;
    font-size: 0.857em;
    text-align: center;
    padding: 0 20px;

    & > .bt0 {
      border-top: 0;
      padding-top: 5px;

      & > strong {
        color: #000;
        line-height: 15px;

        font-size: 0.857em;
        text-align: center;
      }
    }
  }

  & > .beTit {
    position: absolute;
    top: 90px;
    left: 20px;
    width: 200px;
    height: auto;

    & > img {
      width: 81px;
      margin-bottom: 20px;
    }

    & > h3 {
      display: block;
      color: #333;
      font-size: 17px;
      line-height: 24px;
      margin-bottom: 5px;
    }

    & > p {
      color: #333;
      font-size: 11px;
    }
  }

  & > a {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #5c5c5c;
    background: ${(props) => (props.title === "" ? "#5c5c5c" : "#2e28b0")};
    color: #fff;
    font-size: 1.071em;
    font-weight: 600;
    text-align: center;
  }

  & > .topInfo {
    position: relative;
    height: 65px;
    padding-left: 10px;

    & > p {
      padding-top: 10px;
      line-height: 1.2em;
      margin-left: 0px;

      & > strong {
        display: block;
        height: 25px;
        line-height: 25px;
        font-size: 1.692em;
        font-weight: 800;

        & > em {
          font-size: 0.818em;
          font-weight: 600;
        }
      }
    }

    & > button {
      position: absolute;
      top: 15px;
      right: 0;
      width: 33px;
      height: 33px;

      & > img {
        float: left;
      }
    }
  }

  & > .myDlc {
    position: absolute;
    top: 80px;
    left: 5px;
    width: 293px;
    height: 192px;
    padding: 25px 22px 25px;
    /* background: url(/sw/resources/img/bg-myWallet-info.png); */
    background: #2d28af;
    /*  */
    background-size: 293px 192px;
    text-align: center;

    border-radius: 10px;

    & > img {
      float: left;
      width: 54px;
      border-radius: 27px;
      box-shadow: 10px 10px #1b195a;
    }

    & > .boxR {
      float: right;
      color: #fde802;
      font-weight: 600;
      text-align: right;
      margin-bottom: 12px;

      & > span {
        color: #fff;
        font-weight: 600;
        text-align: right;

        & > em {
          font-weight: 300;
        }
      }

      & > p {
        height: auto;
        line-height: 35px;
        font-size: 2.143em;
      }
    }

    & > .myWallet {
      word-spacing: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: center;
      align-items: flex-start;
      clear: both;
      width: 155px;
      height: 28px;
      line-height: 26px;
      color: #c6c4ff;
      border: 1px solid #5752e1;
      border-radius: 14px;
      margin: 0 auto;
      font-size: 1em;
    }

    & > .bank {
      position: absolute;
      bottom: 3px;
      left: 0;
      display: block;
      width: 100%;
      height: 60px;
      line-height: 60px;
      color: #fff;
      text-align: left;
      padding-left: 60px;
      font-size: 1.143em;
      /* ========== */
      background: pink;
      /* ========== */

      & > strong {
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 22px;
        margin-top: -10px;
        width: auto;
        height: 20px;
        line-height: 20px;
      }
    }
  }
`;

export default Drawer;
