import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Dealing } from "stores/market/types";
import regex from "lib/regex";

import TmpIcon from "assets/tmp.png";

interface Props {
  dealing: Dealing;
}

function CoinItem({ dealing }: Props) {
  // ==================== hooks ====================
  const [t] = useTranslation();

  // ==================== funtions ====================
  const getCtoCDay = () => {
    const today = new Date();
    const createdDay = new Date(dealing.createdDate);
    const gap = today.getTime() - createdDay.getTime();
    const res = Math.floor(gap / (1000 * 60 * 60 * 24));
    return res + 1;
  };

  const isSelling = () => {
    if (dealing.status === "PURCHASE_REQUEST_RECEIVED" || dealing.status === "WAITING_FOR_DEPOSIT")
      return true;
    return false;
  };

  return (
    <Item>
      {isSelling() ? (
        <IsSell>
          {t("common.label.deal")}
          <br />
          {t("common.label.continue")}
        </IsSell>
      ) : null}
      <Link to={`/buying/detail/${dealing.id}`}>
        <p>
          {t("market.label.dealing_currency")}{" "}
          <strong>
            {regex.moneyRegex(dealing.price)} {t("market.label.currency")}
          </strong>
          <span>
            {" "}
            | {getCtoCDay()}
            {t("market.label.day")}
          </span>
        </p>
        <p className="bot">
          <strong>
            {regex.moneyRegex(dealing.quantity)} <em>{t("market.label.dlc")}</em>
          </strong>
          <strong>
            {regex.moneyRegex(dealing.price * dealing.quantity)}{" "}
            <em>{t("market.label.currency")}</em>
          </strong>
        </p>
        <p className="seller">
          <span className="userInfo">
            {t("market.label.seller")} {dealing.seller.username}
          </span>
          <span className="auth">
            <img src={TmpIcon} alt="" /> {t("market.label.certification")}
          </span>
        </p>
      </Link>
    </Item>
  );
}

const IsSell = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 40px;
  line-height: 13px;
  padding-top: 8px;
  background: #fa085f;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  margin: 0;
`;

const Item = styled.li`
    position: relative;
    float: left;
    width: 49.5%;
    height: 130px;
    background: #fff;
    margin: 0 1% 10px 0;
    border:1px solid #fff;
    :nth-child(even) {
        margin-right: 0;
    }

    :hover {
        border: 1px solid #2b2a2f;
    }

    & > a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 20px 35px 20px 15px;
        border: 1px solid #fff;

        & > p {
            height: 20px;
            line-height: 20px;
            color: #757575;
            font-size: 1.285em;
            margin-bottom: 10px;
            
            & > strong {
                color: #333;
                font-weight: 800;
            }

            & > span {
                display: inline-block;
                height: 10px;
                line-height: 10px;
                font-size: 13px;
                margin: 0 5px 3px;
                vertical-align: middle;
            }
        }

        & > .bot {
    
            height: 30px;
            margin-bottom: 10px;
            color: #333;
            font-size: 1.428em;
            font-family: NanumSquare;
            overflow: hidden;

            & > strong {
                /* float: left; */
                display: inline-block;
                height: 30px;
                line-height: 30px;
                padding-left: 35px;
                font-weight: 600;
                background: url(${TmpIcon}) no-repeat left center;
                background-size: 30px;

                & > em {
                    font-size: 13px;
                    font-weight: 400;
                }

                :last-child{
                    float: right;
                    background: url(${TmpIcon}) no-repeat left center;
                    background-size: 30px;
                }
            }
        }

        & > .seller {
            height: 20px;
            margin-bottom: 0;

            & > .userInfo {
                height: 20px;
                line-height: 20px;
                padding-left: 25px;
                color: #757575;
                font-size: 13px;
                background: url(${TmpIcon}) no-repeat left center;
                background-size: 19px;
                margin: 0;
            }

            & > .auth {
                height: 16px;
                line-height: 14px;
                border: 1px solid #06777f;
                border-radius: 8px;
                margin: 1px 0px 0px 5px;
                padding: 0 10px;
                color: #06777f;
                font-size: 11px;
                font-weight: 600;

                & > img {
                    width: 6px;
                }
            }
        }
    }

${({ theme }) => theme.media.mobile`
    float: none;
    width: 100%;
    height: 110px;
    margin: 0 0 10px 0;

    & > a {
        padding: 15px 35px 15px 15px;

        & > p {
            font-size: 1.071em;
        }

        & > .bot {
            height: auto;
            
            & > strong {
                float: left;
                display: inline-block;
                height: 20px;
                line-height: 18px;
                padding-top: 2px;
                padding-left: 25px;
                font-weight: 600;
                background: url(${TmpIcon}) no-repeat left center;
                background-size: 20px;

                :last-child {
                    float: right;
                    background: url(${TmpIcon}) no-repeat left center;
                    background-size: 20px;
                }
            }
        }
    }
`}
${({ theme }) => theme.media.tablet`

`}
${({ theme }) => theme.media.desktop`
    

    & > a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 20px 35px 20px 15px;
        border: 1px solid #fff;
    }
`}

${({ theme }) => theme.media.large`s

`}
`;

export default CoinItem;
