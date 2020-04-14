import React from "react";
import styled from "styled-components";
import CoinItem from "../coinItem";

import { Dealing, Paging } from "stores/market/types";

interface Props {
  dlList: Dealing[];
  paging: Paging;
  getList: (page: number, order: string, query?: string) => void;
  getPage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function CoinList({ dlList, paging, getPage }: Props) {
  return (
    <Wrap>
      {dlList.map((data, idx) => (
        <CoinItem key={idx} dealing={data} />
      ))}
      <div className="btn-wrap">
        {paging ? (
          paging.count / paging.limit > paging.page + 1 ? (
            <button onClick={getPage}>더보기</button>
          ) : null
        ) : null}
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

export default CoinList;
