import {
  Flex,
  Box,
  Text,
  useColorModeValue,
  Center,
  SimpleGrid,
  Table,
  Tr,
  Thead,
  Th,
  BoxProps,
  Tooltip,
  Tbody,
  Switch,
  Td,
  Badge,
  Select,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Avatar,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ReactNode, useState } from 'react';
import { InfoCard, Input, Layout, SimpleModal } from '@/components';

export default function Clients() {
  const text = useColorModeValue('light.text', 'dark.text');
  const card = useColorModeValue('light.card', 'dark.card');
  const subtitle = useColorModeValue('light.subtitle', 'dark.subtitle');
  const title = useColorModeValue('light.title', 'dark.title');
  const table_header = useColorModeValue(
    'light.table_header',
    'dark.table_header'
  );
  const card_border = useColorModeValue(
    'light.card_border',
    'dark.card_border'
  );
  const button = useColorModeValue('light.button', 'dark.button');
  const input_border = useColorModeValue('light.border', 'dark.border');
  const data = [
    {
      id: 1,
      name: 'Contabilidade Diamond',
      cnpj: '89.007.367/0001-40',
      email: 'exemplo.exemplo@emple.com',
      plan: 'Premium',
      status: 'ATIVO',
    },
    {
      id: 2,
      name: 'Contabilidade Diamond',
      cnpj: '89.007.367/0001-40',
      email: 'exemplo.exemplo@emple.com',
      plan: 'Premium',
      status: 'INATIVO',
    },
    {
      id: 3,
      name: 'Contabilidade Diamond',
      cnpj: '89.007.367/0001-40',
      email: 'exemplo.exemplo@emple.com',
      plan: 'Premium',
      status: 'ATIVO',
    },
    {
      id: 4,
      name: 'Contabilidade Diamond',
      cnpj: '89.007.367/0001-40',
      email: 'exemplo.exemplo@emple.com',
      plan: 'Premium',
      status: 'ATIVO',
    },
    {
      id: 5,
      name: 'Contabilidade Diamond',
      cnpj: '89.007.367/0001-40',
      email: 'exemplo.exemplo@emple.com',
      plan: 'Premium',
      status: 'ATIVO',
    },
    {
      id: 6,
      name: 'Contabilidade Diamond',
      cnpj: '89.007.367/0001-40',
      email: 'exemplo.exemplo@emple.com',
      plan: 'Premium',
      status: 'ATIVO',
    },
    {
      id: 7,
      name: 'Contabilidade Diamond',
      cnpj: '89.007.367/0001-40',
      email: 'exemplo.exemplo@emple.com',
      plan: 'Premium',
      status: 'ATIVO',
    },
    {
      id: 8,
      name: 'Contabilidade Diamond',
      cnpj: '89.007.367/0001-40',
      email: 'exemplo.exemplo@emple.com',
      plan: 'Premium',
      status: 'ATIVO',
    },
  ];
  const [viewMode, setViewMode] = useState(1);
  const {
    isOpen: isOpenAddUser,
    onClose: onCloseAddUser,
    onOpen: onOpenAddUser,
  } = useDisclosure();

  return (
    <Layout>
      <Box color={text}>
        <Text fontWeight={700} fontSize="22px">
          CLIENTES{' '}
        </Text>
        <SimpleGrid pt={['30px', '40px']} gap={5} columns={[1, 2, 2, 4]}>
          <InfoCard number={500} text="Total de clientes" />
          <InfoCard number={495} text="Clientes ativos" />
          <InfoCard number={5} text="Clientes inativos" />
          <InfoCard number={0} text="Clientes novos no mês" />
        </SimpleGrid>
        <Box
          mt={['30px', '40px']}
          p={['20px', '30px']}
          bg={card}
          border="1px"
          borderRadius="8px"
          borderColor={card_border}
        >
          {' '}
          <Flex
            gap={5}
            width={['100%', '100%']}
            flexDir={['column', 'column', 'row', 'row']}
          >
            <Flex
              flexDir={['column', 'column', 'row', 'row']}
              gap={5}
              flexGrow={1}
            >
              <Input
                name="email"
                w={['100%', '100%', '200px', '200px']}
                search
                placeholder="Pesquisar"
                border="1px"
                borderRadius="4px"
                borderColor={input_border}
              />
              <Select
                placeholder="Selecione"
                w={['100%', '100%', '200px', '200px']}
                sx={{
                  option: { fontFamily: 'Inter' },
                  border: '1px',
                  borderRadius: '4px',
                }}
              >
                <option value="option1">Antes de vencer</option>
                <option value="option2">Depois de vencer</option>
              </Select>
              <Input
                name="data"
                w={['100%', '100%', '200px', '200px']}
                type="date"
              />
            </Flex>
            <Flex justify="flex-end" w={['100%', '100%', 'max', 'max']} gap={2}>
              <Button
                variant="outline"
                p="0"
                m="0"
                onClick={() => setViewMode(1)}
              >
                <Icon icon="material-symbols:list" width="25px" />
              </Button>
              <Button
                variant="outline"
                p="0"
                m="0"
                onClick={() => setViewMode(2)}
              >
                <Icon
                  icon="ic:outline-grid-view"
                  width="20px"
                  cursor="pointer"
                />
              </Button>
              <Flex gap={5}>
                <Button
                  bg={button}
                  color="#fff"
                  w={['100%', '150px', '150px', '150px']}
                  border="0"
                  borderRadius="6px"
                  onClick={() => onOpenAddUser()}
                >
                  Adicionar
                </Button>
              </Flex>
            </Flex>
          </Flex>
          {viewMode === 1 && (
            <Box overflowX="auto" borderRadius="15px 15px 0px 0px" mt="20px">
              <Table variant="simple" width="100%">
                <Thead>
                  <Tr bg={table_header}>
                    <TableTh minW="220px">Cliente</TableTh>
                    <TableTh minW="120px">CNPJ</TableTh>
                    <TableTh minW="100px">E-mail</TableTh>
                    <TableTh minW="100px">Plano</TableTh>
                    <TableTh minW="100px">Status</TableTh>
                    <TableTh minW="10px" maxW="20px" />
                  </Tr>
                </Thead>
                <Tbody fontSize="12px">
                  {data.map((item) => (
                    <Tr key={item.id}>
                      <Td>{item.name}</Td>
                      <Td>{item.cnpj}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.plan}</Td>
                      <Td>
                        {item.status === 'ATIVO' ? (
                          <Badge
                            variant="subtle"
                            colorScheme="green"
                            textAlign="center"
                            w="100px"
                            borderRadius="30px"
                          >
                            ATIVO
                          </Badge>
                        ) : (
                          <Badge
                            variant="subtle"
                            colorScheme="red"
                            textAlign="center"
                            w="100px"
                            borderRadius="30px"
                          >
                            FINALIZADO
                          </Badge>
                        )}
                      </Td>
                      <Td>
                        <Box cursor="pointer">
                          <Tooltip
                            hasArrow
                            label="Link de senha"
                            placement="top"
                          >
                            <Icon
                              icon="mingcute:copy-2-line"
                              hFlip
                              width="18px"
                            />
                          </Tooltip>
                        </Box>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
          {viewMode === 2 && (
            <SimpleGrid columns={[2, 2, 4, 4]} mt="20px" gap={5}>
              {data.map((item) => (
                <Box
                  gap={5}
                  border="1px"
                  borderRadius="8px"
                  p="10px"
                  borderColor={input_border}
                >
                  <Flex
                    borderBottom="1px"
                    alignItems="center"
                    borderColor={input_border}
                    justify="space-between"
                    pb="10px"
                  >
                    <Flex alignItems="center" gap={2}>
                      <Avatar size="sm" name={item.name} />
                      <Text fontSize="14px" color={subtitle}>
                        {item.name}
                      </Text>
                    </Flex>
                    <Tooltip hasArrow label="Link de senha" placement="top">
                      <Icon icon="mingcute:copy-2-line" hFlip width="18px" />
                    </Tooltip>
                  </Flex>
                  <Flex>
                    <Box pt="10px">
                      <Text color={title} fontSize="14px">
                        CNPJ
                      </Text>
                      <Text color={subtitle} fontSize="14px">
                        {item.cnpj}
                      </Text>
                    </Box>

                    {item.status === 'ATIVO' ? (
                      <Badge
                        mt="10px"
                        variant="subtle"
                        colorScheme="green"
                        textAlign="center"
                        w="100px"
                        h="min"
                        borderRadius="30px"
                      >
                        ATIVO
                      </Badge>
                    ) : (
                      <Badge
                        mt="10px"
                        variant="subtle"
                        colorScheme="red"
                        textAlign="center"
                        w="100px"
                        borderRadius="30px"
                        h="min"
                      >
                        FINALIZADO
                      </Badge>
                    )}
                  </Flex>
                  <Box py="10px">
                    <Text color={title} fontSize="14px">
                      {' '}
                      E-mail
                    </Text>
                    <Text color={subtitle} fontSize="14px">
                      {item.email}
                    </Text>
                  </Box>
                  <Box>
                    <Text color={title} fontSize="14px">
                      {' '}
                      Plano
                    </Text>
                    <Text color={subtitle} fontSize="14px">
                      {item.plan}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>{' '}
      <AddClient isOpen={isOpenAddUser} onClose={onCloseAddUser} />
    </Layout>
  );
}

type TableThProps = {
  children?: string | number | ReactNode;
} & BoxProps;

const TableTh = ({ children, ...rest }: TableThProps) => {
  return (
    <Th
      border="none"
      fontWeight="600"
      fontSize="14px"
      textTransform="capitalize"
      w="fit-content"
      {...rest}
    >
      {children}
    </Th>
  );
};

type AddClientModalProps = {
  isOpen: boolean;
  onClose(): void;
};

const AddClient = ({ isOpen, onClose }: AddClientModalProps) => {
  const title = useColorModeValue('light.title', 'dark.title');
  const button = useColorModeValue('light.button', 'dark.button');

  return (
    <SimpleModal
      isCentered
      title="Adicionar Usuário"
      isOpen={isOpen}
      onClose={onClose}
      size={['min', 'min', 'min', '750px']}
    >
      <Box maxH="400px" overflowY="auto">
        <Flex gap={[0, 30]} flexDir={['column', 'row']}>
          <Box color={title}>
            <Center gap="2" flexDir="column">
              <Avatar boxSize="100px" />
              <Text fontSize="10px">Tamanho recomendado: 160x130</Text>
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
          <Box>
            <Input name="social" label="Razão social" />
            <Flex pt="10px" pb="20px" gap={4} flexDir={['column', 'row']}>
              <Input name="cnpj" label="CNPJ" />
              <FormControl w={['100%', '50%']}>
                <FormLabel>Tipo de empresa</FormLabel>
                <Select
                  placeholder="Selecione"
                  sx={{
                    option: { fontFamily: 'Inter' },
                    border: '1px',
                    borderRadius: '4px',
                  }}
                >
                  <option value="option1">LTDA</option>
                  <option value="option2">ME</option>
                </Select>
              </FormControl>
            </Flex>
            <Input name="address" label="Endereço" />
            <Flex gap={4} pt="10px">
              <Input name="email" label="E-mail" />
              <Input name="telephone" label="Telefone" />
            </Flex>
            <Flex py="30px" alignItems="center" gap={5}>
              <Switch size="md" />
              <Text>Ativo</Text>
            </Flex>
            <Flex>
              <Text fontSize="18px" fontWeight="600" pb="20px">
                Contrato
              </Text>
            </Flex>
            <SimpleGrid gap={4} columns={[1, 1, 2, 2]} w="100%">
              <FormControl>
                <FormLabel>Plano</FormLabel>
                <Select
                  placeholder="Selecione"
                  sx={{
                    option: { fontFamily: 'Inter' },
                    border: '1px',
                    borderRadius: '4px',
                  }}
                >
                  <option value="option1">Plano 1</option>
                  <option value="option2">Plano 2</option>
                </Select>
              </FormControl>
              <Input name="data" label="Primeiro vencimento" type="date" />
              <Input name="begin" label="Início" type="date" />{' '}
              <Input name="end" label="Fim" type="date" />
            </SimpleGrid>
          </Box>
        </Flex>
        <Flex gap={5} justify="flex-end" pb="20px" pt="20px">
          <Button
            bg={button}
            color="#fff"
            w={['100%', '150px', '150px', '150px']}
            border="0"
            borderRadius="6px"
          >
            Cadastrar
          </Button>
        </Flex>
      </Box>
    </SimpleModal>
  );
};
