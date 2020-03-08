// @ts-check
import React, { useState } from "react";

import { extractHeaderAndContent } from "./helper";
import TabPanel from "./TabPanel";
import generateId from "./id_generator";

/**
 *
 * @param {React.ComponentType<any>[]} groupTypes
 * @returns {Map}
 */
const createHeaderIdMapping = headers => {
  const indexMapping = new Map();

  headers.forEach((_, index) => {
    indexMapping.set(index, generateId);
  });

  return indexMapping;
};

const getActiveTab = children => {
  let found = false;
  let activeTab = -1;

  let i = 0;
  React.Children.forEach(children, child => {
    if (child.props.active) {
      if (found) {
        throw new Error("More than one tab set as active");
      }

      activeTab = i;
      found = true;
    }
    i++;
  });

  return activeTab;
};

const ControlledTabs = ({ headers, contents, activeTab }) => {
  return (
    <div className="react-tab-component">
      <TabPanel>{headers}</TabPanel>
      {contents[activeTab]}
    </div>
  );
};

const Tabs = ({ children }) => {
  const activeTab = getActiveTab(children);
    
  const [headers, contents] = extractHeaderAndContent(children);
  const headerIdMapping = createHeaderIdMapping(headers);
  
  const headersWithDecoratedProps = headers.map((header, i) =>
    React.cloneElement(header, {
      id: headerIdMapping.get(i)
    })
  );

  return (
    <ControlledTabs
      headers={headersWithDecoratedProps}
      contents={contents}
      activeTab={activeTab}
    />
  );
};

export default Tabs;
