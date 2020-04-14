import React, { useCallback } from "react";
import styled from "styled-components";

import TmpIcon from "assets/tmp.png";
import classnames from "classnames";

interface Props {
  open: boolean;
  onClick: (idx: number) => void;
}

function HistoryItem({ open, onClick }: Props) {
  const onOpen = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();

      onClick(1);
    },
    [onClick],
  );
  return (
    <Wrap>
      <li>
        <div onClick={onOpen}>
          <p className="top">
            <em>[딜링판매]</em>
          </p>
          <p className="mid">
            <span>답변완료</span> 딜링판매재 승인요청
          </p>
          <p className="bot">등록일 : 2018.10.28</p>
        </div>
      </li>
      <li
        className={classnames("conTxt", {
          "conTxt-active": open,
        })}
      >
        <div>
          <p>
            <em>Q</em>
            <span>
              딜링판매 후 80%입금 완료했습니다.재판매 승인해주세요
              <br />
            </span>
          </p>
          <p className="ans">
            <em>A</em>
            <span>
              안녕하세요. 온디엘씨 입니다. 고객님의 판매권한 승인이 완료되었습니다. 다른 궁금하신
              사항이나 불편하신 점이 있다면, 언제든 온디엘씨 고객센터로 문의해 주시기 바랍니다.
              감사합니다.
            </span>
          </p>
          <p className="bot">답변일 : 2018.10.29</p>
        </div>
      </li>
    </Wrap>
  );
}

const Wrap = styled.div`
  & > li {
    min-height: auto;
    background: #fff;
    margin-top: 10px;

    & > div {
      position: relative;
      max-width: 1080px;
      min-height: 60px;
      padding: 10px;
      margin: 0 auto;
      font-weight: 600;
      background: url(${TmpIcon}) no-repeat right 10px bottom 10px;
      background-size: 14px 8px;

      & > p.top {
        height: 21px;
        line-height: 21px;
        overflow: hidden;

        & > em {
          color: #666;
          font-size: 10px;
        }
      }

      & > p.mid {
        height: 20px;
        line-height: 20px;
        font-size: 0.857em;
        overflow: hidden;
        margin-bottom: 3px;
        cursor: pointer;

        & > span {
          display: inline-block;
          height: 15px;
          line-height: 12px;
          border: 1px solid #bfbcf9;
          color: #3029d7;
          font-size: 10px;
          border-radius: 2px;
          text-align: center;
          padding: 0 5px 2px;
        }
      }

      & > p.bot {
        height: 13px;
        line-height: 13px;
        color: #999;
        font-size: 10px;
      }
    }
  }

  & > li.conTxt {
    margin-top: 0;

    transition: all 0.5s ease-in-out;
    height: 0;
    min-height: 0px;

    & > div > p {
      padding: 15px 0;
      overflow: hidden;
      border-top: 1px solid #e0e0e0;
      text-align: left;

      & > em {
        float: left;
        display: block;
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        background: #888;
        color: #fff;
        text-align: center;
      }

      & > span {
        display: block;
        margin-left: 20px;
        line-height: 17px;
        font-size: 12px;
        color: #666;
      }
    }

    & > div > p.ans {
      padding: 10px 15px;
      border-top: 0;
      background: #f6f6f6;

      & > em {
        background: #fa146a;
      }
    }
  }

  & > li.conTxt-active {
    display: list-item;
    padding: 10px 0;
    height: auto;
    min-height: 60px;
  }
`;

export default HistoryItem;
