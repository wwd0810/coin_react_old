import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import SettingUser from "components/user/my/setting/SettingUser";
import UserStore from "stores/users";
import { inject, observer } from "mobx-react";

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: UserStore;
}

@inject("userStore")
@observer
class SettingUserContainer extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  async componentDidMount() {
    this.UserStore.GetUser();
  }

  render() {
    return <SettingUser user={this.UserStore.User} />;
  }
}

export default withCookies(withRouter(SettingUserContainer));
