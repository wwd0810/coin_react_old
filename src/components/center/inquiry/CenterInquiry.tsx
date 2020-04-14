import React, { useState } from "react";
import styled from "styled-components";

import InquiryApply from "./apply";
import InquiryHistory from "./history";

function CenterInquiry() {
  const navMenu = ["문의하기", "답변확인"];

  const [state, setState] = useState({
    nav: 0,
  });

  const items = () => {
    if (state.nav === 0) return <InquiryApply />;
    if (state.nav === 1) return <InquiryHistory />;

    return null;
  };

  return (
    <Wrap>
      <div className="tabsWrap">
        <ul className="tabs">
          {navMenu.map((data, idx) => (
            <li key={idx} title={idx.toString()}>
              <span
                className={idx === state.nav ? "active" : ""}
                onClick={() => {
                  setState({ ...state, nav: idx });
                }}
              >
                {data}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {items()}
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 1080px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  padding: 00px 0 60px;
 & > .tabsWrap {  
  min-height: 60px;
    background: #fff !important;
    
    

  & > .tabs {
    min-height: 60px;
    overflow: hidden;
    max-width: 1080px;
    margin: 0 auto;

    

    & > li {
      width: 50%;
      float: left;

      & > span {
        display: block;
        height: 60px;
        font-size: 1.357em;
        color: #666;
        line-height: 57px;
        /* background: #fff url(/sw/resources/img/bg-tab-line.png) repeat-x left 59px; */
        border-bottom: 1px solid #ddd;
        text-align: center;
        padding-bottom: 3px;
        font-family: NanumSquare;
      }

      & > .active {
        color: #212a39;
        font-weight: 600;
        border-bottom: 3px solid #212a39;
        padding-bottom: 0;
      }
    }
  }
 }
${({ theme }) => theme.media.mobile`
  & > .tabsWrap {
      min-height: 40px;
      & > .tabs {
        min-height: 40px;
        overflow: hidden;
      
        & > li > span {
          height: 40px;
          font-size: 1.071em;
          line-height: 38px;
        }
      }
    }
`}
${({ theme }) => theme.media.tablet`
`}
${({ theme }) => theme.media.desktop`
   
`}

${({ theme }) => theme.media.large`s

`}
`;

export default CenterInquiry;
