import React from "react";
import HomeContainer from "containers/home/HomeContainer";
import BaseTemplate from "components/base/baseTemplate";

function HomePage() {
  return (
    <BaseTemplate stack={false} navPage={false} pageNum={0}>
      <HomeContainer />
    </BaseTemplate>
  );
}

export default HomePage;
