import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab';
import Tabs from './Tabs';
import Name from './Name';
import Content from './Content';
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
    const handleClick = (i) => {
        setActiveTab(i);
    }

    const tabs = [
        {
            header: "Im a header",
            content: "im content a"
        },
        {
            header: "Im a header c",
            content: "im content b"
        },
    ]


    return (
        <Tabs>
            {tabs.map(({header, content}, i) => (
                <Tab active={i === activeTab}
                >
                    <Name>
                        <div onClick={() => handleClick(i)} onKeyDown={() => {handleClick(i)}}>
                            {header}
                        </div>
                    </Name>
                    <Content><div>{content}</div></Content>
                </Tab>
            ))}
        </Tabs>
    )
}
ReactDOM.render(<Sample/>, document.body)