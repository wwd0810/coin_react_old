import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import CenterNotice from "components/center/notice";

interface Props extends RouteComponentProps, ReactCookieProps {}

class CenterNoticeContainer extends React.Component<Props> {
  render() {
    return <CenterNotice />;
  }
}

export default withCookies(withRouter(CenterNoticeContainer));
