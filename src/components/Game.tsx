import { useState } from 'react';
import styled from 'styled-components';
import { Flex, Heading } from '@chakra-ui/react';

const GameIframe = styled.iframe`
    width: 854px;
    height: 480px;
    border: 12px solid #999999;

    @media (max-width: 900px) {
        width: 427px;
        height: 240px; 
    }

    @media (max-width: 576px) {
        width: 256.2px;
        height: 144px;
    }
`;

const StartGameButton = styled.button`
    padding: 8px 15px;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    transition: 200ms background-color, color ease;

    &:hover {
        background-color: #ffffff;
        color: #ED8936;
    }
`;


export default function Game() {

    const [gameIframeVisible, setGameIframeVisible] = useState(false);

    return (
        <Flex 
            bgGradient="linear(132deg, orange.400, #FF6600)"
            direction="column"
            justify="center"
            align="center"
            height="680px"
            p="3em"
            id="game" 
        >
            <Heading 
                size="3xl"
                color="#FFFFFF"
                mt="20px"
                mb="40px"
                id="play"
            >
                Play
            </Heading>

            { gameIframeVisible ?
                <GameIframe src="/game" /> : 
                <StartGameButton onClick={() => setGameIframeVisible(true)}>
                    Start Game
                </StartGameButton>
            }
        </Flex>
    ) 
}