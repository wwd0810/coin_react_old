import React from "react";
import styled from "styled-components";
import TmpIcon from "assets/tmp.png";

function BuyingManage() {
  const dateOpiton = [
    "전체기간",
    "오늘",
    "최근 1주일",
    "최근 1개월",
    "최근 3개월",
    "6개월",
    "24개월",
    "24개월 이전",
  ];
  const statusOpiton = [
    "전체(진행상태)",
    "판매중",
    "구매신청받음",
    "승인완료(입금대기중)",
    "기간만료",
  ];
  return (
    <Wrap>
      <div className="dealManaTop">
        <select>
          {dateOpiton.map((data, idx) => (
            <option key={idx}>{data}</option>
          ))}
        </select>
        <select>
          {statusOpiton.map((data, idx) => (
            <option key={idx}>{data}</option>
          ))}
        </select>
        <p>
          <input type="text" placeholder="거래번호 검색" />
          <button />
        </p>
      </div>
      <div className="dealManaOut">
        <p className="totalNo">전체 (0)</p>
        <div className="dealListBox">구매내역이 없습니다.</div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`

    & > .dealManaTop {
        padding: 20px 30px 15px;
        background: #fff;
        overflow: hidden;

        & > select {
            float: left;
            width: 49.5%;

            :first-child {
                margin-right: 1%;
            }
        }

        & > p {
            clear: both;
            height: 52px;
            position: relative;
            padding-top: 10px;

            & > input {
                width: 100%;
            }

            & > button {
                position: absolute;
                top: 10px;
                right: 0;
                width: 42px;
                height: 42px;
                background: url(${TmpIcon}) no-repeat center center;
                background-size: 15px;
            }
        }
    }

    & > .dealManaOut {
        max-width: 1080px;
        padding: 20px 0px;
        margin: 0 auto;
        overflow: hidden;

        & > .totalNo {
            color: #000;
            font-size: 0.857em;
            margin-bottom: 10px !important;
        }

        & > .dealListBox {
            position: relative;
            width: 100%;
            height: auto;
            padding: 45px 10px 15px;
            background: #fff;
            margin-bottom: 15px;
            padding-top: 15px !important;
            text-align: center !important;
        }
    }
${({ theme }) => theme.media.mobile`
& > .dealManaTop {
    padding: 20px 10px 15px;
  }
& > .dealManaOut {
      padding: 20px 10px;
    }
`}
${({ theme }) => theme.media.tablet`

    & > .dealManaOut {
      padding: 20px 30px;
    }
   
`}
${({ theme }) => theme.media.desktop`
   
`}

${({ theme }) => theme.media.large`s

`}
`;

export default BuyingManage;
