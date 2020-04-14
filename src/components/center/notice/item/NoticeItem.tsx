/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from "react";
import styled from "styled-components";
import classnames from "classnames";

import TmpIcon from "assets/tmp.png";

interface Props {
  open: boolean;
  onClick: (idx: number) => void;
}

function NoticeItem({ open, onClick }: Props) {
  const onOpen = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      onClick(1);
    },
    [onClick],
  );
  const text = `
    안녕하세요. 온디엘씨 입니다.
    <br>
    고객센터 콜상담 시스템 개선 작업으로 인한 점검안내 드립니다.
    <br>
    아래 기간 동안 콜센터 상담이 진행 되지 않으니, 
    참고하여 이용에 불편 없으시기 바랍니다.
    <br>
    <br>
    [점검기간]
     - 2019년 2월 13일(수) 10:00 ~ 18:30
     <br>
    [점검사항] 
     - 콜센터 상담 CRM 시스템 점검
     ※ 1:1 문의는 정상 접수 가능합니다.
     <br>
     <br>
    안정화 된 서비스 제공을 위한 시스템 장비 점검이 진행되오니
    회원님들의 너그러운 양해 부탁 드립니다.
    <br>
    감사합니다. 
    <br>​`;

  return (
    <Wrap>
      <li>
        <div>
          <a onClick={onOpen}>
            고객센터 콜상담 시스템 점검 안내
            <br />
            <span>2020.02.02</span>
          </a>
        </div>
      </li>
      <li
        className={classnames("conTxt", {
          "conTxt-active": open,
        })}
      >
        <div>
          {text.split(`\n`).map((data, idx) => (
            <p key={idx}>
              {data.includes("-") ? (
                <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
              ) : data.includes("[") ? (
                <span style={{ color: "rgb(120, 32, 185)", fontWeight: "bold" }}>{data}</span>
              ) : data.includes("<br>") ? (
                <span>
                  <br />
                </span>
              ) : (
                <span style={{ fontSize: "10pt" }}>{data}</span>
              )}
            </p>
          ))}
        </div>
      </li>
    </Wrap>
  );
}

const Wrap = styled.div`
  & > li {
    min-height: 61px;
    border-bottom: 1px solid #e7e7e7;
    background: #fff;

    & > div {
      position: relative;
      max-width: 1080px;
      height: 60px;
      line-height: 60px;
      padding: 0 10px;
      margin: 0 auto;
      font-weight: 600;

      & > a {
        display: block;

        width: 100%;
        height: 60px;
        line-height: 16px;
        padding: 14px 0;
        background: url(${TmpIcon}) no-repeat right center;
        background-size: 14px 8px;

        & > span {
          color: #999;
          font-size: 9px;
          font-weight: 600;
        }
      }
    }
  }

  & > li.conTxt {
    /* display: none; */
    /* padding: 10px 0; */
    background: #e7e7e7;
    color: #666;
    font-size: 0.857em;
    overflow: hidden;
    line-height: 17px;
    transition: all 0.5s ease-in-out;
    height: 0;
    min-height: 0px;

    & > div {
      min-height: 60px;
      height: auto;
      line-height: 17px;
      font-weight: 400;
    }
  }

  & > li.conTxt-active {
    display: list-item;
    padding: 10px 0;
    height: auto;
    min-height: 60px;
  }
`;

export default NoticeItem;
