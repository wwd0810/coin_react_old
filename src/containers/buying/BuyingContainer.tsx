import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import Buying from "components/buying";

interface Props extends RouteComponentProps, ReactCookieProps {}

class BuyingContainer extends React.Component<Props> {
  render() {
    return <Buying />;
  }
}

export default withCookies(withRouter(BuyingContainer));
