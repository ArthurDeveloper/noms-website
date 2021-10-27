import TopBar, { Item } from './components/TopBar';
import { Flex, Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
import styled, { createGlobalStyle } from 'styled-components';
import TypeWriter from './components/effects/TypeWriter';
import SmoothScroll from './components/effects/SmoothScroll';
import { DropDownListProvider } from './components/DropDownList/DropDownListContext';
import DropDownList from './components/DropDownList/DropDownList';
import DropDownListToggleButton from './components/DropDownList/DropDownListToggleButton';

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


const Logo = styled(Image)`
  width: 225px;
  margin-right: auto;
  margin-left: 15px;
  padding: 5px;
  transition: all 200ms ease;

  :hover {
	cursor: pointer;
	width: 250px;
	rotate: -15deg;
  }

  @media (max-width: 680px) {
    width: 200px;
  }

  @media (max-width: 576px) {
    width: 165px;
    margin-left: 8px;
  }
`;

const FirstBetaAvaliableAdvice = styled(Text)`
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
				<TopBar>
					<Logo src="/img/logo.png" />
					<Flex ml="auto">
						<Item style={{position: 'relative'}}>
							<DropDownListProvider>
								<Flex align="center" direction="column">
									<DropDownListToggleButton>
										Play
									</DropDownListToggleButton>
									<DropDownList items={[
										{
											image: '/img/itch-io-logo.png',
											value: 'Download with Itch.io', 
											redirect_to: 'https://arthurdeveloper.itch.io/noms'},
										{
											image: '/img/play-icon.png',
											value: 'Play on browser'}
									]} />
								</Flex>
							</DropDownListProvider>
						</Item>
						<Item>
							<SmoothScroll to="#about">
								About
							</SmoothScroll>
						</Item>
					</Flex>
				</TopBar>
			</header>

			<Flex w="100%" mt="30px" >

				<aside>
					{canShowImage ? 
						<Image src="/img/aside-banner.png" ml='20px' /> 
						: <></>}
				</aside>

				<FirstBetaAvaliableAdvice 
					mr={ canShowImage ? '130px' : 'auto' }
					ml={ canShowImage ? 'auto' : 'auto' }
				>
					<TypeWriter>
						First beta is now avaliable!
					</TypeWriter>
				</FirstBetaAvaliableAdvice>
			</Flex>
		</Box>

		<Section id="about">
			<Flex w="100%" h="100%" justify="left" align="center">
				<SectionBox bgGradient="linear(132deg, orange.400, #FF6600)">
					Get into NOMS, the game you need to find a way back to home
					after almost die from a monster attack.<br/>
					You see you and your entire race being attacked by a misterious purple
					monster, so you see yourself in a panic situation, and you need to
					get away from that place as fast as possible.
					You and your pals enter in a ship and fly away to an unknow place,
					and need to discover how to back to home and defeat the monster.
				</SectionBox>
			</Flex>
      	</Section>

		<Section>
			<Flex w="100%" h="100%" justify="right" align="center">
				<SectionBox bgColor="#FFFFFF">
					The gameplay isn't fight based, so you don't need to kill your enemies,
					you just need to try don't be killed by them.<br/>
					You need to travel around some worlds trying to search the path to the 
					another world until you finally get home. You will find many powerful
					bosses in your path, and also many awesome friends to help in your journey.
					But be careful, sometimes you will need to solve a little puzzle before
					pass to the next level!   
				</SectionBox>
			</Flex>
    </Section>
	</>
  );
}

