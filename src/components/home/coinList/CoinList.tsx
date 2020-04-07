import React from "react";
import styled from "styled-components";
import TmpIcon from "assets/tmp.png";

function CoinList() {
  const TestArr = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
  return (
    <Wrap>
      {TestArr.map((data, idx) => (
        <Item key={idx}>
          <a>
            <p>
              1딜링(DLC) 당 <strong>10,000 KRW</strong>
              <span> | 482일전</span>
            </p>
            <p className="bot">
              <strong>
                100 <em>DLC</em>
              </strong>
              <strong>
                500,000 <em>KRW</em>
              </strong>
            </p>
            <p className="seller">
              <span className="userInfo">판매자 chan0314</span>
              <span className="auth">
                <img src={TmpIcon} /> 인증
              </span>
            </p>
          </a>
        </Item>
      ))}

      <div className="btn-wrap">
        <button>더보기</button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.ul`
  width: 100%;
  padding-right: 1px;
  height: auto;
  overflow: hidden;

  & > .btn-wrap {
    padding-top: 10px !important;
    width: 100%;
    height: auto;
    text-align: center;
    overflow: hidden;
    padding: 30px 0;
    max-width: 1080px;
    height: auto;
    margin: 0 auto;
    overflow: hidden;

    & > button {
      width: 100%;

      height: 42px;
      line-height: 40px;
      padding: 0 10px;

      overflow: hidden;
      display: inline-block;
      color: #fff;
      letter-spacing: -0.5px;
      text-align: center;
      vertical-align: top;
      background-color: #322f78;
      border: 1px solid #322f78;

      font-size: 1em;
    }
  }
`;

const Item = styled.li`
    position: relative;
    float: left;
    width: 49.5%;
    height: 130px;
    background: #fff;
    margin: 0 1% 10px 0;

    :nth-child(even) {
        margin-right: 0;
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
                float: left;
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

export default CoinList;
