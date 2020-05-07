import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";
import { observer, inject } from "mobx-react";

import MyWallet from "components/user/my";
import UserStore from "stores/users";

import parse from "lib/parse";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: UserStore;
}

@inject("userStore")
@observer
class MyContainer extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  async componentDidMount() {
    await this.UserStore.GetUser();
    if (this.UserStore.failure["GET_USER"][0]) {
      const code = parse(this.UserStore.failure["GET_USER"][1]);
      alert(code);
    }
  }

  render() {
    return <MyWallet user={this.UserStore.User!} />;
  }
}

export default withCookies(withRouter(MyContainer));
