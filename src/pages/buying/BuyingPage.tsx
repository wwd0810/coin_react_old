import React from "react";
import BuyingContainer from "../../containers/buying/BuyingContainer";
import BaseTemplate from "components/base/baseTemplate";

function BuyingPage() {
  return (
    <BaseTemplate pageNum={2}>
      <BuyingContainer />
    </BaseTemplate>
  );
}

export default BuyingPage;
