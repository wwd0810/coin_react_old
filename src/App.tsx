import React from "react";
import { Switch, withRouter, RouteComponentProps, RouteProps, Redirect } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withCookies, ReactCookieProps } from "react-cookie";
import { inject, observer } from "mobx-react";

import UserStore from "stores/users";
import client from "lib/client";

import HomePage from "pages/home/HomePage";
import SellingPage from "pages/selling/SellingPage";
import BuyingPage from "pages/buying/BuyingPage";
import PresentPage from "pages/present/PresentPage";
import NoticePage from "pages/notice/NoticePage";
import CenterPage from "pages/center/CenterPage";
import CenterQuestionPage from "pages/center/CenterQuestionPage";
import CallbackPage from "pages/user/CalllbackPage";
import CenterTermsPage from "pages/center/CenterTermsPage";
import TermDetailPage from "pages/center/TermDetailPage";
import MyPage from "pages/my/MyPage";
import BuyingDetailPage from "pages/buying/BuyingDetailPage";
import SettingUserPage from "pages/my/SettingUserPage";
import MyLikePage from "pages/my/MyLikePage";
import MyAuthPage from "pages/my/MyAuthPage";
import DlcInfoPage from "pages/my/DlcInfoPage";
import CenterNoticePage from "pages/center/CetnerNoticePage";
import CenterInquiryPage from "pages/center/CenterInquiryPage";

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<{}>;
  role: string[] | string;
}

interface State {
  isLoading: boolean;
}

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: UserStore;
}

@inject("userStore")
@observer
class App extends React.Component<Props, State> {
  private UserStore = this.props.userStore! as UserStore;

  state = {
    isLoading: true,
  };

  async componentDidMount() {
    // ================================================================================
    // 브라우저 검증
    // ================================================================================
    const agent = navigator.userAgent.toLowerCase();
    if (
      (navigator.appName === "Netscape" && navigator.userAgent.search("Trident") !== -1) ||
      agent.indexOf("msie") !== -1
    ) {
      alert(
        "Microsoft Internet Explore를 지원하지 않습니다.\nChrome, Edge, Safari, Firefox 등의 브라우저를 이용해주세요.",
      );
    }

    // ================================================================================
    //  자동로그인 및 토큰 설정
    // ================================================================================

    const auth = this.props.cookies!.get("auth");
    if (auth) {
      const LoginData: string = auth;
      client.defaults.headers.common["Authorization"] = `Bearer ${LoginData}`;
      await this.UserStore.GetUser();
    }

    this.setState({ isLoading: false });
  }

  // ================================================================================
  //  Private Route 세팅
  // ================================================================================

  PrivateRoute = ({ component: Component, ...other }: PrivateRouteProps) => {
    return (
      <Route
        {...other}
        render={(props: any) => {
          if (this.state.isLoading) return null;
          if (!this.UserStore.IsLoggedIn) {
            alert("로그인이 필요합니다.");
            return <Redirect to="/" />;
          }

          return <Component {...props} />;
        }}
      />
    );
  };

  render() {
    return (
      <Router>
        <Switch>
          {/* ====================================================================== */}
          {/* 로그인 필요 없음 */}
          {/* ====================================================================== */}
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/center/inquiry" component={CenterInquiryPage} />
          <Route exact path="/center/terms" component={CenterTermsPage} />
          <Route exact path="/callback" component={CallbackPage} />
          <Route exact path="/" component={HomePage} />
          {/* ====================================================================== */}
          {/* 로그인이 필요함 */}
          {/* ====================================================================== */}

          <this.PrivateRoute exact path="/selling" role="Login" component={SellingPage} />
          <this.PrivateRoute exact path="/buying" role="Login" component={BuyingPage} />
          <this.PrivateRoute
            exact
            path="/buying/detail/:idx"
            role="Login"
            component={BuyingDetailPage}
          />
          <this.PrivateRoute exact path="/present" role="Login" component={PresentPage} />
          <this.PrivateRoute exact path="/notice" role="Login" component={NoticePage} />
          <this.PrivateRoute exact path="/my" role="Login" component={MyPage} />
          <this.PrivateRoute exact path="/my/like" role="Login" component={MyLikePage} />
          <this.PrivateRoute exact path="/my/auth" role="Login" component={MyAuthPage} />
          <this.PrivateRoute exact path="/my/setting" role="Login" component={SettingUserPage} />
          <this.PrivateRoute exact path="/my/dlcinfo" role="Login" component={DlcInfoPage} />
          <this.PrivateRoute exact path="/center" role="Login" component={CenterPage} />
          <this.PrivateRoute
            exact
            path="/center/notice"
            role="Login"
            component={CenterNoticePage}
          />
          <this.PrivateRoute
            exact
            path="/center/question"
            role="Login"
            component={CenterQuestionPage}
          />
          <this.PrivateRoute
            exact
            path="/center/terms/detail/:idx"
            role="Login"
            component={TermDetailPage}
          />
          {/* ====================================================================== */}
        </Switch>
      </Router>
    );
  }
}

export default withCookies(withRouter(App));
