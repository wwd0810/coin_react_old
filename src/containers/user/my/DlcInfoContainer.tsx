import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import DlcInfo from "components/user/my/dlcInfo";

interface Props extends RouteComponentProps, ReactCookieProps {}

class DlcInfoContainer extends React.Component<Props> {
  render() {
    return <DlcInfo />;
  }
}

export default withCookies(withRouter(DlcInfoContainer));
