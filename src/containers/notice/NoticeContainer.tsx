import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import Notice from "components/notice";

interface Props extends RouteComponentProps, ReactCookieProps {}

class NoticeContainer extends React.Component<Props> {
  render() {
    return <Notice />;
  }
}

export default withCookies(withRouter(NoticeContainer));
