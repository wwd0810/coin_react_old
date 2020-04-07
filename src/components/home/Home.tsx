import React from "react";
import styled from "styled-components";
import AvgQuote from "components/common/avgQuote";

import TmpIcon from "assets/tmp.png";
import CoinList from "./coinList";

function Home() {
  return (
    <Wrap>
      <AvgQuote />
      <Content>
        <form>
          <div className="listTopUtil">
            <div className="boxL">
              <button>
                최신순
                <img src={TmpIcon} />
              </button>
              <button>
                가격순
                <img src={TmpIcon} />
              </button>
            </div>
            <div className="boxR">
              <input type="text" placeholder="딜링갯수 / 판매자ID 검색" />
              <button type="button">
                <img src={TmpIcon} />
              </button>
            </div>
          </div>
        </form>
        <CoinList />
      </Content>
    </Wrap>
  );
}

const Wrap = styled.div``;

const Content = styled.div`
  max-width: 1080px;
  height: 100%;
  padding: 10px 10px 20px;
  margin: 0 auto;

    & > form {
        & > .listTopUtil {
        width: 100%;
        height: 42px;
        overflow: hidden;
        margin-bottom: 10px;

            & > .boxL {
                float: left;
                width: 45%; 
                height: 42px;
                padding-right: 1%;

                & > button {
                    float: left;
                    width: 49.5%;
                    max-width: 85px;
                    height: 42px;
                    line-height: 40px;
                    border: 1px solid #e3e3e3;
                    border-radius: 3px;
                    background: #fff;
                    color: #333;
                    font-size: 1.214em;

                    :last-child {
                        margin-left: 1%;
                    }

                    & > img {
                        width: 11px;
                        margin-left: 5px;
                    }
                }
            }
            & > .boxR {
                position: relative;
                float: right;
                width: 55%;
                height: 42px;

                & > input {
                    width: 100%;
                    padding-right: 30px;
                }

                & > button {
                    position: absolute;
                    top: 6px;
                    right: 6px;
                    width: 30px;
                    height: 30px;
                    background-size: 15px 15px;
                    /* text-indent: -999px; */
                    overflow: hidden;

                }

            }
        }
    }

${({ theme }) => theme.media.mobile`

`}
${({ theme }) => theme.media.tablet`

`}
${({ theme }) => theme.media.desktop`
    padding: 10px 10px 30px;
`}

${({ theme }) => theme.media.large`s

`}
`;

export default Home;
