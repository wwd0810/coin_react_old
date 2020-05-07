import React, { Suspense } from "react";
import { Switch, withRouter, RouteComponentProps, RouteProps, Redirect } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withCookies, ReactCookieProps } from "react-cookie";
import { inject, observer } from "mobx-react";
import { Helmet } from "react-helmet";

import UserStore from "stores/users";
import NoticeStore from "stores/notice";
import client from "lib/client";
import i18n from "lang/i18n";

// import HomePage from "pages/home/HomePage";
import SellingPage from "pages/selling/SellingPage";
import BuyingPage from "pages/buying/BuyingPage";
import PresentPage from "pages/present/PresentPage";
// import NoticePage from "pages/notice/NoticePage";
import CenterPage from "pages/center/CenterPage";
import CenterQuestionPage from "pages/center/CenterQuestionPage";
// import CallbackPage from "pages/user/CalllbackPage";
// import CenterTermsPage from "pages/center/CenterTermsPage";
// import TermDetailPage from "pages/center/TermDetailPage";
// import MyPage from "pages/my/MyPage";
// import BuyingDetailPage from "pages/buying/BuyingDetailPage";
// import SettingUserPage from "pages/my/SettingUserPage";
// import MyLikePage from "pages/my/MyLikePage";
// import MyAuthPage from "pages/my/MyAuthPage";
// import DlcInfoPage from "pages/my/DlcInfoPage";
// import CenterNoticePage from "pages/center/CetnerNoticePage";
// import CenterInquiryPage from "pages/center/CenterInquiryPage";
import Loading from "components/common/loading/Loading";

// ==================== React Lazy ====================

const HomePage = React.lazy(() => import("pages/home/HomePage"));
// const SellingPage = React.lazy(() => import("pages/selling/SellingPage"));
// const BuyingPage = React.lazy(() => import("pages/buying/BuyingPage"));
// const PresentPage = React.lazy(() => import("pages/present/PresentPage"));
const NoticePage = React.lazy(() => import("pages/notice/NoticePage"));
// const CenterPage = React.lazy(() => import("pages/center/CenterPage"));
// const CenterQuestionPage = React.lazy(() => import("pages/center/CenterQuestionPage"));
const CallbackPage = React.lazy(() => import("pages/user/CalllbackPage"));
const CenterTermsPage = React.lazy(() => import("pages/center/CenterTermsPage"));
const TermDetailPage = React.lazy(() => import("pages/center/TermDetailPage"));
const MyPage = React.lazy(() => import("pages/my/MyPage"));
const BuyingDetailPage = React.lazy(() => import("pages/buying/BuyingDetailPage"));
const SettingUserPage = React.lazy(() => import("pages/my/SettingUserPage"));
const MyLikePage = React.lazy(() => import("pages/my/MyLikePage"));
const MyAuthPage = React.lazy(() => import("pages/my/MyAuthPage"));
const DlcInfoPage = React.lazy(() => import("pages/my/DlcInfoPage"));
const CenterNoticePage = React.lazy(() => import("pages/center/CetnerNoticePage"));
const CenterInquiryPage = React.lazy(() => import("pages/center/CenterInquiryPage"));
// const Loading = React.lazy(() => import("pages/home/HomePage"))

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<{}>;
  role: string[] | string;
}

interface State {
  isLoading: boolean;
}

interface Props extends RouteComponentProps, ReactCookieProps {
  userStore?: UserStore;
  noticeStore?: NoticeStore;
}

@inject("userStore", "noticeStore")
@observer
class App extends React.Component<Props, State> {
  private UserStore = this.props.userStore! as UserStore;
  private NoticeStore = this.props.noticeStore! as NoticeStore;

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
    //  FCM
    // ================================================================================
    window.receiveToken = (str: string) => {
      this.UserStore.UpdateFcmToken(str);
    };

    // ================================================================================
    //  자동로그인 및 토큰 설정
    // ================================================================================

    // const auth = this.props.cookies!.get("auth");
    const auth = window.localStorage.getItem("auth");
    if (auth) {
      const LoginData: string = auth;
      client.defaults.headers.common["Authorization"] = `Bearer ${LoginData}`;
      await this.UserStore.GetUser();
    }

    if (this.UserStore.IsLoggedIn) {
      await this.NoticeStore.GetUnRead();
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
        <Helmet htmlAttributes={{ lang: i18n.language }}>
          <title>CASH LINK</title>
        </Helmet>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </Router>
    );
  }
}

export default withCookies(withRouter(App));
