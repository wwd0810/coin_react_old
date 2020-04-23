import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import AvgQuote from "components/common/avgQuote";

import { Dealing, Paging } from "stores/market/types";

import TmpIcon from "assets/tmp.png";
import CoinList from "./coinList";

interface Props {
  average: string;
  dlList: Dealing[];
  paging: Paging;
  getList: (page: number, order: string, query?: string, more?: boolean) => void;
}

function Home({ average, dlList, paging, getList }: Props) {
  // ====================Refs====================
  const searchRef = useRef<HTMLInputElement>(null);

  // ====================states====================
  const [state, setState] = useState({
    sort: "RECENT|DESC",
    page: 0,
    prePage: 0,
    first: true,
  });

  // ====================useCallbacks====================
  const getPageList = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setState({ ...state, prePage: state.page, page: state.page + 1, first: false });
    },
    [state],
  );

  const sortByRecent = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (state.sort === "RECENT|DESC")
        setState({ ...state, page: 0, prePage: 0, sort: "RECENT|ASC", first: false });
      else setState({ ...state, page: 0, prePage: 0, sort: "RECENT|DESC", first: false });
    },
    [state],
  );

  const sortByPrice = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (state.sort === "PRICE|DESC")
        setState({ ...state, page: 0, prePage: 0, sort: "PRICE|ASC", first: false });
      else setState({ ...state, page: 0, prePage: 0, sort: "PRICE|DESC", first: false });
    },
    [state],
  );

  // ====================functions====================
  const enterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // getList(state.page, state.sort, state.search, true);
      getList(state.page, state.sort, searchRef.current?.value);
    }
  };

  // ====================useEffects====================
  useEffect(() => {
    if (!state.first) {
      if (state.prePage !== state.page) {
        getList(state.page, state.sort, searchRef.current?.value, true);
      } else {
        getList(state.page, state.sort, searchRef.current?.value);
      }
    }
  }, [getList, state.sort, state.page, state.first, state.prePage]);

  // ====================render====================
  return (
    <Wrap>
      <AvgQuote avg={average} />
      <Content>
        <form className="form">
          <div className="listTopUtil">
            <div className="boxL">
              <button onClick={sortByRecent}>
                최신순
                <img src={TmpIcon} alt="" />
              </button>
              <button onClick={sortByPrice}>
                가격순
                <img src={TmpIcon} alt="" />
              </button>
            </div>
            <div className="boxR">
              <input
                type="text"
                placeholder="딜링갯수 / 판매자ID 검색"
                ref={searchRef}
                onKeyPress={enterPress}
              />
              <button type="button">
                <img src={TmpIcon} alt="" />
              </button>
            </div>
          </div>
        </form>
        <CoinList dlList={dlList} paging={paging} getList={getList} getPage={getPageList} />
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

    & > .form {
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
