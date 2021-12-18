import TopBar from './components/TopBar';
import { Flex, Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
import styled, { createGlobalStyle } from 'styled-components';
import TypeWriter from './components/effects/TypeWriter';
import Game from './components/Game';

const Globals = createGlobalStyle`
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;

  html {
	-ms-overflow-style: none; 
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
	display: none;
  }
`;

const FirstAlphaAvaliableAdvice = styled(Text)`
  font-weight: 700;
  font-size: 4em;
  color: #FFFFFF;
  text-align: center;
  width: 450px;
  margin-top: 58px;
` ;

const Section = styled.section`
  height: 580px;

  &:nth-of-type(even) {
	background-image: linear-gradient(132deg, #ED8936, #FF6600);
	color: #424242;
  }

  &:nth-of-type(odd) {
	background-color: #FFFFFF;
	color: #FFFFFF;
  }
`;

const SectionBox = styled(Box)`
  width: 280px;
  margin-right: 50px;
  margin-left: 50px;
  height: 88%;
  padding: 20px;
  border-radius: 12px;
`;

export default function Home() {

  const [canShowImage] = useMediaQuery('(min-width: 1250px)');

  return (
	<>
		<Globals />
		<Box w="100%" h="100vh" bgGradient="linear(108deg, orange.400 20%, #FF4400)">
			<header>
				<TopBar />
			</header>

			<Flex w="100%" mt="30px" >

				<aside>
					{canShowImage ? 
						<Image src="/img/aside-banner.png" ml='70px' /> 
						: <></>}
				</aside>

				<FirstAlphaAvaliableAdvice 
					mr={ canShowImage ? '130px' : 'auto' }
					ml={ canShowImage ? 'auto' : 'auto' }
				>
					<TypeWriter>
						First alpha is now avaliable!
					</TypeWriter>
				</FirstAlphaAvaliableAdvice>
			</Flex>
		</Box>

		<Section id="about">
			<Flex w="100%" h="100%" justify="left" align="center">
				<SectionBox bgGradient="linear(132deg, orange.400, #FF6600)">
					Get into NOMS, the game you need to find a way back to home
					after almost die from a monster attack.<br/>
					When running out from your home, you fall in a misterious place.
					Now, you need to pass through many places to come back to home and defeat
					the monster that is ruining the peace of the people!
					But be careful, you will find many help in your way, but this also comes
					with a lot of enemies trying to make your life harder.
				</SectionBox>
			</Flex>
      	</Section>

		<Section>
			<Flex w="100%" h="100%" justify="right" align="center">
				<SectionBox bgColor="#FFFFFF">
					The gameplay isn't fight-based, so you don't need to kill your enemies,
					you just need to try don't be killed by them.<br/>
					You also may find many potions in your way. There are two types of them:
					shield potions, which creates a shield, and when you take damage, the 
					shield gonna be destroyed but you will still alive. And the other type of
					potion is a life potion that gives you an extra life. If you lose all your
					lifes, it's game over! You will back to one level before the level you was
					doing.   
				</SectionBox>
			</Flex>
    	</Section>

		<Section id="about">
			<Flex w="100%" h="100%" justify="left" align="center">
				<SectionBox bgGradient="linear(132deg, orange.400, #FF6600)">
					This first alpha version contains the first world of the game, 
					with five levels filled of fun and exciting places.<br/>
					You will find a lot of enemies in this world, most of them are
					robots. If you beat the first four levels, in the fifth level, 
					there will be an extra challenge: There will be a boss waiting for you
					in the end of the level! If you defeat it, congratulations, you finished
					the first alpha version! Now, keep looking at the NOMS newsletter to know
					about new versions, with more worlds and a lot more content waiting
					for you!
				</SectionBox>
			</Flex>
      	</Section>

		<Game />
	</>
  );
}

