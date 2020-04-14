import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";
import { inject, observer } from "mobx-react";

import MarketStore from "stores/market";

import BuyingDetail from "components/buying/detail";

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
  render() {
    return <BuyingDetail product={this.MarketStore.Product!} />;
  }
}

export default withCookies(withRouter(BuyingDetailContainer));
