// @ts-check
import React from "react";
import TabPanel from "./TabPanel";
import Tab from "./Tab";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";

/**
 * Given the children of a Tabs component, goes through
 * every Tab and returns two arrays, first containing
 * all TabHeaders and second containing all TabContents
 * @param {React.ReactElement} tabs Child components
 * @return {[Array, Array]} returns the headers and the contents
 */
const extractHeaderAndContent = tabs => {
  const headers = [];
  const contents = [];

  React.Children.forEach(tabs, tab => {
    // @ts-ignore
    if (tab.type.name !== Tab.name) {
      throw new Error("react-tab-component: Non Tab children provided");
    }
    React.Children.forEach(tab.props.children, child => {
      if (child.type.name === TabHeader.name) {
        headers.push(child);
      }
      if (child.type.name === TabContent.name) {
        contents.push(child);
      }
    });
  });

  // make sure we have as many headers as we
  // have content panels
  if (headers.length !== contents.length) {
    throw new Error(
      "react-tab-component: number of headers and content panels not equal"
    );
  }

  return [headers, contents];
};

const Tabs = ({ children }) => {
  const [headers, contents] = extractHeaderAndContent(children);


  return (
    <div className="react-tab-component">
      {/* <TabPanel></TabPanel> */}
      {children}
    </div>
  );
};

export default Tabs;
