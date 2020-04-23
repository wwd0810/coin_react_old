import React, { useCallback, useState } from "react";
import styled from "styled-components";
import NoticeItem from "./item";
import { Notice as TNotice } from "stores/notice/types";
import { Paging } from "stores/market/types";

interface Props {
  notices: TNotice[];
  paging: Paging;
  loadMore: (page: number, type?: "TRADE" | "WALLET" | "GIFT" | "ETC") => void;
  noticeRead: (id: number) => void;
}

function Notice({ notices, loadMore, paging, noticeRead }: Props) {
  // ====================options====================
  const options = ["전체(기본)", "거래알림", "스마트월렛알림", "선물알림"];

  // ====================states====================
  const [state, setState] = useState({
    currentOption: "전체(기본)",
    page: 0,
  });

  // ====================useCallbacks====================
  const onSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      const { value } = e.target;

      setState({ ...state, currentOption: value });

      let type: "TRADE" | "WALLET" | "GIFT" | "ETC" | undefined;

      if (value === "전체(기본)") type = undefined;
      else if (value === "거래알림") type = "TRADE";
      else if (value === "스마트월렛알림") type = "WALLET";
      else if (value === "선물알림") type = "GIFT";
      else type = "ETC";

      loadMore(0, type);
    },
    [loadMore, state],
  );
  const onLoadMore = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      let type: "TRADE" | "WALLET" | "GIFT" | "ETC" | undefined;

      if (state.currentOption === "전체(기본)") type = undefined;
      else if (state.currentOption === "거래알림") type = "TRADE";
      else if (state.currentOption === "스마트월렛알림") type = "WALLET";
      else if (state.currentOption === "선물알림") type = "GIFT";
      else type = "ETC";

      loadMore(state.page + 1, type);
    },
    [loadMore, state.currentOption, state.page],
  );

  return (
    <Wrap>
      <div className="alarmTopOut">
        <section>
          <select onChange={onSelectChange} value={state.currentOption}>
            {options.map((data, idx) => (
              <option key={idx}>{data}</option>
            ))}
          </select>
        </section>
      </div>
      <div className="wrap">
        <ul className="alarnList">
          {notices.map((data, idx) => (
            <NoticeItem notice={data} key={idx} noticeRead={noticeRead} />
          ))}
        </ul>
        <div className="btn-wrap">
          {paging ? (
            paging.count / paging.limit > paging.page + 1 ? (
              <button onClick={onLoadMore}>더보기</button>
            ) : null
          ) : null}
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`

    & > .alarmTopOut {
        width: 100%;
        height: 72px;
        padding: 15px 0;
        background: #fff;

        & > section {
            padding-left: 10px !important;
            padding-right: 10px !important;
            max-width: 1080px;
            height: auto;
            margin: 0 auto;
            overflow: hidden;

            & > select {
                width: 100%;
            }
        }
    }

    & > .wrap {
        max-width: 1080px;
        height: 100%;
        padding: 10px 10px 30px;
        margin: 0 auto; 

        & > .alarmList {
            width: 100%;
            height: auto;
        }
    }

    .btn-wrap {
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

${({ theme }) => theme.media.mobile`

`}
${({ theme }) => theme.media.tablet`


`}
${({ theme }) => theme.media.desktop`

`}

${({ theme }) => theme.media.large`

`}
`;

export default Notice;
