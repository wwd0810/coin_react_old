import React from "react";
import { useParams } from "react-router";

import StackTemplate from "components/base/stackTemplate";
import TermDetail from "components/center/terms/detail";

function TermDetailPage() {
  const { idx } = useParams();
  return (
    <StackTemplate>
      <TermDetail idx={Number(idx)} />
    </StackTemplate>
  );
}

export default TermDetailPage;
