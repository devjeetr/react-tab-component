import React from "react";
import PropTypes from "prop-types";
import TabPanel from "./TabPanel";
import { TABBED_ROOT_CLASS } from "../common/class_and_id_names";

const TabContainerPresentation = ({
  tabs,
  contents,
  beforeContentArea,
  afterContentArea,
  activeTab
}) => (
  <div className={TABBED_ROOT_CLASS}>
    <TabPanel tabs={tabs} />
    {beforeContentArea}
    <div>{contents[activeTab]}</div>
    {afterContentArea}
  </div>
);

TabContainerPresentation.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.element).isRequired,
  contents: PropTypes.arrayOf(PropTypes.element).isRequired,
  beforeContentArea: PropTypes.arrayOf(PropTypes.element),
  afterContentArea: PropTypes.arrayOf(PropTypes.element),
  activeTab: PropTypes.number.isRequired,
};

export default TabContainerPresentation;
