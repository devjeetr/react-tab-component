## RTC: React Tab Component

This is my take on a tab component in React. It was created to fulfill my needs for
VITALSE.


## Uncontrolled Mode

`
    import RTC from 'react-tab-component';

    const App = () => (
        <RTC.Tabs>
            <RTC.Tab>
                <RTC.Name> Cat </RTC.Name>
                <RTC.Content> it meows </RTC.Content>
            </RTC.Tab>

            <RTC.Tab>
                <RTC.Name> Dog </RTC.Name>
                <RTC.Content> Not compatible with litter box. </RTC.Content>
            </RTC.Tab>
        </RTC.Tabs>
    )
`


## Controlled Mode (User controlled active tab):

```
    import RTC from 'react-tab-component';

    const App = () => (
        <RTC.Tabs>
            <RTC.Tab>
                <RTC.Name> Cat </RTC.Name>
                <RTC.Content> it meows </RTC.Content>
            </RTC.Tab>

            <RTC.Tab active> // indicate that this tab is active
                <RTC.Name> Dog </RTC.Name>
                <RTC.Content> Not compatible with litter box. </RTC.Content>
            </RTC.Tab>

        </RTC.Tabs>
    )
```

## Controlled Mode:

```
    import RTC from 'react-tab-component';

    const App = () => (
        <RTC.Tabs>
            <RTC.Tab>
                <RTC.Name> Cat </RTC.Name>
                <RTC.Content> it meows </RTC.Content>
            </RTC.Tab>

            <RTC.Tab active> // indicate that this tab is active
                <RTC.Name> Dog </RTC.Name>
                <RTC.Content> Not compatible with litter box. </RTC.Content>
            </RTC.Tab>

        </RTC.Tabs>
    )
```

## Custom Content Area

```
    import RTC from 'react-tab-component';

    const App = () => (
        <RTC.Tabs>
            <RTC.Tab>
                <RTC.Name> Cat </RTC.Name>
                <RTC.Content> it meows </RTC.Content>
            </RTC.Tab>

            <RTC.Tab>
                <RTC.Name> Dog </RTC.Name>
                <RTC.Content> Not compatible with litter box. </RTC.Content>
            </RTC.Tab>
            <div> Behavior: </div>
            <RTC.ContentArea /> // this is where the active tab will be rendered
        </RTC.Tabs>
    )
```