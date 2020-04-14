import React from "react";
import StackTemplate from "components/base/stackTemplate";
import MyAuthContainer from "containers/user/my/MyAuthContainer";

function MyAuthPage() {
  return (
    <StackTemplate>
      <MyAuthContainer />
    </StackTemplate>
  );
}

export default MyAuthPage;
