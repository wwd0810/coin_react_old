import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import MyContainer from "containers/user/my/MyContainer";

function MyPage() {
  return (
    <BaseTemplate stack={false} navPage={true} pageNum={5}>
      <MyContainer />
    </BaseTemplate>
  );
}
export default MyPage;
