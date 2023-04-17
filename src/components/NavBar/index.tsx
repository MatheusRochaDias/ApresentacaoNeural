import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Header } from '../Header';

export function NavBar() {
  const navbar_background = useColorModeValue(
    'light.navbar_background',
    'dark.navbar_background'
  );
  const navbar_icons = useColorModeValue(
    'light.navbar_icons',
    'dark.navbar_icons'
  );
  const navbar_selected = useColorModeValue(
    'light.navbar_selected',
    'dark.navbar_selected'
  );
  const { asPath, query } = useRouter();
  console.log(asPath, 'AFE');
  const routes = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <Icon icon="material-symbols:dashboard-outline" width="25" />,
    },
    {
      name: 'Clientes',
      path: '/clients',
      icon: <Icon icon="tabler:users" width="25" />,
    },
    {
      name: 'Financeiro',
      path: '/financial',
      icon: <Icon icon="ph:currency-circle-dollar-bold" width="25" />,
    },
    {
      name: 'Planos',
      path: '/plans',
      icon: <Icon icon="ph:medal" width="25" />,
    },
    {
      name: 'Contratos',
      path: '/contracts',
      icon: <Icon icon="gg:file-document" width="25" />,
    },
    {
      name: 'Cobrança',
      path: '/charge',
      icon: <Icon icon="tabler:message-2" width="25" />,
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width="100%">
      <Header />
      <Box bg={navbar_background}>
        <SimpleGrid
          columns={6}
          maxW="1200px"
          mx="auto"
          px={{ base: '10px', md: '40px' }}
        >
          <GridItem colSpan={6}>
            <Flex
              cursor="pointer"
              h={['60px', '60px', '60px', 'auto']}
              display={['flex', 'flex', 'flex', 'none']}
              justify="end"
            >
              <Center px="20px">
                <HamburgerIcon w={6} h={6} onClick={onOpen} />
              </Center>
            </Flex>
          </GridItem>
          {routes.map((item, idx) => (
            <Link href={item.path} key={idx}>
              <Center
                cursor="pointer"
                borderWidth={
                  item.path === asPath ? '0px  0px 3.5px 0px' : '0px'
                }
                borderColor={navbar_selected}
                mt={item.path === asPath ? '3.5px' : '0px'}
                color={item.path === asPath ? navbar_selected : navbar_icons}
                h={{ base: '0px', md: '60px' }}
                display={['none', 'none', 'none', 'flex']}
              >
                {item.icon}
                <Text
                  px="1rem"
                  color={item.path === asPath ? navbar_selected : navbar_icons}
                  // mt={item.path === selectedRoute ? '3.5px' : '0px'}
                  size="1rem"
                  fontWeight="700"
                >
                  {item.name}
                </Text>
              </Center>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={navbar_icons} />
          <DrawerHeader bg={navbar_background} color={navbar_icons}>
            Menu
          </DrawerHeader>
          <DrawerBody bg={navbar_background}>
            {routes.map((item, idx) => (
              <Link href={item.path} key={idx}>
                <Flex
                  cursor="pointer"
                  borderWidth={
                    item.path === asPath ? '0px  0px 3.5px 0px' : '0px'
                  }
                  borderColor={navbar_selected}
                  color={item.path === asPath ? navbar_selected : navbar_icons}
                  h="40px"
                  mt="20px"
                  w="150px"
                >
                  {item.icon}
                  <Text
                    px="1rem"
                    color={
                      item.path === asPath ? navbar_selected : navbar_icons
                    }
                    // mt={item.path === selectedRoute ? '3.5px' : '0px'}
                    size="1rem"
                    fontWeight="700"
                  >
                    {item.name}
                  </Text>
                </Flex>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
