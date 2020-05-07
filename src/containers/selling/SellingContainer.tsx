import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";
import { inject, observer } from "mobx-react";

import Selling from "components/selling";

import MarketStore from "stores/market";
import UserStore from "stores/users";

import parse from "lib/parse";

interface Props extends RouteComponentProps, ReactCookieProps {
  marketStore?: MarketStore;
  userStore?: UserStore;
}

@inject("marketStore", "userStore")
@observer
class SellingContainer extends React.Component<Props> {
  private MarketStore = this.props.marketStore! as MarketStore;
  private UserStore = this.props.userStore! as UserStore;

  async componentDidMount() {
    await this.UserStore.GetUserAccount();
    await this.MarketStore.GetMySell(0);
  }

  postSell = async (quantity: number, price: number) => {
    await this.MarketStore.PostSell(quantity, price);

    if (this.MarketStore.success["POST_SELL"]) {
      await this.UserStore.GetUserAccount();
      alert("딜링판매 성공");
    } else {
      if (this.MarketStore.failure["POST_SELL"][0]) {
        const code = parse(this.MarketStore.failure["POST_SELL"][1]);
        alert(code);
      }
    }
  };
  render() {
    return <Selling postSell={this.postSell} userAccount={this.UserStore.UserAccount!} />;
  }
}

export default withCookies(withRouter(SellingContainer));
