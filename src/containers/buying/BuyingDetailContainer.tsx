import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";
import { inject, observer } from "mobx-react";

import MarketStore from "stores/market";

import BuyingDetail from "components/buying/detail";
import parse from "lib/parse";

interface Props extends ReactCookieProps, RouteComponentProps {
  marketStore?: MarketStore;
  idx: string;
}

@inject("marketStore")
@observer
class BuyingDetailContainer extends React.Component<Props> {
  private MarketStore = this.props.marketStore! as MarketStore;

  async componentDidMount() {
    await this.MarketStore.GetProductDetail(this.props.idx);
  }

  buyApply = async (id: number) => {
    await this.MarketStore.PostBuyApply(id);

    if (this.MarketStore.success["POST_BUY_APPLY"]) {
      alert("구매신청에 성공하였습니다.");
    } else {
      if (this.MarketStore.failure["POST_BUY_APPLY"]) {
        const code = parse(this.MarketStore.failure["POST_BUY_APPLY"][1]);
        alert(code);
      }
    }
  };
  render() {
    return <BuyingDetail product={this.MarketStore.Product!} buyApply={this.buyApply} />;
  }
}

export default withCookies(withRouter(BuyingDetailContainer));
