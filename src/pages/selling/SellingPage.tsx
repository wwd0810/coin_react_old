import React from "react";
import SellingContainer from "containers/selling/SellingContainer";
import BaseTemplate from "components/base/baseTemplate";

function SellingPage() {
  return (
    <BaseTemplate pageNum={1}>
      <SellingContainer />
    </BaseTemplate>
  );
}

export default SellingPage;
