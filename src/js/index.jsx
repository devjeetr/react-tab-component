import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab';
import Tabs from './Tabs';

const Sample = () => (
    <Tabs>
        <Tab name="tab 1">
            <div>Im tab 1</div>
        </Tab>
        <Tab name="tab-2">
            <div>I'm tab 2</div>
        </Tab>
    </Tabs>
)
ReactDOM.render(<Sample/>, document.body)