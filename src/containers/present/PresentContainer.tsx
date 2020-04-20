import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import Present from "components/present/Present";

interface Props extends RouteComponentProps, ReactCookieProps {}

class PresentContainer extends React.Component<Props> {
  render() {
    return <Present />;
  }
}

export default withCookies(withRouter(PresentContainer));
