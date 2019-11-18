import React from 'react'

import {Accordion, List} from 'antd-mobile'
import {ContentWrap, Title, TitleWrap} from "@styles/base.style";

const Category: React.FC = () => {

    const onChange = (key) => {
        console.log(key)
    }


    return (
        <ContentWrap>
            <TitleWrap>
                <Title>Test</Title>
            </TitleWrap>
            <Accordion  className="my-accordion" onChange={onChange}>
                <Accordion.Panel header="Title 1">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 2" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
            </Accordion>
        </ContentWrap>

    )

}

export default Category