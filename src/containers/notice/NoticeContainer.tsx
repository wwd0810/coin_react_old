import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import Notice from "components/notice";
import NoticeStore from "stores/notice";
import { inject, observer } from "mobx-react";

interface Props extends RouteComponentProps, ReactCookieProps {
  noticeStore?: NoticeStore;
}

@inject("noticeStore")
@observer
class NoticeContainer extends React.Component<Props> {
  private NoticeStore = this.props.noticeStore! as NoticeStore;

  async componentDidMount() {
    await this.NoticeStore.GetNotice(0);
  }

  loadMore = async (page: number, type?: "TRADE" | "WALLET" | "GIFT" | "ETC") => {
    await this.NoticeStore.GetNotice(page, type);
  };

  noticeRead = async (id: number) => {
    await this.NoticeStore.PostNoticeRead(id);
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
