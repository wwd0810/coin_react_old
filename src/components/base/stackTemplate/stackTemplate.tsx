import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

import Footer from "components/common/footer";
import Header from "components/common/header";
import UserStore from "stores/users";
import NoticeStore from "stores/notice";

interface Props extends RouteComponentProps, ReactCookieProps {
  children?: React.ReactNode;
  prev?: string;
  userStore?: UserStore;
  noticeStore?: NoticeStore;
}

interface State {
  prevPos: number;
  visible: boolean;
}

@inject("userStore", "noticeStore")
@observer
class StackTemplate extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;
  private NoticeStore = this.props.noticeStore! as NoticeStore;

  state: State = {
    prevPos: 0,
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

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onPrevClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.props.history.goBack();
  };

  render() {
    return (
      <Wrap>
        <Header
          stack={true}
          visible={this.state.visible}
          onPrev={this.onPrevClick}
          user={this.UserStore.User}
          unRead={this.NoticeStore.UnRead}
        ></Header>
        <Section>{this.props.children}</Section>
        <Footer visible={this.state.visible} pageNum={0}></Footer>
      </Wrap>
    );
  }
}

// function StackTemplate({ children, prev }: Props) {
//   const [prevPos, setPrevPos] = useState<number>(window.pageYOffset);
//   const [visible, setVisible] = useState<boolean>(true);

//   const history = useHistory();

//   const onPrevClick = useCallback(
//     (e: React.MouseEvent<HTMLButtonElement>) => {
//       e.preventDefault();

//       if (!prev) history.goBack();
//       else history.push(prev);
//     },
//     [history, prev],
//   );

//   const handleScroll = useCallback(() => {
//     const currentPos = window.pageYOffset;
//     const vis = prevPos > currentPos;

//     if (currentPos > 0) {
//       setPrevPos(currentPos);
//       setVisible(vis);
//     }
//   }, [prevPos]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);
//   return (
//     <Wrap>
//       <Header stack={true} visible={visible} onPrev={onPrevClick}></Header>
//       <Section>{children}</Section>
//       <Footer visible={visible} pageNum={0}></Footer>
//     </Wrap>
//   );
// }

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

export default withCookies(withRouter(StackTemplate));
