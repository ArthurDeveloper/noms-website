import { useState, useContext } from 'react';
import DropDownListContext from './DropDownListContext';
import styled from 'styled-components';
import { Image } from '@chakra-ui/react';

type ListProps = {
    top: number,
    opacity: number
};

const List = styled.ul`
    position: absolute;
    top: ${(props: ListProps) => props.top}px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    opacity: ${(props: ListProps) => props.opacity};
    transition: top 400ms ease, opacity 280ms ease;
    width: 230px;
    height: 130px;
    background-color: #FFFFFF;
    list-style-type: none;
    margin-top: 10px;
    border-radius: 15px;
`;

const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #CCCCCC;
    font-size: 0.8em;

    &:nth-child(2n) {
        border-top: 1px solid #CCCCCC;
    }
`


type Props = {
    children?: JSX.Element | JSX.Element[],
    items: Array<ItemProp>,
};

type ItemProp = {
    image: string,
    value: string,
    redirect_to?: string
}

export default function DropDownList({ children, items }: Props) {

    const { droppedDown } = useContext(DropDownListContext);

    return (
        <List
            top={ droppedDown ? 30 : 20 } 
            opacity={ droppedDown ? 1.0 : 0.0}
        >
            {items.map((item) => {
                return <Item>
                            <Image src={item.image}
                                   w={10}
                                   borderRadius="100%"
                                   mr={3} />
                            <a href={item.redirect_to}>
                                {item.value}
                            </a>
                       </Item>
            })}
        </List>
    );
}