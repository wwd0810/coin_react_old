import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import Selling from "components/selling";

interface Props extends RouteComponentProps, ReactCookieProps {}

class SellingContainer extends React.Component<Props> {
  render() {
    return <Selling />;
  }
}

export default withCookies(withRouter(SellingContainer));
