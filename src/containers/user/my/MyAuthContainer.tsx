import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import MyAuth from "components/user/my/auth";

interface Props extends RouteComponentProps, ReactCookieProps {}

class MyAuthContainer extends React.Component<Props> {
  render() {
    return <MyAuth />;
  }
}

export default withCookies(withRouter(MyAuthContainer));
