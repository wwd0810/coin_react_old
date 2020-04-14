import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function InquiryApply() {
  const options = [
    "-문의선택-",
    "딜링구매",
    "딜링판매",
    "앱 이용문의",
    "본인확인 및 인증문의",
    "기타문의",
  ];
  return (
    <Wrap className="tab-contents plr10 pt10 pb40 bgWhite">
      <ul className="inqWrite">
        <li>
          <select>
            {options.map((data, idx) => (
              <option key={idx}>{data}</option>
            ))}
          </select>
        </li>
        <li>
          <input type="text" placeholder="제목을 입력해주세요 (최소 5자이상, 최대 50자 이하)" />
        </li>
        <li>
          <textarea placeholder="내용을 입력해주세요 (최소 5자이상, 최대 2000자 이하)" />
        </li>
        <li>
          <div className="file-add">
            <ul>
              <li>
                <span className="file-box">
                  <label>파일선택</label>
                  <input readOnly type="text" />
                </span>
                <button className="innerBtn">삭제</button>
              </li>
              <li>
                <span className="file-box">
                  <label>파일선택</label>
                  <input readOnly type="text" />
                </span>
              </li>
              <li>
                <span className="file-box">
                  <label>파일선택</label>
                  <input readOnly type="text" />
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <input type="text" readOnly />
        </li>
        <li>
          <input type="text" readOnly />
        </li>
      </ul>
      <div className="btnWrap pt10 insertBoard">
        <button className="btn h42 w49">문의등록</button>
        <Link to="/center" className="btn h42 cGray w48">
          취소
        </Link>
      </div>
      <p className="inqInfoTxt">
        고객센터 운영시간 이후에 등록하신 문의는 다음날 처리 및 반영되오니 이점 양해 부탁드립니다.
      </p>
    </Wrap>
  );
}

const Wrap = styled.div`
  & > .inqWrite {
    width: 100%;
    height: auto;
    padding-top: 10px;

    & > li {
      min-height: 42px;
      margin-bottom: 10px;
      overflow: hidden;

      & > select {
        width: 100%;
      }

      & > input {
        width: 100%;
      }

      & > textarea {
        width: 100%;
        height: 277px;
        border-radius: 2px;
      }

      & > .file-add {
        & > ul {
          & > li {
            margin-bottom: 8px;

            & > .innerBtn {
              display: inline-block;
              padding: 0 5px;
              height: 42px;
              line-height: 42px;
              font-size: 11px;
              background-color: #e32106;
              color: #ffffff;
              border-radius: 2px;
            }

            & > .file-box {
              width: 80%;
              display: inline-block;
              position: relative;
              padding-right: 75px;
              & > input[type="text"] {
                width: 100%;
              }

              & > label {
                position: absolute;

                top: 0;
                width: 68px;
                height: 42px;
                font-size: 11px;
                color: #333;
                line-height: 42px;
                letter-spacing: -1px;
                text-align: center;

                cursor: pointer;
                z-index: 199;
                border-radius: 2px;

                right: 5px;
                margin-right: 0;
                background-color: #fff;
                border: 1px solid #d3d3d3;
                color: #777777;
              }
            }
          }
        }
      }
    }
  }

  & > .insertBoard {
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
    padding: 30px 0;

    & > .btn:first-child {
      margin-left: 0px !important;
    }

    & > .btn {
      overflow: hidden;
      display: inline-block;
      color: #fff;
      letter-spacing: -0.5px;
      text-align: center;
      vertical-align: top;
      background-color: #322f78;
      border: 1px solid #322f78;
      font-size: 1em;
      margin-left: 2%;
    }

    & > .btn.h42 {
      height: 42px;
      line-height: 40px;
      padding: 0 10px;
    }

    & > .btn.w49 {
      width: 49%;
    }

    & > .btn.cGray {
      background: #888;
      border: 1px solid #888;
      color: #fff;
    }

    & > .btn.w48 {
      width: 33%;
    }
  }

  & > .inqInfoTxt {
    padding: 10px 15px;
    background: #f6f6f6;
    color: #666;
    font-size: 0.857em;
  }
`;

export default InquiryApply;
