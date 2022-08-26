import React from "react";
import Invoice from "../components/invoice";
import SplitPageComponent from "../components/splitPageComponent";

function InvoicePage() {
  return <SplitPageComponent rightSideComponent={<Invoice />} />;
}

export default InvoicePage;
