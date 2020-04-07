import React from "react";
import PresentContainer from "containers/present/PresentContainer";
import BaseTemplate from "components/base/baseTemplate";

function PresentPage() {
  return (
    <BaseTemplate pageNum={3}>
      <PresentContainer />
    </BaseTemplate>
  );
}

export default PresentPage;
