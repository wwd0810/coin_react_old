import React from "react";
import styled from "styled-components";
import NoticeItem from "./item";

function Notice() {
  const options = ["전체(기본)", "거래알림", "스마트월렛알림", "선물알림"];
  return (
    <Wrap>
      <div className="alarmTopOut">
        <section>
          <select>
            {options.map((data, idx) => (
              <option key={idx}>{data}</option>
            ))}
          </select>
        </section>
      </div>
      <div className="wrap">
        <ul className="alarnList">
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
          <NoticeItem />
        </ul>
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
