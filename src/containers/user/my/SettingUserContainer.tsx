import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";
import { inject, observer } from "mobx-react";

import SettingUser from "components/user/my/setting/SettingUser";
import UserStore from "stores/users";
import parse from "lib/parse";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: UserStore;
}

@inject("userStore")
@observer
class SettingUserContainer extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  async componentDidMount() {
    this.UserStore.GetUser();
    if (this.UserStore.failure["GET_USER"][0]) {
      const code = parse(this.UserStore.failure["GET_USER"][1]);
      alert(code);
    }
  }

  render() {
    return <SettingUser user={this.UserStore.User} />;
  }
}

export default withCookies(withRouter(SettingUserContainer));
