import React from "react";
import styled from "styled-components";

import TmpIcon from "assets/tmp.png";

function SellingApply() {
  return (
    <Wrap>
      <div className="dealDlcTop">
        <section>
          <div className="inBox">
            <div className="pcOut">
              <img src={TmpIcon} />
              <div className="boxR">
                <span>
                  나의 보유딜링<em>(DLC)</em>
                  <i> : </i>
                </span>
                <p>
                  100,000,000<em> DLC</em>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ul className="dealWrite">
        <form>
          <li>
            <p className="boxL">
              <label>판매수량</label>
            </p>
            <p className="boxC">
              <input type="text" />
              <img src={TmpIcon} />
            </p>
          </li>
          <li>
            <p className="boxL">
              <label>판매수수료</label>
            </p>
            <p className="boxC">
              <input type="text" readOnly />
            </p>
            <p className="boxR">DLC</p>
          </li>
          <li>
            <p className="boxL">
              <label>개당가격</label>
            </p>
            <p className="boxC">
              <input type="text" />
              <img src={TmpIcon} />
            </p>
            <p className="boxR">
              <button className="qtyPlus"></button>
              <button className="qtyMinus"></button>
            </p>
          </li>
          <li>
            <p className="boxL">
              <label>상한가</label>
            </p>
            <p className="boxC">
              <input type="text" readOnly />
            </p>
            <p className="boxR">KRW(원)</p>
          </li>
          <li>
            <p className="boxL">
              <label>하한가</label>
            </p>
            <p className="boxC">
              <input type="text" readOnly />
            </p>
            <p className="boxR">KRW(원)</p>
          </li>
          <li className="last">
            <p className="boxL">
              <label>판매가</label>
            </p>
            <p className="boxC">
              <input type="text" className="cNavy" readOnly />
            </p>
            <p className="boxR">KRW(원)</p>
          </li>
        </form>
      </ul>
      <div className="btnWrap">
        <button className="cGray">초기화</button>
        <button>등록하기</button>
      </div>
      <div className="term">
        <p className="inqInfoTxt">
          - 개당 가격은 실시간 상/하한가 금액 내에서만 입력가능
          <br />
          - 판매수수료는 판매가의 1%입니다.
          <br />- 판매 등록 시 판매 수수료가 차감되며, 최소 판매 수수료는 1딜링입니다.
        </p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: block;
  padding-bottom: 40px !important;
  padding-top: 20px !important;
  background: #fff !important;

  & > .term {
    padding-left: 30px !important;
    padding-right: 30px !important;

    & > .inqInfoTxt {
        padding: 10px 15px;
        background: #f6f6f6;
        color: #666;
        font-size: 0.857em;
    }
  }

& > .btnWrap {
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
    padding: 30px 0;
    padding-left: 30px !important;
    padding-right: 30px !important;
    margin-bottom: 40px !important;

    & > button {
        height: 35px;
        line-height: 33px;
        padding: 0 10px;
        font-size: 0.857em;
        width: 49%;
        margin-left: 2%;
        overflow: hidden;
        display: inline-block;
        color: #fff;
        letter-spacing: -0.5px;
        text-align: center;
        vertical-align: top;
        background-color: #322f78;
        border: 1px solid #322f78;
        :first-child{
            margin-left: 0px !important;
        }
    }

    & > .cGray {
        background: #888;
        border: 1px solid #888;
        color: #fff;
    }
}

  & > .dealWrite {
    width: 100%;
    height: auto;
    padding: 20px 30px 0;

    

    & > form > li {
        position: relative;
        min-height: 42px;
        margin-bottom: 10px;
        overflow: hidden;

        & > .boxL {
            float: left;
            width: 80px;
            height: 100%;
            line-height: 42px;
            font-weight: 600;   

            & > label {
                padding: 0;
            }
        }

        & > .boxC {
            position: relative;
            margin-left: 80px;
            width: auto;
            height: 100%;
            padding-right: 250px;

            & > input {
                text-align: right;
                width: 100%;

                :read-only{
                    background: #f5f7f8;
                }
            }

            

            & > img {
                position: absolute;
                top: 13px;
                left: 11px;
                width: 22px;
            }
        }

        & > .boxR {
            position: absolute;
            top: 0;
            right: 0px;
            width: 250px;
            height: 100%;
            padding-left: 10px;
            line-height: 39px;
            color: #666;

            & > .qtyPlus{
                width: 35px;
                height: 42px;
                border: 1px solid #e0e0e0;
                background: #fff url(${TmpIcon}) no-repeat center center;
                background-size: 12px;
                border-radius: 2px;
                overflow: hidden;
                text-indent: -9999px;
            }

            & > .qtyMinus {
                width: 35px;
                height: 42px;
                border: 1px solid #e0e0e0;
                background: #fff url(${TmpIcon}) no-repeat center center;
                background-size: 12px 4px;
                border-radius: 2px;
                overflow: hidden;
                text-indent: -9999px;
                margin-left: 3px;
            }
        }
    }

    & > form > .last {
        padding-bottom: 20px;
        border-bottom: 1px solid #e7e7e7;
        & > p > .cNavy {
            :read-only{
                border: 1px solid #2b2a41;
                color: #fff;
                font-weight: 600;
                background: #2b2a41;
            }
        }
    }
  }

  & > .dealDlcTop {
    width: 100%;
    height: 85px;
    font-family: NanumSquare;
    padding-left: 30px !important;
    padding-right: 30px !important;


    & > section {
        max-width: 1080px;
        padding: 0;
        margin: 0 auto;

        & > .inBox {
            width: 100%;
            height: 85px;
            padding: 25px 30px 15px;
            border-radius: 10px;
            background: #2d28af repeat-x left bottom;
            text-align: center;

            & > .pcOut {
                display: inline-block;
                height: 42px;
                max-width: 450px;
                overflow: hidden;

                & > img {
                    float: left;
                    width: 37px;
                    border-radius: 19px;
                    box-shadow: 5px 5px #1b195a;
                }

                & > .boxR {
                    float: right;
                    color: #fde802;
                    font-weight: 600;
                    text-align: right;

                    & > span {
                        float: left;
                        display: block;
                        height: 35px;
                        line-height: 35px;
                        color: #fff;
                        font-weight: 600;
                        font-size: 1.285em;
                        padding-left: 10px;

                        & > em {
                            font-weight: 300;
                        }

                        & > i {
                            font-style: normal;
                            padding-right: 10px;
                        }
                    }

                    & > p {
                        float: left;
                        max-width: 250px;
                        height: auto;
                        line-height: 35px;
                        font-size: 2.143em;
                        padding-top: 0px;
                        text-align: left;

                        & > em {    
                            font-size: 17px;
                            font-weight: 300;
                        }
                    }
                }
            }
        }
    }
  }

${({ theme }) => theme.media.mobile`

& > .term {
    padding-left: 10px !important;
    padding-right: 10px !important;
}

& > .btnWrap {
    padding-left: 10px !important;
    padding-right: 10px !important;
}

& > .dealWrite {
    padding: 20px 10px 0;

    & > form > li {

        & > .boxL {
            width: 65px;
            letter-spacing: -1px;
        }

        & > .boxC {
            margin-left: 65px;
        padding-right: 100px;
        }

        & > .boxR {
            width: 100px;
        }
    }
}

& > .dealDlcTop {
    height: 100px;
    padding-left: 10px !important;
    padding-right: 10px !important;
}

& > .dealDlcTop > section > .inBox {
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

`}
${({ theme }) => theme.media.tablet`

& > .dealDlcTop {
    height: 100px;
}

& > .dealDlcTop > section > .inBox {
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

`}
${({ theme }) => theme.media.desktop`
   
`}

${({ theme }) => theme.media.large`

`}
`;

export default SellingApply;
