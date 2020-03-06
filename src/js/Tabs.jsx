import React from 'react';
import TabPanel from './TabPanel';

const Tabs = ({children}) => {
    return (
        <div className="react-tab-component">
            <TabPanel></TabPanel>
            {children}
        </div>
    )
};


export default Tabs;
