import styled from 'styled-components';
import { Flex, Image } from '@chakra-ui/react';
import { DropDownListProvider } from './DropDownList/DropDownListContext';
import DropDownList from './DropDownList/DropDownList';
import DropDownListToggleButton from './DropDownList/DropDownListToggleButton';
import { Link } from 'react-scroll';

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

export default function TopBar() {
    return (
        <>
            <Flex justify="space-around" align="center">
            <Logo src="/img/logo.png" />
                <Flex ml="auto">
                    <Item style={{position: 'relative'}}>
                        <DropDownListProvider>
                            <Flex align="center" direction="column">
                                <DropDownListToggleButton>
                                    Play
                                </DropDownListToggleButton>
                                <DropDownList />
                            </Flex>
                        </DropDownListProvider>
                    </Item>
                    <Item>
                        <Link 
                            to="about"
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                    </Item>
                </Flex>
            </Flex>
        </>
    );
}
