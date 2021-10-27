import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';


const Item = styled.div`
    font-size: 1.2em;
    color: #FFFFFF;
    margin-right: 123px;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 576px) {
        margin-right: 31px;
    }
`;

type props = {
    children: JSX.Element | JSX.Element[]
}

export default function TopBar({ children }: props) {
    return (
        <>
            <Flex justify="space-around" align="center">
                { children }
            </Flex>
        </>
    );
}

export { Item };
