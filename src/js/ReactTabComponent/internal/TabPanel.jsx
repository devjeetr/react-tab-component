import React from "react";
import { TAB_PANEL_ROOT_CLASS } from "../common/class_and_id_names";

const TabPanel = ({ tabs }) => {
  return (
    <div className={TAB_PANEL_ROOT_CLASS}>
      {tabs.map((tab, i) => (
        <React.Fragment key={i}> {tab} </React.Fragment>
      ))}
    </div>
  );
};

export default TabPanel;
