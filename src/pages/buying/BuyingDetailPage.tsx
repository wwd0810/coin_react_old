import React from "react";
import { useParams } from "react-router";

import BuyingDetailContainer from "containers/buying/BuyingDetailContainer";
import StackTemplate from "components/base/stackTemplate";

function BuyingDetailPage() {
  const { idx } = useParams();
  return (
    <StackTemplate>
      <BuyingDetailContainer idx={idx!} />
    </StackTemplate>
  );
}

export default BuyingDetailPage;
