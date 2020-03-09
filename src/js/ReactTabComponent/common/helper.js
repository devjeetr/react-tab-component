// @ts-check

import React from "react";
import Tab from "./Tab";
import TabHeader from "./Name";
import Content from "./Content";
import { map, comp, into, filter} from 'transducers-js';



/**
 * 
 * @param {React.ComponentType<any>[]} groupTypes 
 * @returns {Map} 
 */
const createGroupIndexMapping = groupTypes => {
    const indexMapping = new Map();

    groupTypes.forEach((groupType, index) => {
        indexMapping.set(groupType, index);
    })

    return indexMapping;
}
/**
 * 
 * @param {*} children 
 * @param {React.ComponentType<any>[]} by list of components to group by
 * @param {React.ComponentType<any>} componentType the component type to group by
 * @param {boolean=} [strict=true] strict 
 */
const groupGrandChildrenWithinType = (children, by, componentType, strict=true) => {
    const groups = by.map(_ => []);
    const groupIndexMapping = createGroupIndexMapping(by);
    React.Children.forEach(children, child => {
        if (strict && child.type !== componentType) {
            throw new Error(
                "groupGrandChildrenWithinType: number of headers and content panels not equal"
              );
        }

        React.Children.forEach(child.props.children, grandChild => {
            const groupIndex = groupIndexMapping.get(grandChild.type);
            groups[groupIndex].push(grandChild);
        })
    });

    return groups;
};


/**
 * Given the children of a Tabs component, goes through
 * every Tab and returns two arrays, first containing
 * all TabHeaders and second containing all TabContents
 * example:
 * 
 * for: [
 *    <Tab>
 *          </TabHeader> <A /> </TabHeader>
 *          </Content> <B /> </Content>
 *    <Tab>,
 *    <Tab>
 *          <Header> <C /> </Header>
 *          </Content> <D /> </Content>
 *    <Tab>
 * ]
 * returns: 
 * [[<A />, <C />],
 *  [<B />, <D />]]
 * 
 * @param {React.ReactElement} tabs Child components
 * @returns {any[]}
 * 
 * @example:
 *  const [tabHeaders, tabContentPanels] = extractHeaders(children);
 *  
 */
export const extractHeaderAndContent = tabs => {
  
    // @ts-ignore
    return groupGrandChildrenWithinType(tabs, [
        TabHeader, 
        Content,
    ], Tab, true);
  };