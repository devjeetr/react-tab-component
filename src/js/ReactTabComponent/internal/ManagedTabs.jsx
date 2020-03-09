import React, { useState } from 'react';
import TabPanel from './TabPanel';
import TabContainer from './TabContainer';
import TabContainerPresentation from './TabContainerPresentation';



const ManagedTabs = ({
  tabs,
  contents,
  beforeContentArea,
  afterContentArea,
}) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabsWithEventHandlers = tabs.map((header, i) => 
        <div onClick={() => setActiveTab(i)}>
            {header.props.children}
        </div>
    );


    return <TabContainerPresentation 
        tabs={tabsWithEventHandlers}
        contents={contents}
        beforeContentArea={beforeContentArea}
        afterContentArea={afterContentArea}
        activeTab={activeTab}
    />
}

export default ManagedTabs;