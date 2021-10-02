import TopBar from './components/TopBar';
import { Flex, Box, Image } from '@chakra-ui/react';
import styled, { createGlobalStyle } from 'styled-components';
import TypeWriter from './components/effects/TypeWriter';


createGlobalStyle`
  margin: 0,
  padding: 0,
  font-family: Helvetica, Arial, sans-serif;
`;


const Logo = styled(Image)`
  width: 225px;
  margin-right: auto;
  margin-left: 15px;
  padding: 5px;
`;

const FirstBetaAvaliableAdvice = styled.h1`
  font-weight: 700;
  font-size: 4em;
  color: #FFFFFF;
  text-align: center;
  width: 450px;
  margin-top: 58px;
  margin-left: auto;
  margin-right: 130px;
` ;

export default function Home() {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(108deg, orange.400 20%, #FF4400)">

      
      <header>
        <TopBar items={[
          { name: "Play",  go_to: "/#play" },
          { name: "About", go_to: "/#about" }
        ]}>
          <Logo src="/img/logo.png" />
        </TopBar>
      </header>


      <Flex w="100%" mt="30px">

        <aside>
          <Image src="/img/aside-banner.png" ml="20px" />
        </aside>

        <FirstBetaAvaliableAdvice>
          <TypeWriter>
            First beta is now avaliable!
          </TypeWriter>
        </FirstBetaAvaliableAdvice>
      </Flex>
      
    </Box>
  );
}

