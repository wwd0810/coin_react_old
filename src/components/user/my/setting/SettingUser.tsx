import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { User, Account } from "stores/users/types";

interface Props {
  user?: { user: User; account: Account };
}

function SettingUser({ user }: Props) {
  return (
    <Wrap id="wrap" className="wd100p pdt">
      <ul className="memInfo">
        <li className="memInfo">
          <div className="lh30">
            <strong className="sTit">{user?.user.username}</strong>
            <br />
            <em>아이디</em>
          </div>
        </li>
        <li>
          <div>
            <strong className="sTit">비밀번호 변경</strong>
            <Link to=""></Link>
          </div>
        </li>
        <li>
          <div className="lh30">
            <em>이메일 주소</em>
            <br />
            <strong className="sTit">user Email</strong>
            <p>
              이메일수신
              <input type="checkbox" id="mb_mailling_ondlc" />
              <label htmlFor="mb_mailling_ondlc">
                <span></span>
              </label>
            </p>
          </div>
        </li>
        <li>
          <div className="lh30">
            <strong className="sTit">
              {user?.user.username} / {user?.user.birth} /{" "}
              {user?.user.sex === "MAN" ? "남자" : "여자"}
            </strong>
            <br />
            <em>이름 / 생년월일 / 성별</em>
          </div>
        </li>
        <li>
          <div className="lh30">
            <strong className="sTit">010-1111-1111</strong>
            <br />
            <em>휴대폰번호</em>
            <p>
              SMS 수신
              <input type="checkbox" id="mb_mailling_ondlc" />
              <label htmlFor="mb_mailling_ondlc">
                <span></span>
              </label>
            </p>
          </div>
        </li>
        <li>
          <div className="lh30">
            <strong className="sTit">은행이름 1230912039120</strong>
            <br />
            <em>입출금 계좌</em>
          </div>
        </li>
        <li>
          <div>
            <strong className="sTit">회원탈퇴</strong>
            <Link to=""></Link>
          </div>
        </li>
      </ul>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default SettingUser;
