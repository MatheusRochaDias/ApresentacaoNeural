import {
  Box,
  Center,
  Divider,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
// import { useQuery } from 'react-query';
// import { GetAuthenticatedUserData } from '~/services/hooks/useAccounts';

export function Header() {
  const header_background = useColorModeValue(
    'light.header_background',
    'dark.header_background'
  );
  const imageLogo = useColorModeValue(
    '/assets/navbarLogoBlack.png',
    '/assets/navbarLogoWhite.png'
  );
  const header_background_hover = useColorModeValue(
    'light.header_background_hover',
    'dark.header_background_hover'
  );
  return (
    <Box
      w="100%"
      h="80px"
      bg={header_background}
      display="flex"
      alignItems="center"
    >
      <Flex justify="space-between" />
      <Box
        w="100%"
        display="flex"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
        px={{ base: '10px', md: '40px' }}
      >
        <Image src={imageLogo} objectFit="contain" w="150px" />
        <Center gap={[2, 5]}>
          <ThemeToggle />
          <Flex gap={2}>
            <Avatar size="xs" name="Comercial S" />
            <Text display={['none', 'block']}>Comercial</Text>
            <Menu>
              <MenuButton>
                <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
              </MenuButton>
              <MenuList bg={header_background}>
                <MenuItem
                  bg={header_background}
                  _hover={{ bg: header_background_hover, color: '#fff' }}
                  as="a"
                  href="/profile/admin"
                >
                  Perfil Admin
                </MenuItem>
                <MenuItem
                  bg={header_background}
                  _hover={{ bg: header_background_hover, color: '#fff' }}
                  as="a"
                  href="/profile/user"
                >
                  Perfil Usuário
                </MenuItem>
                <MenuItem
                  bg={header_background}
                  _hover={{ bg: header_background_hover, color: '#fff' }}
                  as="a"
                  href="/login"
                >
                  Sair
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
}
