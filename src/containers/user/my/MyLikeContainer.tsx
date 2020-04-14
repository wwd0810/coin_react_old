import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import MyLike from "components/user/my/like";

interface Props extends RouteComponentProps, ReactCookieProps {}

class MyLikeContainer extends React.Component<Props> {
  render() {
    return <MyLike />;
  }
}

export default withCookies(withRouter(MyLikeContainer));
