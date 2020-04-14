import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import MarketStore from "stores/market";

import Home from "components/home/Home";
import { inject, observer } from "mobx-react";

interface Props extends RouteComponentProps, ReactCookieProps {
  marketStore?: MarketStore;
}

@inject("marketStore")
@observer
class HomeContainer extends React.Component<Props> {
  private MarketStore = this.props.marketStore! as MarketStore;

  async componentDidMount() {
    // 기본값으로 처름에는 페이지 : 0 정렬 : RECENT
    this.MarketStore.GetDealingList(0, "RECENT|DESC");
    this.MarketStore.GetAverageCondition();
  }

  getList = async (page: number, order: string, query?: string, more?: boolean) => {
    if (more) this.MarketStore.GetDealingList(page, order, query, more);
    else this.MarketStore.GetDealingList(page, order, query);
  };

  render() {
    return (
      <Home
        average={this.MarketStore.AverageCondition!}
        dlList={this.MarketStore.DealingList}
        paging={this.MarketStore.Paging!}
        getList={this.getList}
      />
    );
  }
}

export default withCookies(withRouter(HomeContainer));
