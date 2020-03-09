import React, { useState } from "react";
import TabContainerPresentation from "./TabContainerPresentation";

const ManagedTabs = ({
  tabs,
  contents,
  beforeContentArea,
  afterContentArea
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsWithEventHandlers = tabs.map((header, i) => (
    <div onClick={() => setActiveTab(i)} role="tab" tabIndex="-1">
      {header.props.children}
    </div>
  ));

  return (
    <TabContainerPresentation
      tabs={tabsWithEventHandlers}
      contents={contents}
      beforeContentArea={beforeContentArea}
      afterContentArea={afterContentArea}
      activeTab={activeTab}
    />
  );
};

export default ManagedTabs;
