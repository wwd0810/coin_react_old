import React, { useState, useCallback } from "react";
import styled from "styled-components";
import PresentHistory from "components/present/history";
import PresentDo from "./do";

function Present() {
  const navMenu = ["선물하기", "선물내역"];
  const [state, setState] = useState({
    nav: 0,
  });

  const items = () => {
    if (state.nav === 0) return <PresentDo />;
    if (state.nav === 1) return <PresentHistory />;

    return null;
  };

  return (
    <Wrap>
      <h2>선물하기</h2>
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
  padding: 10px 0 60px;
  & > h2 {
    max-width: 1080px;
    height: 88px;
    line-height: 33px;
    color: #212a39;
    font-size: 2em;
    padding: 40px 0 10px 25px;
    background: url(/sw/resources/img/bg-title-circle.png) no-repeat left 48px;
    font-family: NanumSquare;
    margin: 0 auto;
  }
 & > .tabsWrap {  
  min-height: 60px;
    background: #fff !important;

    padding-left: 30px !important;
    padding-right: 30px !important;
    

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
padding: 0;
  & > h2 {
    display: none;
  }

  
  & > .tabsWrap {
      min-height: 40px;
      padding-left: 10px !important;
      padding-right: 10px !important;
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
padding: 0;
   & > h2 {
    display: none;
  }
`}
${({ theme }) => theme.media.desktop`
   
`}

${({ theme }) => theme.media.large`s

`}
`;

export default Present;
