import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import MyWallet from "components/user/my";
import UserStore from "stores/users";
import { observer, inject } from "mobx-react";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: UserStore;
}

@inject("userStore")
@observer
class MyContainer extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  async componentDidMount() {
    await this.UserStore.GetUser();
  }

  render() {
    return <MyWallet user={this.UserStore.User!} />;
  }
}

export default withCookies(withRouter(MyContainer));
