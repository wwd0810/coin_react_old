import { User } from "stores/users/types";

export type Paging = {
  page: number;
  limit: number;
  count: number;
  offset: number;
};

export type Dealing = {
  id: number;
  quantity: number;
  price: number;
  fees: number;
  status: string;
  createdDate: Date;
  modifiedDate?: Date;
  seller: User;
};
