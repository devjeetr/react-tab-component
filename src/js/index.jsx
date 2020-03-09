import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tabbed from "./ReactTabComponent/public/Tabbed";
import Tabs from "./ReactTabComponent/public/Tabs";
import Content from "./ReactTabComponent/public/Content";
import Tab from "./ReactTabComponent/public/Tab";
import ContentArea from "./ReactTabComponent/public/ContentArea";
/**
 *
 *
 * Example Usage scenarios:
 *
 * @example
 * // default
 * <Tabs>
 *  <Header /> <Header />
 *  <Content> </Content>
 *
 *
 * <Tabs>
 *
 * // controlled
 * <Tabs>
 *   <Tab active> // current active tab
 *      <Header><Header>
 *      <Content>ssads<Content>
 *   </Tab>
 *   <Tab>
 *      <Header></Header>
 *      <Content></Content>
 *   </Tab>
 * <Tabs>
 */
const Sample = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = i => {
    setActiveTab(i);
  };

  const tabs = [
    {
      header: "Im a header",
      content: "im content a"
    },
    {
      header: "Im a header c",
      content: "im content oollala"
    },
    {
      header: "Im a header c",
      content: "im content ehehhee"
    }
  ];

  return (
    <div>
      <Tabbed>
        <Tabs>
          {tabs.map(({ header, content }, i) => (
            <React.Fragment key={i}>
              <Tab >{header}</Tab>
              <Content>{content}</Content>
            </React.Fragment>
          ))}
        </Tabs>
        <ContentArea />
      </Tabbed>
    </div>
  );
};
ReactDOM.render(<Sample />, document.body);
