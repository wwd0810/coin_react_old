import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { withCookies, ReactCookieProps } from "react-cookie";
import { withRouter, RouteComponentProps } from "react-router";

import Header from "components/common/header";
import Footer from "components/common/footer";
import UserStore from "stores/users";
import NoticeStore from "stores/notice";

interface Props extends ReactCookieProps, RouteComponentProps {
  children?: React.ReactNode;
  stack?: boolean;
  navPage?: boolean;
  pageNum?: number;
  userStore?: UserStore;
  noticeStore?: NoticeStore;
}

interface State {
  prevPos: number;
  visible: boolean;
}

@inject("userStore", "noticeStore")
@observer
class BaseTemplate extends React.Component<Props, State> {
  private UserStore = this.props.userStore! as UserStore;
  private NoticeStore = this.props.noticeStore! as NoticeStore;

  state: State = {
    prevPos: window.pageYOffset,
    visible: true,
  };

  handleScroll = () => {
    const currentPos = window.pageYOffset;
    const vis = this.state.prevPos > currentPos;

    if (currentPos > 0) {
      this.setState({
        prevPos: currentPos,
        visible: vis,
      });
    }
  };

  logout = async () => {
    this.UserStore.logout();
    this.props.cookies!.remove("auth", { path: "/" });
    this.props.history.push("/");
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <Wrap>
        <Header
          visible={this.state.visible}
          stack={this.props.stack}
          navPage={this.props.navPage}
          user={this.UserStore.User}
          logout={this.logout}
          unRead={this.NoticeStore.UnRead!}
        ></Header>
        <Section>{this.props.children}</Section>
        <Footer visible={this.state.visible} pageNum={this.props.pageNum}></Footer>
      </Wrap>
    );
  }
}

const Wrap = styled.div``;

const Section = styled.div`
  
  width: 100%;
  
    ${({ theme }) => theme.media.mobile`

    `}
    ${({ theme }) => theme.media.tablet`

    `}
    ${({ theme }) => theme.media.desktop`
 
    `}

    ${({ theme }) => theme.media.large`s

    `}
`;

export default withCookies(withRouter(BaseTemplate));
