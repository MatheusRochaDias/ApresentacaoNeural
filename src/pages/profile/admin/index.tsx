import {
  Flex,
  Image,
  Center,
  Button,
  Stack,
  Box,
  Text,
  useColorModeValue,
  Link,
  Avatar,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import {
  Input,
  Layout,
  PasswordTab,
  PermissionTab,
  UsersTab,
  VerifyPassword,
} from '@/components';

export default function Home() {
  const text = useColorModeValue('light.text', 'dark.text');
  const card = useColorModeValue('light.card', 'dark.card');
  const tab = useColorModeValue('light.tab', 'dark.tab');
  const tab_selected = useColorModeValue(
    'light.tab_selected',
    'dark.tab_selected'
  );
  const card_border = useColorModeValue(
    'light.card_border',
    'dark.card_border'
  );

  return (
    <Layout>
      <Box color={text}>
        <Text fontWeight={700} fontSize="22px">
          PERFIL
        </Text>
        <Flex
          gap={30}
          flexDir={['column', 'column', 'row', 'row']}
          mt={['30px', '40px']}
        >
          <Flex
            py={['20px', '60px']}
            bg={card}
            border="1px"
            borderColor={card_border}
            w={['100%', '100%', '100%', '35%']}
            px={['10px', '20px']}
            borderRadius="8px"
            h="min"
          >
            <Flex gap={30}>
              <Box>
                <Center>
                  <Avatar size={['lg', 'xl', 'xl', 'xl']} name="Comercial S" />
                </Center>
                <Center pt="20px" gap={2}>
                  <Button variant="outline" p="0" m="0">
                    <Icon icon="ant-design:edit-twotone" width="18px" />
                  </Button>
                  <Button variant="outline" p="0" m="0">
                    <Icon icon="lucide:trash-2" width="18px" cursor="pointer" />
                  </Button>
                </Center>
              </Box>
              <Box wordBreak="break-word">
                <Text fontSize="18px" fontWeight="600">
                  Luiz Eduardo Macedo
                </Text>
                <Text>Administrador</Text>
                <Text pt="30px" fontSize="14px" fontWeight="600">
                  E-mail
                </Text>
                <Text fontSize="14px">luiz.macedo@example.com</Text>
                <Text pt="10px" fontSize="14px" fontWeight={600}>
                  Telefone
                </Text>
                <Text fontSize="14px">11 995667878</Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            p={['20px', '30px']}
            bg={card}
            border="1px"
            borderColor={card_border}
            w={['100%', '100%', '100%', '65%']}
            borderRadius="8px"
          >
            <Tabs w="100%">
              <TabList
                sx={{
                  '& .chakra-tabs__tab[aria-selected=true]': {
                    color: tab_selected,
                  },
                  '& .chakra-tabs__tab[aria-selected=false]': {
                    color: tab,
                  },
                }}
              >
                <Tab minWidth={['80px', '120px']}>Configurar senha</Tab>
                <Tab minWidth={['80px', '120px']}>Usuários</Tab>
                <Tab minWidth={['80px', '120px']}>Permissões</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <PasswordTab />
                </TabPanel>
                <TabPanel>
                  <UsersTab />
                </TabPanel>
                <TabPanel>
                  <PermissionTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
