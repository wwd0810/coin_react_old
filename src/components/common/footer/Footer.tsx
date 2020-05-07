import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import TmpIcon from "assets/tmp.png";
import { Link } from "react-router-dom";

interface Props {
  visible?: boolean;
  pageNum?: number;
}

function Footer({ visible, pageNum }: Props) {
  //  ==================== hooks ====================
  const [t] = useTranslation();

  //  ==================== options ====================
  const menus = [
    { uri: "/home", name: t("common.nav.home") },
    { uri: "/selling", name: t("common.nav.sell") },
    { uri: "/buying", name: t("common.nav.buy") },
    { uri: "/present", name: t("common.nav.present") },
  ];

  return (
    <Wrap>
      {pageNum! >= 0 ? (
        <nav
          id="navMenu"
          className={classnames("mainMenu", {
            "mainMenu--hidden": !visible,
          })}
        >
          {menus.map((data, idx) => (
            <Link key={idx} className={idx === pageNum ? "active" : ""} to={data.uri}>
              <img src={TmpIcon} alt="" />
              <br />
              {data.name}
            </Link>
          ))}
        </nav>
      ) : null}
      <footer className="pc_footer">
        <div className="top">
          <div className="footOut">
            <h1>Logo</h1>
            <div>
              <strong>{t("common.footer.company")}</strong>
              <br />
              {t("common.footer.owner")} : | {t("common.footer.license")} |{" "}
              {t("common.footer.address")}
              <br />
              {t("common.footer.privacy_officer")} | {t("common.footer.email")}|{" "}
              {t("common.footer.tel")}1
            </div>
          </div>
        </div>
        <div className="bot">
          {`${t("common.footer.article")}`.split(".").map((data, idx) => (
            <i key={idx}>
              {data}.{idx === 0 ? <br /> : null}
            </i>
          ))}
          {/* ONDLC는 통신판매 중개자이며, 통신판매의 당사자가 아닙니다.
          <br />
          따라서 ONDLC는 판매자가 등록한 상품, 거래정보 및 거래에 대하여 책임을 지지않습니다. */}
          <span>{t("common.footer.copyright")}</span>
        </div>
      </footer>
    </Wrap>
  );
}

const Wrap = styled.div`
   width: 100%;
    height: auto;
    background: #888;
    
    & > .mainMenu{
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: rgba(0,0,0,0.8);
        z-index: 99;      
        
        & > a {
            display: block;
            float: left;
            width: 25%;
            height: 100%;
            line-height: 15px;
            padding-bottom: 3px;
            text-align: center;
            color: #fff;
            font-size: 0.857em;
            font-weight: 600;
            padding-top: 10px;
            /* active */
            & > img {
                width: auto;
                height: 19px;
                margin-bottom: 3px;
            }
        }
        & > a.active{
            padding-top: 10px;
            padding-bottom: 0;
            border-bottom: 3px solid #3029d7;
            background: rgba(0,0,0,0.9);
        }
    }

    & > .pc_footer {
        display: none;
    }
    ${({ theme }) => theme.media.mobile`
      .mainMenu {
        width: 100%;
        position: fixed;
        bottom: 0;
        transition: bottom 0.3s;
      }

      .mainMenu--hidden {
        bottom: -50px;
      }
        
    `}
    ${({ theme }) => theme.media.tablet`
        .mainMenu {
        width: 100%;
        position: fixed;
        bottom: 0;
        transition: bottom 0.3s;
      }

      .mainMenu--hidden {
        bottom: -50px;
      }
    `}
    ${({ theme }) => theme.media.desktop`
        & > .mainMenu {
            display: none;
        }
        & > .pc_footer {
            display: block;
            width: 100%;
            height: auto;
            background: #888;

            & > .top {
                width: 100%;
                padding: 20px 10px;
                border-bottom: 1px solid #949494;
                & > .footOut {
                    width: 1080px;
                    height: auto;
                    overflow: hidden;
                    margin: 0 auto;
                    & > h1 {
                        float: left;
                        width: 100px;
                        color: #fff;
                        font-size: 1.846em;
                        line-height: 29px;
                    }
                    & > div {
                        margin-left: 125px;
                        line-height: 24px;
                        color: #fff;
                        font-size: 0.857em;
                        & > strong {
                            font-size: 1.083em;
                            font-weight: bold;
                        }
                        border-collapse: collapse;
                    }
                }
            }
            & > .bot {
                color: #ccc;
                font-size: 0.846em;
                line-height: 20px;
                text-align: center;
                padding: 20px 10px 30px;
                & > span {
                    display: block;
                    padding-top: 15px;
                }
            }
        }
    `}
    ${({ theme }) => theme.media.large`
        
    `}
`;

export default Footer;
