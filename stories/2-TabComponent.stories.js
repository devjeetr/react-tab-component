import React from 'react';
import  RTC from '../src/js/public_api';

import { action } from '@storybook/addon-actions';

export default {
  title: 'RTC',
  component: RTC.Tabs,
};

export const SimpleTabs = () => (
    <RTC.Tabs>
        <RTC.Tab>
            <RTC.Name>Tab 1</RTC.Name>
            <RTC.Content> Im tab 1's content </RTC.Content>
        </RTC.Tab>

        <RTC.Tab>
            <RTC.Name>Tab 2</RTC.Name>
            <RTC.Content> Im tab 2's content </RTC.Content>
        </RTC.Tab>

    </RTC.Tabs>
)




