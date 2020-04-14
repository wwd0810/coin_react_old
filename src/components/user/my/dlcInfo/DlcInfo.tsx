import React from "react";
import styled from "styled-components";

import TmpIcon from "assets/tmp.png";
import DlcInfoItem from "./item";

function DlcInfo() {
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
  const historyOption = [
    "전체(내역)",
    "딜링판매",
    "선물하기",
    "상품구매",
    "관리자처리",
    "딜링구매",
    "딜링전환",
    "선물받기",
  ];

  return (
    <Wrap className="wd100p pdt mt-10" id="wrap">
      <div className="bgWhite pt15">
        <div className="dealDlcTop plr30">
          <section>
            <div className="inBox">
              <div className="pcOut">
                <img src={TmpIcon} alt="" />
                <div className="boxR">
                  <span>
                    나의 보유딜링
                    <em>(DLC )</em>
                    <i> : </i>
                  </span>
                  <p>
                    100,000,000
                    <em> DLC</em>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="dealManaTop mb10 pt15">
        <div className="basicWd">
          <select className="wd33">
            {dateOpiton.map((data, idx) => (
              <option key={idx}>{data}</option>
            ))}
          </select>
          <select className="wd33">
            {statusOpiton.map((data, idx) => (
              <option key={idx}>{data}</option>
            ))}
          </select>
          <select className="wd33">
            {historyOption.map((data, idx) => (
              <option key={idx}>{data}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="dealManaOut wd50">
        <p className="totalNo mb10">전체 (170)</p>
        {/* ============================== */}
        <DlcInfoItem />
        <DlcInfoItem />
        <DlcInfoItem />
        <DlcInfoItem />
        <DlcInfoItem />
        <DlcInfoItem />
        <DlcInfoItem />
        <DlcInfoItem />
        <DlcInfoItem />
        <DlcInfoItem />
        {/* ============================== */}
      </div>
      <div className="btnWrap basicWd pt10">
        <button className="btn h42 w49">더보기</button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  ${({ theme }) => theme.media.mobile`


.dealDlcTop {
    height: 100px;
    padding-left: 10px !important;
    padding-right: 10px !important;
}

.dealDlcTop > section > .inBox {
        height: 100px;
        padding: 25px 15px 15px;
        & > .pcOut {
            display: block;
            height: auto;
            max-width: 100%;
            overflow: auto;
            
            & > .boxR {
                float: right;

                & > span {
                    float: none;
                    display: inline-block;
                    height: auto;
                    line-height: 20px;

                    & > i {
                        display: none;
                    }
                }

                & > p {
                    float: none;
                    padding-top: 0px;
                    text-align: right;
                }
            }
        }

        & > img {
            float: left;
            width: 54px;
            border-radius: 27px;
            box-shadow: 5px 5px #1b195a;
        }
    }

    .dealManaTop  {
        padding-left: 10px !important;
        padding-right: 10px !important;
    }

    .dealManaOut {
        padding: 20px 10px;
    }
`}
  ${({ theme }) => theme.media.tablet`

.dealDlcTop {
    height: 100px;
    padding-left: 30px !important;
    padding-right: 30px !important;
}

.dealDlcTop > section > .inBox {
        height: 100px;
        padding: 25px 15px 15px;
        & > .pcOut {
            display: block;
            height: auto;
            max-width: 100%;
            overflow: auto;
            
            & > .boxR {
                float: right;

                & > span {
                    float: none;
                    display: inline-block;
                    height: auto;
                    line-height: 20px;

                    & > i {
                        display: none;
                    }
                }

                & > p {
                    float: none;
                    padding-top: 0px;
                    text-align: right;
                }
            }
        }

        & > img {
            float: left;
            width: 54px;
            border-radius: 27px;
            box-shadow: 5px 5px #1b195a;
        }
    }

    .dealManaOut {
        padding: 20px 30px;
    }

`}
`;

export default DlcInfo;
