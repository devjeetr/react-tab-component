import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab';
import Tabs from './Tabs';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

/**
 * 
 * 
 * Example Usage scenarios:
 * 
 * <Tabs>
 *   <Tab>
 *      <Header><Header>
 *      <Content>ssads<Content> 
 *   </Tab>
 *   <Tab>
 *      <Header></Header>
 *      <Content></Content>
 *   </Tab>
 * <Tabs>
 */
const Sample = () => (
    <Tabs>
        <Tab>
            <TabHeader>I'm a header</TabHeader>
            <TabContent>And im the contents</TabContent>
        </Tab>
        <Tab >
            <TabHeader>I'm a header</TabHeader>
            <TabContent>And im the contents</TabContent>
        </Tab>
    </Tabs>
)
ReactDOM.render(<Sample/>, document.body)