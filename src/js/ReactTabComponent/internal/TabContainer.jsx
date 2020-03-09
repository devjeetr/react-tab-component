import React from "react";
import PropTypes from "prop-types";
import TabContainerPresentation from "./TabContainerPresentation";
import ManagedTabs from "./ManagedTabs";

const TabContainer = ({
  tabs,
  contents,
  beforeContentArea,
  afterContentArea,
  contentArea,
  activeTab
}) => {
  return (
    activeTab === -1
    ? <ManagedTabs 
        {...{tabs, contents, beforeContentArea, afterContentArea}} />
    : <TabContainerPresentation
    {...{
      tabs,
      contents,
      beforeContentArea,
      afterContentArea,
      contentArea,
      activeTab
    }}
  />

  );
};

TabContainer.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.element),
  contents: PropTypes.arrayOf(PropTypes.element),
  beforeContentArea: PropTypes.arrayOf(PropTypes.element),
  afterContentArea: PropTypes.arrayOf(PropTypes.element),
  contentArea: PropTypes.element,
  activeTab: PropTypes.number
};

export default TabContainer;
