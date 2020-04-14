import React, { useState, useCallback } from "react";
import styled from "styled-components";
import classnames from "classnames";

import TmpIcon from "assets/tmp.png";

function CenterQuestion() {
  const [state, setState] = useState<number>(0);

  const onStateClick = useCallback(
    (e: any) => {
      e.preventDefault();
      const { id } = e.target;
      console.log(id);
      if (Number(id) === state) {
        setState(0);
      } else {
        setState(Number(id));
      }
    },
    [state],
  );

  const texts = [
    // =============================================================
    `
    회원님의 보유딜링 확인은 아래의 방법을 통해 확인하실 수 있습니다.
    <br>
    [APP] 
    <br>
    로그인 - 메인화면의 슬라이드 메뉴를 클릭 - 슬라이딩 되는 화면을 통해 확인 
    * 해당 화면에서 제휴사이트의 이동 또한 가능하오니 참고해 주시기 바랍니다. 
    <br>
    [WEB]
    <br>
    로그인 - 상단의 마이월렛 클릭
    <br>
    <br>`,

    // =============================================================
    `회원님의 판매/구매 등 진행한 거래의 내역을 푸쉬알림을 통해 알려 드립니다. 
    <br>
    우측 상단의 [알림] 아이콘 클릭 시 모든 알림 내역을 확인하실 수 있으니,
    참고해 주시기 바랍니다.
    <br>
    <br>​ `,
    // =============================================================
    `
    판매등록 된 딜링(DLC)은 [ONDLC 메인화면] - [금일 딜링(DLC)평균시세] 하단의
    조건값 설정을 통해 원하시는 조건을 설정하여 확인하실 수 있습니다. 
    <br>
    1. [최신순] - 최근 판매등록 된 판매 건 별로 정렬됩니다.
    * 한 번 더 클릭 시 오래 된 판매 건 별로 정렬됩니다.
    <br>
    2. [가격순] - 1딜링(DLC) 당 판매가격이 낮은 순으로 정렬됩니다.
    * 한 번 더 클릭 시 1딜링(DLC)당 판매가격이 높은 순으로 정렬됩니다.
    <br>
    3. [딜링갯수 검색] - 판매등록 된 판매 건 중 입력한 갯수만큼의 판매 건만 불러옵니다.
    * 조건 검색 된 항목에서도 [최신순], [가격순]으로 정렬 가능합니다.
    <br>
    <br>​ `,
    // =============================================================
    `판매완료한 내역은 아래의 방법으로 확인하실 수 있습니다.
    <br>
    [APP]
    <br>
    1. ONDLC APP 실행 후 메인화면 하단의 판매하기 아이콘을 터치합니다.
    2. 상단 메뉴 중 [판매내역]을 터치하여 확인할 수 있습니다. 
    * 거래가 완료된 건만 조회됩니다. 
    <br>
    [WEB]
    <br>
    1. ONDLC 홈페이지 상단의 판매하기를 클릭합니다.
    2. [판매내역] 탭에서 판매완료된 거래건을 확인할 수 있습니다.
    * 거래가 완료된 건만 조회됩니다.
    <br>
    <br> `,
    // =============================================================
    `보유하신 딜링은 딜링(DLC) 판매는 아래의 방법으로 진행하실 수 있습니다.
    <br>
    [APP]
    <br>
    1. ONDLC APP 실행 후 메인화면 하단의 판매하기 아이콘을 터치합니다.
    2. 상단 메뉴 중 [판매등록]을 터치합니다.
    3. 판매수량/개당가격을 입력한 후 등록하기를 누릅니다.
    * 하한가보다 낮은 금액으로 등록할 수 없습니다. ​
    <br>
    [WEB]
    <br>
    1. ONDLC 홈페이지 상단의 판매하기를 클릭하신 후 [판매등록] 탭으로 이동합니다. 
    2. 판매수량/개당가격을 입력한 후 등록하기를 클릭합니다. 
    * 하한가보다 낮은 금액으로 등록할 수 없습니다.
    <br>
    <br> `,
    // =============================================================
    `구매신청한 거래 건의 결제는 아래의 방법으로 진행하실 수 있습니다.
    <br>
    [APP] 
    <br>
    1. ONDLC APP 실행 후 메인화면 하단의 구매하기 아이콘을 터치합니다.
    2. [구매관리] 메뉴에서 [구매하기] 버튼을 터치합니다. 
    3. 개인정보 제3자 제공 및 위탁동의에 체크 후 결제하기를 터치합니다. 
    4. 주문 완료 시, 판매자의 입금정보(은행계좌)로 금액을 입금합니다.
    * 안전하고 정확한 입금확인을 위해 회원님 본인명의로 입금하시기 바랍니다.
    5. 입금이 완료된 후 [입금완료 메시지보내기] 버튼을 터치해 주세요.
    * 입금없이 허위로 입금완료 메시지를 보낼 경우 패널티가 주어지며, 자동으로 거래가 취소됩니다.
    6. 판매자가 입금내역 확인 후 암호키를 보내며, [임시계좌에서 암호키 확인]을 완료하시면, 딜링이 지급됩니다. 
    <br>
    [WEB]
    <br>
    1. ONDLC 홈페이지 상단의 구매하기를 클릭하여 [구매관리] 탭으로 이동합니다. 
    2. 구매신청한 물품의 [구매하기] 버튼을 클릭합니다. 
    3. 개인정보 제3자 제공 및 위탁동의에 체크 후 결제하기를 클릭합니다. 
    4. 주문 완료 시, 판매자의 입금정보(은행계좌)로 금액을 입금합니다.
    * 안전하고 정확한 입금확인을 위해 회원님 본인명의로 입금하시기 바랍니다.
    5. 입금이 완료된 후 [입금완료 메시지보내기] 버튼을 터치해 주세요.
    * 입금없이 허위로 입금완료 메시지를 보낼 경우 패널티가 주어지며, 자동으로 거래가 취소됩니다.
    6. 판매자가 입금내역 확인 후 암호키를 보내며, [임시계좌에서 암호키 확인]을 완료하시면, 딜링이 지급됩니다.
    <br>
    <br> ​ `,
    // =============================================================
    `판매등록된 딜링(DLC)은 아래의 방법으로 구매 신청하실 수 있습니다.
    <br>
    [APP]
    <br>
    1. ONDLC APP 실행 후 메인화면 하단의 홈 버튼을 터치하여 물품을 확인합니다. 
    2. 구매를 원하는 거래건을 터치하여 상세화면으로 이동합니다.
    3. 금액 확인 후 [구매신청]을 터치하여 거래를 요청합니다. 
    4. 거래 요청이 완료되면 [승인대기 중] 상태가 되며, 판매자의 승인완료 후 구매할 수 있습니다.
    * 거래 진행중이거나 판매 일시중단 물품은 구매가 불가합니다. 
    <br>
    [WEB]
    <br>
    1. ONDLC 홈페이지에서 원하는 물품을 확인한 후 거래건을 클릭하여 상세화면으로 이동합니다.
    3. 금액 확인 후 [구매신청]을 클릭하여 거래를 요청합니다. 
    4. 거래 요청이 완료되면 [승인대기 중] 상태가 되며, 판매자의 승인완료 후 구매할 수 있습니다.
    * 거래 진행중이거나 판매 일시중단 물품은 구매가 불가합니다.
    <br>
    <br> `,
    // =============================================================
    `선물받은 딜링(DLC)은 아래의 방법으로 수령하실 수 있습니다.
    <br>
    [APP]
    <br>
    1. ONDLC APP 실행 후 메인화면 하단의 선물하기 아이콘을 터치합니다.
    2. 상단의 [선물내역] 탭을 터치한 후 [받은선물 임시계좌]를 터치합니다. 
    3. [암호키 확인(선물수락)] 버튼을 터치하시면 선물 받기가 완료됩니다. 
    <br>
    [WEB]
    <br>
    1. ONDLC 홈페이지 상단의 선물하기 클릭합니다. 
    2. 상단의 [선물내역] 탭을 클릭한 후 [받은선물 임시계좌]를 클릭합니다. 
    3. [암호키 확인(선물수락)] 버튼을 터치하시면 선물 받기가 완료됩니다.
    <br>
    <br> ​ `,
    // =============================================================
    `
    회원님이 선물하신 내역은 아래의 방법으로 확인하실 수 있습니다.
    <br>
    [APP]
    <br>
    1. ONDLC APP 실행 후 메인화면 하단의 선물하기 아이콘을 터치합니다.
    2. 상단의 [선물내역] 탭을 터치하여 보낸 딜링과 받는 사람 확인이 가능합니다. 
    3. 보낸선물 임시계좌를 터치하여 상세페이지 확인이 가능합니다. 
    <br>
    [WEB]
    <br>
    1. ONDLC 홈페이지 상단의 선물하기 클릭합니다. 
    2. 상단의 [선물내역] 탭을 클릭하여 보낸 딜링과 받는 사람을 확인할 수 있습니다. 
    3. [보낸선물 임시계좌]에서 상세페이지 확인이 가능합니다. 
    <br>
    <br>​ `,
    // =============================================================
    `딜링(DLC) 선물하기는 아래의 방법으로 진행하실 수 있습니다.
    <br>
    [APP]
    <br>
    1. ONDLC APP 실행 후 메인화면 하단의 선물하기 아이콘을 터치합니다.
    2. 선물할 딜링을 입력하고, 받으시는 분의 정보를 기재한 후 [선물하기]를 터치합니다.
    3. 선물하기 완료 후 자세한 사항은 [선물내역] > [선물 임시계좌]에서 확인할 수 있습니다. 
    <br>
    [WEB]
    <br>
    1. ONDLC 홈페이지 상단의 선물하기 클릭합니다. 
    2. 선물할 딜링을 입력하고, 받으시는 분의 정보를 기재한 후 [선물하기]를 클릭합니다.
    3. 선물하기 완료 후 자세한 사항은 [선물내역] > [선물 임시계좌]에서 확인할 수 있습니다.
    <br>
    <br> ​ `,
  ];

  // className={classnames("mainMenu", {
  //   "mainMenu--hidden": !visible,
  // })}
  return (
    <Wrap>
      <ul className="boardList">
        {/* 회원정보 */}
        <li className="faqCate">
          <div>화원정보</div>
        </li>
        <li>
          <div>
            <em id="1" onClick={onStateClick}>
              내가 가진 딜링(DLC)을 확인하고 싶어요
            </em>
          </div>
        </li>
        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 1,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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
        {/* 이용방법 */}
        <li className="faqCate">
          <div>이용방법</div>
        </li>
        <li>
          <div>
            <em id="2" onClick={onStateClick}>
              ONDLC APP의 알림은 무엇인가요
            </em>
          </div>
        </li>

        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 2,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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

        {/* 딜링거래소 */}
        <li className="faqCate">
          <div>딜링(DLC)거래소</div>
        </li>
        <li>
          <div>
            <em id="3" onClick={onStateClick}>
              판매등록된 딜링(DLC)를 간추려 보고 싶어요
            </em>
          </div>
        </li>
        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 3,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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

        {/* 딜링판매 */}
        <li className="faqCate">
          <div>딜링(DLC)판매</div>
        </li>
        <li>
          <div>
            <em id="4" onClick={onStateClick}>
              판매완료한 내역은 어디에서 볼 수 있나요
            </em>
          </div>
        </li>
        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 4,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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

        <li>
          <div>
            <em id="5" onClick={onStateClick}>
              가지고 있는 딜링(DLC)을 ONDLC에서 판매하고 싶어요
            </em>
          </div>
        </li>
        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 5,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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

        {/* 딜링구매 */}
        <li className="faqCate">
          <div>딜링(DLC)구매</div>
        </li>
        <li>
          <div>
            <em id="6" onClick={onStateClick}>
              구매신청한 거래 건의 결제는 어떻게 할 수 있나요?
            </em>
          </div>
        </li>
        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 6,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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

        <li>
          <div>
            <em id="7" onClick={onStateClick}>
              판매등록된 딜링(DLC)을 구매신청하고 싶어요
            </em>
          </div>
        </li>
        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 7,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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

        {/* 딜링선물 */}
        <li className="faqCate">
          <div>딜링(DLC)선물</div>
        </li>
        <li>
          <div>
            <em id="8" onClick={onStateClick}>
              딜링(DLC) 선물이 도착했어요. 어디서 받을 수 있나요?
            </em>
          </div>
        </li>
        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 8,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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

        <li>
          <div>
            <em id="9" onClick={onStateClick}>
              내가 선물한 내역을 확인하고 싶어요
            </em>
          </div>
        </li>
        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 9,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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

        <li>
          <div>
            <em id="10" onClick={onStateClick}>
              보유한 딜링(DLC)을 선물하고 싶어요
            </em>
          </div>
        </li>

        <li
          className={classnames("conTxt", {
            "conTxt-active": state === 10,
          })}
        >
          <div>
            {texts[0].split(`\n`).map((data, idx) => (
              <p key={idx}>
                {data.includes("[") ? (
                  <span style={{ fontSize: "10pt", fontWeight: "bold" }}>{data}</span>
                ) : data.includes("*") ? (
                  <span style={{ color: "rgb(255, 108, 0)" }}>{data}</span>
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
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 100% !important;
  height: 100%;
  padding: 10px 0 60px !important;
  margin: 0 auto;

  & > .boardList {
    width: 100%;
    margin-top: -10px;

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

        & > em {
          display: block;
          width: 100%;
          height: 60px;
          line-height: 32px;
          padding: 14px 0;
          background: url(${TmpIcon}) no-repeat right center;
          background-size: 14px 8px;
        }
      }
    }

    & > li.faqCate {
      min-height: 35px;
      line-height: 35px;
      background: #a6a6a6;
      color: #fff;
      font-weight: 600;
      border-bottom: 0;

      & > div {
        min-height: 35px;
        height: auto;
        line-height: 35px;
      }
    }

    & > li.conTxt {
      font-size: 0.857em;
      background: #e7e7e7;
      color: #666;
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
  }
`;

export default CenterQuestion;
