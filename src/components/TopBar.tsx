import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';


const Item = styled.div`
    font-weight: 600;
    font-size: 1.2em;
    color: #FFFFFF;
    margin-right: 71px;
`;


type item = {
    name: string,
    go_to: string
}

type props = {
    items: Array<item>,
    children: JSX.Element
}

export default function TopBar({ items, children }: props) {
    return (
        <>
            <Flex justify="space-around" align="center">
                { children }
                <Flex p={3}>
                    {items.map((item) => { 
                        return (
                            <Item>
                                <a href={item.go_to}>{item.name}</a>
                            </Item>
                        );
                    })}
                </Flex>
            </Flex>
        </>
    );
}
