export type User = {
  id: number;
  username: string;
  phone: string;
  birth: Date;
  sex: string;
  created_at: Date;
  updated_at: Date;
};

export type Account = {
  id: string;
  user_id: number;
  balance: number;
  created_at: Date;
  updated_at: Date;
};
