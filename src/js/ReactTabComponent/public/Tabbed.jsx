import React from "react";
import { TABBED_ROOT_CLASS } from "../common/class_and_id_names";
import Tabs from "./Tabs";
import Content from "./Content";
import Tab from "./Tab";
import ContentArea from "./ContentArea";

import * as R from "ramda";
import TabContainer from "../internal/TabContainer";

const getTabList = children => {
  let tabList = null;

  React.Children.forEach(children, child => {
    if (child.type === Tabs) {
      tabList = child;
    }
  });

  return tabList;
};

const getContentBeforeAfterAndContentArea = children => {
  const childrenArray = React.Children.toArray(children);
  let before = null;
  let after = null;
  let contentArea = null;

  const childrenWithoutTabsComponent = childrenArray.filter(
    child => child.type !== Tabs
  );

  let i = 0;

  while (
    i < childrenWithoutTabsComponent.length &&
    childrenWithoutTabsComponent[i].type !== ContentArea
  ) {
    i++;
  }

  before = childrenWithoutTabsComponent.slice(0, i);
  contentArea = childrenWithoutTabsComponent[i];
  after = childrenWithoutTabsComponent.slice(i + 1);

  return [before, contentArea, after];
};

const groupbyHeaderAndContent = R.groupBy(child => {
  if (child.type === Content) {
    return "contents";
  } else if (child.type === Tab) {
    return "tabs";
  }
  return "invalid";
});

const flattenChildren = children =>
  children.flatMap(child => {
    if (child.type === React.Fragment) {
      return child.props.children;
    } else {
      return child;
    }
  });

/**
 *
 * @example
 *  <Tabbed>
 *      <Tabs>
  *            <Tab> simple header</Tab>
*              <Content> {..contents} </Content>
 *      </Tabs>
 *      {... other stuff}
 *      <ContentArea />
 *      {... more stuff}
 *  </Tabbed>
 */
const Tabbed = ({ children, styles = {} }) => {
  const tabList = getTabList(children);
  if (!tabList) {
    throw new Error("RTC-Tabs needs a Tabs component as child");
  }

  if (!tabList.props.children) {
    throw new Error("RTC-Tabs: Tabs component does not have any children");
  }

  const tabListWithChildrenFlattened = flattenChildren(tabList.props.children);

  const { tabs, contents } = groupbyHeaderAndContent(tabListWithChildrenFlattened);
  if (!tabs || !contents || tabs.length !== contents.length) {
    throw new Error(
      "RTC-Tabs: Number of tabs and number of contents not the same."
    );
  }

  const activeTab = R.findIndex(child => child.props.active)(tabs);
  const [
    beforeContentArea,
    contentArea,
    afterContentArea
  ] = getContentBeforeAfterAndContentArea(children);

  return (
    <TabContainer
      tabs={tabs}
      contents={contents}
      beforeContentArea={beforeContentArea}
      afterContentArea={afterContentArea}
      contentArea={contentArea || <ContentArea />}
      activeTab={activeTab}
    />
  );
};

export default Tabbed;
