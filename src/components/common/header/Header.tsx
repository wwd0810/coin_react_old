/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Drawer from "components/common/drawer";

import TmpIcon from "assets/tmp.png";
import { User, Account } from "stores/users/types";

interface Props {
  user?: { user: User; account: Account };
  stack?: boolean;
  navPage?: boolean;
  visible?: boolean;
  unRead?: boolean;
  onPrev?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  logout?: () => void;
}

function Header({ stack = false, navPage = true, visible, onPrev, user, logout, unRead }: Props) {
  // ==================== hooks ====================
  const [t] = useTranslation();

  // ==================== options ====================
  const menus = [
    { uri: "/selling", img: TmpIcon, name: t("common.nav.sell") },
    { uri: "/buying", img: TmpIcon, name: t("common.nav.buy") },
    { uri: "/present", img: TmpIcon, name: t("common.nav.present") },
  ];

  const utilMenus = [
    { uri: "/my", name: t("common.nav.my_wallet") },
    { uri: "/notice", name: t("common.nav.notice") },
    { uri: "", name: t("common.nav.bazaro") },
    { uri: "", name: t("common.nav.global_shopping") },
    { uri: "", name: t("common.nav.cashlink_intro") },
    { uri: "", name: t("common.nav.tutorial") },
    { uri: "/center", name: t("common.nav.center") },
  ];
  // ==================== states ====================
  const [open, setOpen] = useState<boolean>(false);

  // ==================== useCallback ====================
  const onOpen = useCallback((e: any) => {
    e.preventDefault();
    setOpen(true);
  }, []);

  const userLogout = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      if (logout) {
        const red = confirm(t("alert.msg.logout"));

        if (red) logout();
      }
    },
    [logout, t],
  );

  // ==================== function ====================
  const toggleDrawer = (open: boolean) => {
    setOpen(false);
  };

  return (
    <Wrap title={stack || navPage ? "stack" : "default"}>
      <Drawer openDrawer={open} onClick={toggleDrawer} user={user!} userLogout={userLogout} />
      <section
        className={classnames("mainMenu", {
          "mainMenu--hidden": !visible,
        })}
      >
        <button className="btnSlideMenu" onClick={stack ? onPrev : onOpen}>
          icon
        </button>
        <h1>{stack ? "title" : "Logo"}</h1>
        <div className="util">
          <Link to="/notice">icon {unRead ? <span>N</span> : null}</Link>
          <Link to="/my">icon</Link>
        </div>
      </section>
      <header className="pc_header">
        <h1>
          <a href="/home">Logo</a>
        </h1>
        <nav>
          {menus.map((data, idx) => (
            <Link key={idx} to={data.uri}>
              <img src={TmpIcon} alt="" />
              <br />
              {data.name}
            </Link>
          ))}
        </nav>
        <div className="util">
          {user ? (
            <div className="boxL">
              <span className="username">
                {user.user.username}
                <em>{t("common.nav.user")}</em>
              </span>
              <a onClick={userLogout}>{t("common.nav.logout")}</a>
            </div>
          ) : (
            <div className="boxL">
              <a
                href={`${process.env.REACT_APP_AUTH_API_BASE}/oauth/authorize?client_id=cashlink&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`}
              >
                {t("common.nav.login")}
              </a>
              <a>{t("common.nav.signup")}</a>
            </div>
          )}
          <div className="boxR">
            {utilMenus.map((data, idx) => (
              <div key={idx} style={{ display: "inline-block" }}>
                <Link to={data.uri}>
                  {data.name}
                  {unRead && data.name === t("common.nav.notice") ? <Alarm>N</Alarm> : null}
                </Link>

                {utilMenus.length - 1 > idx ? <span /> : null}
              </div>
            ))}
          </div>
        </div>
      </header>
    </Wrap>
  );
}

const Alarm = styled.div`
  display: block;
  position: absolute;
  top: -5px;
  right: -10px;
  width: 13px;
  height: 13px;
  line-height: 14px;
  padding-bottom: 2px;
  border-radius: 7px;
  background: #fa146a;
  text-align: center;
  color: #fff;
  font-size: 9px;
`;

const Wrap = styled.header`
  /* position: fixed; */
  /* top: 0px; */
  width: 100%;
  height: 50px;
  background: ${(props) => (props.title === "stack" ? "white" : "#c9daf0")};
  border-bottom: ${(props) => (props.title === "stack" ? "1px solid #d3d3d3" : "")};
  
  & > .pc_header {
      display: none;
  }
  & > section {
    position: relative;
    max-width: 1080px;
    height: 49px;
    margin: 0 auto;
    padding: 0 10px;
    background: ${(props) => (props.title === "stack" ? "white" : "#c9daf0")};
    
    z-index: 99;
    & > h1 {
        width: 100%;
        height: 50px;
        line-height: 22px;
        padding: 14px 0;
        text-align: center;
        font-size: 1.285em;
    };
    & > .btnSlideMenu {
        display: block;
        position: absolute;
        top: 14px;
        left: 10px;
        width: 20px;
        height: 20px;
    }
    & > .util {
        position: absolute;
        top: 14px;
        right: 10px;

        & > a {
            position: relative;
            display: inline-block;
            height: 20px;
            margin-left: 5px;

            & > span{
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              width: 14px;
              height: 14px;
              line-height: 14px;
              padding-top: 1px;
              border-radius: 7px;
              background: #fa146a;
              color: #fff;
              font-size: 0.714em;
              text-align: center;
            }
            }
        }
    }

  
    ${({ theme }) => theme.media.mobile`
        .mainMenu {
        width: 100%;
        position: fixed;
        top: 0;
        transition: top 0.3s;
      }

      .mainMenu--hidden {
        top: -50px;
      }
    `}
    ${({ theme }) => theme.media.tablet`
         .mainMenu {
        width: 100%;
        position: fixed;
        top: 0;
        transition: top 0.3s;
      }

      .mainMenu--hidden {
        top: -50px;
      }
    `}
    ${({ theme }) => theme.media.desktop`
    height: 80px;
        & > section {
            display: none;
        };
        & > .pc_header {
            position: relative;
            display: block;
            width: 100%;
            height: 80px;
            border-bottom: 0;
            background: #2b2a2f;
            & > h1 {
                float: left;
                width: 130px;
                height: 80px;
                line-height: 80px;
                padding: 0;
                text-align: center;
                font-size: 1.846em;

                // temp
                color: white;
            }
            & > nav {
                float: left;
                max-width: 600px;
                height: 80px;
                border-right: 1px solid #1b1a1f;

                & > a {
                    display: block;
                    float: left;
                    width: 80px;
                    height: 100%;
                    line-height: 22px;
                    padding-bottom: 6px;
                    text-align: center;
                    color: #fff;
                    font-size: 1.285em;
                    font-weight: 600;
                    padding-top: 17px;
                    border-left: 1px solid #1b1a1f;

                    :hover {
                      background: #1b1a1f;
                      border-bottom: 6px solid #2d28af;
                    }

                    & > img {
                        width: auto;
                        height: 19px;
                        margin-bottom: 4px;
                    };
                };
                
            };
            & > .util {
                float: right;
                height: 80px;
                overflow: hidden;
                
                & > .boxL {
                    float: left;
                    height: 30px;
                    line-height: 30px;
                    padding-top: 23px;
                    margin-right: 10px;

                    & > a {
                        display: inline-block;
                        width: auto;
                        height: 30px;
                        line-height: 28px;
                        border: 1px solid #4b4a4e;
                        color: #999;
                        font-size: 0.857em;
                        padding: 0 10px;
                        margin-left: 5px;   
                        border-radius: 15px;
                    }

                    & > .username { 
                      color: #fff;
                      font-size: 1.538em;
                      font-family: NanumSquare;

                      & > em {
                        color: #999;
                        font-weight: 600;
                      }
                    }
                };
                
                & > .boxR {
                    float: left;
                    height: 80px;
                    line-height: 20px;
                    padding: 30px 15px 30px 10px;
                    background: #3a393e;

                    & > div > a {
                        position: relative;
                        float: left;
                        display: block;
                        width: auto;
                        height: 20px;
                        line-height: 20px;
                        font-size: 0.857em;
                        color: #999;
                    }

                    & > div > span {
                        float: left;
                        display: block;
                        width: 10px;
                        height: 20px;
                    }
                };
            };
        };
    `}
    ${({ theme }) => theme.media.large`
       & > section {
            display: none;
        };
        & > .pc_header {
            & > h1 {
            }
            & > nav {
                & > a {
                    width: 119px;

                    & > img {
                        width: auto;
                        height: 19px;
                        margin-bottom: 4px;
                    };
                };
                
            };
            & > .util {
                float: right;
                height: 80px;
                overflow: hidden;
                
                & > .boxL {
                    margin-right: 25px;
                    & > a {
                        padding: 0 18px;
                        margin-left: 10px;
                    }
                };
                
                & > .boxR {
                    float: left;
                    height: 80px;
                    line-height: 20px;
                    padding: 30px 25px 30px 20px;
                    background: #3a393e;

                    & > a {
                    }

                    & > span {
                        width: 20px;
                    }
                };
            };
        };
       
    `};
`;

export default Header;
