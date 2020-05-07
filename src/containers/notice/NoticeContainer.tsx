import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";
import { inject, observer } from "mobx-react";

import Notice from "components/notice";

import NoticeStore from "stores/notice";
import parse from "lib/parse";

interface Props extends RouteComponentProps, ReactCookieProps {
  noticeStore?: NoticeStore;
}

@inject("noticeStore")
@observer
class NoticeContainer extends React.Component<Props> {
  private NoticeStore = this.props.noticeStore! as NoticeStore;

  async componentDidMount() {
    await this.NoticeStore.GetNotice(0);
    if (this.NoticeStore.failure["GET_NOTICE"][0]) {
      const code = parse(this.NoticeStore.failure["GET_NOTICE"][1]);
      alert(code);
    }
  }

  loadMore = async (page: number, type?: "TRADE" | "WALLET" | "GIFT" | "ETC") => {
    await this.NoticeStore.GetNotice(page, type);
    if (this.NoticeStore.failure["GET_NOTICE"][0]) {
      const code = parse(this.NoticeStore.failure["GET_NOTICE"][1]);
      alert(code);
    }
  };

  noticeRead = async (id: number) => {
    await this.NoticeStore.PostNoticeRead(id);
    if (this.NoticeStore.failure["POST_NOTICE_READ"][0]) {
      const code = parse(this.NoticeStore.failure["POST_NOTICE_READ"][1]);
      alert(code);
    }
  };

  render() {
    return (
      <Notice
        notices={this.NoticeStore.Notices}
        loadMore={this.loadMore}
        paging={this.NoticeStore.Page!}
        noticeRead={this.noticeRead}
      />
    );
  }
}

export default withCookies(withRouter(NoticeContainer));
