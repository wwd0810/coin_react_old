export type SubType = {
  SubType:
    | "RECEIVED_GIFT"
    | "SENT_GIFT"
    | "APPLY_FOR_PURCHASE"
    | "CANCEL_PURCHASE_REQUEST"
    | "END_UNPAID_TRANSACTION"
    | "REJECT_TRANSACTION_APPROVAL"
    | "DEPOSIT_CONFIRM_REQUEST"
    | "CONFIRM_DEPOSIT"
    | "TRANSACTION_APPROVAL"
    | "SALES_COMPLETE"
    | "INQUIRY_RESPONSE"
    | "RELEASE_RESTRICT"
    | "RESTRICT";
};

export type Notice = {
  id: number;
  prefix: string;
  message: string;
  suffix: string;
  type: "TRADE" | "WALLET" | "GIFT" | "ETC";
  sub_type:
    | "RECEIVED_GIFT"
    | "SENT_GIFT"
    | "APPLY_FOR_PURCHASE"
    | "CANCEL_PURCHASE_REQUEST"
    | "END_UNPAID_TRANSACTION"
    | "REJECT_TRANSACTION_APPROVAL"
    | "DEPOSIT_CONFIRM_REQUEST"
    | "CONFIRM_DEPOSIT"
    | "TRANSACTION_APPROVAL"
    | "SALES_COMPLETE"
    | "INQUIRY_RESPONSE"
    | "RELEASE_RESTRICT"
    | "RESTRICT"
    | "ETC";
  status: "NOT_READ" | "READ";
  createdDate: Date;
  modifiedDate: Date;
  user_id: number;
};
