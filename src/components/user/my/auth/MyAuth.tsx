import React from "react";
import styled from "styled-components";

import TmpIcon from "assets/tmp.png";

function MyAuth() {
  return (
    <Wrap className="wd100p pdt mt-10">
      <div className="basicWd plr10 pt20">
        <div className="memberTop mb20">
          <h3>나의 보안등급</h3>
          <img src={TmpIcon} alt="" />
        </div>
        <ul className="memInfo mb15">
          <li>
            <div className="lh30">
              <em>본인인증</em>
              <br />
              <strong className="sTit">name / 010-1234-1234</strong>
              <br />
              <strong className="sTit">2020-03-03 12:12</strong>
              <p className="r10 h55">
                <button className="btn h25 cBlue1 br2">
                  <strong>인증완료</strong>
                </button>
                <br />
                <button className="btn h25 cWhite br2">
                  <strong>재인증</strong>
                </button>
              </p>
            </div>
          </li>
          <li>
            <div className="lh30">
              <em>입출금 계좌 인증</em>
              <br />
              <strong>은행명 **********3123</strong>
              <p className="r10 h55">
                <button className="btn h25 cBlue1 br2">
                  <strong>인증완료</strong>
                </button>
                <br />
                <button className="btn h25 cWhite br2">
                  <strong>재인증</strong>
                </button>
              </p>
            </div>
          </li>
        </ul>
        <ul>
          <li className="mb10">
            <strong>보안등급 안내</strong>
          </li>
          <li className="ti9 fs10 fc666 mb10">
            - 안전한 거래를 위해서는 보안등급 인증이 필요하며, 각 인증단계를 완료하시면 보안등급이
            상향됩니다.
          </li>
          <li className="ti9 fs10 fc666 mb10">
            - 보안등급이 높을수록 거래가 원활하게 이루어질 수 있으며, 보안등급 인증이 안되어 있을
            경우 딜링구매 및 판매에 제한을 받을 수 있습니다.{" "}
          </li>
          <li className="ti9 fs10 fc666">
            - 보안등급 인증을 진행할 수 없을 경우 고객센터에 문의하시기바랍니다.
            <br />
            ONDLC 고객센터 1800-4951{" "}
          </li>
        </ul>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default MyAuth;
