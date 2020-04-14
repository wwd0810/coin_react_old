import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import CenterInquiry from "components/center/inquiry/CenterInquiry";

interface Props extends RouteComponentProps, ReactCookieProps {}

class CenterInquiryContainer extends React.Component<Props> {
  render() {
    return <CenterInquiry />;
  }
}

export default withCookies(withRouter(CenterInquiryContainer));
