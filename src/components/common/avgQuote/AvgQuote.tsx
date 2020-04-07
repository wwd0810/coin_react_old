import React from "react";
import styled from "styled-components";

function AvgQuote() {
  return (
    <Wrap>
      <div className="inBox">
        <strong>금일 딜링(DLC) 평균시세</strong>
        <p>
          10,000<em> KRW</em>
        </p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 110px;

  padding: 0px 10px ;
  background: ${({ theme }) => theme.colors.primary_color};

  & > .inBox {
    max-width: 1060px;
    padding: 30px 10px 0;
    margin: 0 auto;
    width: 100%;
    height: 110px;
    padding: 20px 15px 15px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #2d28af;

    & > strong {
        display: block;
        font-weight: bold;
        height: 23px;
        line-height: 23px;
        font-size: 1.285em;

        color: #fff;
    }

    & > p {
        height: auto;
        line-height: 42px;
        font-size: 2.857em;
        padding-top: 15px;
        font-weight: 600;
        text-align: right;

        color: #fddc02;

        & > em {
            font-size: 0.5em;
        font-weight: 300;
        }
    }
  }
    ${({ theme }) => theme.media.mobile`

    `}
    ${({ theme }) => theme.media.tablet`
  
    `}
    ${({ theme }) => theme.media.desktop`
        
        float: none;
        width: 100%;
        height: 150px;
        border-bottom: 0;
        background: none;
        max-width: 1080px;
        padding: 30px 10px 0;
        margin: 0 auto;
        & > .inBox {
            
            height: 120px;
            padding: 20px 30px 15px;
        }
    `}
    ${({ theme }) => theme.media.large`
  
    `};
`;

export default AvgQuote;
