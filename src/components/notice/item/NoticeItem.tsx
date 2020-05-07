import React, { useCallback } from "react";
import styled from "styled-components";

import TmpIcon from "assets/tmp.png";
import { Notice } from "stores/notice/types";

interface Props {
  notice: Notice;
  noticeRead: (id: number) => void;
}

function NoticeItem({ notice, noticeRead }: Props) {
  // ==================== useCallback ====================
  const onNoticeRead = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      noticeRead(notice.id);
    },
    [notice.id, noticeRead],
  );

  const getSubType = () => {
    if (notice.sub_type === "RECEIVED_GIFT") return "선물받기";
    else if (notice.sub_type === "SENT_GIFT") return "선물하기";
    else if (notice.sub_type === "APPLY_FOR_PURCHASE") return "구매신청";
    else if (notice.sub_type === "CANCEL_PURCHASE_REQUEST") return "구매신청취소";
    else if (notice.sub_type === "END_UNPAID_TRANSACTION") return "미입금거래종료";
    else if (notice.sub_type === "REJECT_TRANSACTION_APPROVAL") return "거래승인거부";
    else if (notice.sub_type === "DEPOSIT_CONFIRM_REQUEST") return "입금확인요청";
    else if (notice.sub_type === "CONFIRM_DEPOSIT") return "입금확인완료";
    else if (notice.sub_type === "TRANSACTION_APPROVAL") return "거래승인";
    else if (notice.sub_type === "SALES_COMPLETE") return "판매완료";
    else if (notice.sub_type === "INQUIRY_RESPONSE") return "1:1문의답변";
    else if (notice.sub_type === "RELEASE_RESTRICT") return "제재해제알림";
    else if (notice.sub_type === "RESTRICT") return "제재알림";
    else return "기타";
  };

  return (
    <Wrap>
      <p>
        <strong>{notice.createdDate.toString()}</strong>
        {notice.status === "NOT_READ" ? (
          <button className="alarm" onClick={onNoticeRead}></button>
        ) : null}
        <button className="delete">
          <img src={TmpIcon} alt="" />
        </button>
      </p>
      <div>
        <img src={TmpIcon} alt="" />
        <p>
          <em
            className={
              getSubType().includes("취소") ||
              getSubType().includes("받기") ||
              getSubType().includes("종료") ||
              getSubType().includes("거부")
                ? "red"
                : ""
            }
          >
            {getSubType()}
          </em>
          <span> {notice.prefix}</span>
          <br />
          <strong>
            {/* foryou1sj<span>님의</span> 구매신청취소<span>를 했습니다.</span> */}
            {notice.message}
          </strong>
          <br />
          <span>{notice.suffix}</span>
        </p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.li`
  width: 100%;
  min-height: 110px;
  margin-bottom: 20px;

  & > p {
    height: 30px;
    line-height: 14px;
    padding: 8px 10px;
    background: #e7e7e7;

    & > .alarm {
      width: 14px;
      height: 14px;
      background: url(${TmpIcon}) no-repeat center center;
      background-size: 12px 14px;
      margin: -2px 0 0 10px;
    }

    & > .delete {
      display: block;
      float: right;
      height: 14px;
      line-height: 14px;

      & > img {
        width: 10px;
      }
    }
  }

  & > div {
    height: auto;
    min-height: 80px;
    padding: 20px 10px 15px;
    background: #fff;
    overflow: hidden;

    & > img {
      float: left;
      width: 38px;
    }

    & > p {
      margin-left: 45px;
      height: auto;
      min-height: 40px;
      line-height: 20px;
      padding: 0px;
      background: none;
      letter-spacing: -1px;

      & > em {
        display: inline-block;
        height: 20px;
        line-height: 18px;
        border: 1px solid #adc4fa;
        color: #0f4cd7;
        font-weight: 600;
        font-size: 0.846em;
        padding: 0 8px;
        border-radius: 10px;
      }

      & > em.red {
        border: 1px solid #f69696;
        color: #c80c0c;
      }

      & > span {
        color: #666;
        font-size: 0.857em;
        line-height: 13px;
      }

      & > strong {
        color: #333;

        & > span {
          color: #333;
          font-weight: 400;
          font-size: 1em;
        }
      }
    }
  }
`;

export default NoticeItem;
