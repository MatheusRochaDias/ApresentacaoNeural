import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Tooltip,
  useColorModeValue,
  BoxProps,
  Center,
  Text,
  useDisclosure,
  Avatar,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ReactNode } from 'react';
import { IconModal, Input, SimpleModal } from '@/components';

export default function UsersTab() {
  const button = useColorModeValue('light.button', 'dark.button');
  const table_header = useColorModeValue(
    'light.table_header',
    'dark.table_header'
  );
  const data = [
    {
      id: 1,
      name: 'Maria da Conceição Braga',
      category: 'Comercial',
      email: 'maria.braga@example.com',
      phone: '11 9999-9999',
    },
    {
      id: 2,
      name: 'Arthur Aguiar Melo',
      category: 'Comercial',
      email: 'bill.sanders@example.com',
      phone: '11 8888-8888',
    },
    {
      id: 3,
      name: 'Ângelo Gabriel Faria',
      category: 'Suporte',
      email: 'bill.sanders@example.com',
      phone: '11 7777-7777',
    },
    {
      id: 3,
      name: 'Marta da Silva Pereira',
      category: 'Financeiro',
      email: 'bill.sanders@example.com',
      phone: '11 7777-7777',
    },
  ];
  const {
    isOpen: isOpenAddUser,
    onClose: onCloseAddUser,
    onOpen: onOpenAddUser,
  } = useDisclosure();

  const {
    isOpen: isOpenDeleteUser,
    onClose: onCloseDeleteUser,
    onOpen: onOpenDeleteUser,
  } = useDisclosure();
  return (
    <Box pt="20px">
      <Flex gap={5} justify="flex-end">
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
      <Box overflowX="auto" borderRadius="15px 15px 0px 0px" mt="20px">
        <Table variant="simple" width="100%">
          <Thead>
            <Tr bg={table_header}>
              <TableTh minW="200px">Nome</TableTh>
              <TableTh minW="100px">Categoria</TableTh>
              <TableTh minW="200px">E-mail</TableTh>
              <TableTh minW="150px">Telefone</TableTh>
              <TableTh minW="10px" maxW="20px" />
            </Tr>
          </Thead>
          <Tbody fontSize="12px">
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.category}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phone}</Td>
                <Td>
                  <Center gap={4}>
                    <Box cursor="pointer">
                      <Tooltip hasArrow label="Link de senha" placement="top">
                        <Icon icon="mingcute:copy-2-line" hFlip width="18px" />
                      </Tooltip>
                    </Box>
                    <Box cursor="pointer">
                      <Icon icon="ant-design:edit-twotone" width="18px" />
                    </Box>
                    <Box cursor="pointer" onClick={() => onOpenDeleteUser()}>
                      <Icon
                        icon="lucide:trash-2"
                        width="18px"
                        cursor="pointer"
                      />{' '}
                    </Box>
                  </Center>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <AddUserModal isOpen={isOpenAddUser} onClose={onCloseAddUser} />
      <DeleteUserModal isOpen={isOpenDeleteUser} onClose={onCloseDeleteUser} />
    </Box>
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

type addUserModalProps = {
  isOpen: boolean;
  onClose(): void;
};

const AddUserModal = ({ isOpen, onClose }: addUserModalProps) => {
  const text = useColorModeValue('light.text', 'dark.text');
  const button = useColorModeValue('light.button', 'dark.button');
  return (
    <SimpleModal
      isCentered
      title="Adicionar Usuário"
      isOpen={isOpen}
      onClose={onClose}
      size={['min', 'min', 'min', '600px']}
    >
      <Box>
        <Flex gap={[0, 30]} flexDir={['column', 'row']}>
          <Box color={text}>
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
            <Flex gap={4}>
              <Input name="name" label="Nome" />
              <Input name="category" label="Categoria" />
            </Flex>
            <Flex gap={4} pt="20px">
              <Input name="email" label="E-mail" />
              <Input name="telephone" label="Telefone" />
            </Flex>
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

const DeleteUserModal = ({ isOpen, onClose }: addUserModalProps) => {
  const text = useColorModeValue('light.text', 'dark.text');
  const button = useColorModeValue('light.button', 'dark.button');
  return (
    <IconModal
      isCentered
      title="Excluir"
      isOpen={isOpen}
      onClose={onClose}
      icon="ant-design:question-circle-outlined"
      size={['min', 'min', 'min', '500px']}
    >
      <Box color={text}>
        <Text py="20px">Tem certeza que deseja excluir esse usuário?</Text>
        <Flex gap={5} justify="flex-end" pb="20px" pt="20px">
          <Button
            variant="outline"
            color={button}
            w={['100%', '100px', '100px', '100px']}
            borderRadius="6px"
            border="1px"
            borderColor={button}
            onClick={() => onClose()}
          >
            Cancelar
          </Button>{' '}
          <Button
            bg={button}
            color="#fff"
            w={['100%', '100px', '100px', '100px']}
            border="0"
            borderRadius="6px"
          >
            Sim
          </Button>
        </Flex>
      </Box>
    </IconModal>
  );
};
