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
  useColorModeValue,
  BoxProps,
  Center,
  Text,
  Checkbox,
  Switch,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ReactNode, useState } from 'react';
import { Input } from '@/components';

export default function PermissionTab() {
  const button = useColorModeValue('light.button', 'dark.button');
  const table_header = useColorModeValue(
    'light.table_header',
    'dark.table_header'
  );
  const permissions = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Clientes' },
    { id: 3, name: 'Financeiro' },
    { id: 4, name: 'Planos' },
    { id: 5, name: 'Financeiro' },
    { id: 6, name: 'Contratos' },
    { id: 7, name: 'Contratos' },
    { id: 8, name: 'Usuário' },
  ];
  const categories = [
    { id: 1, name: 'Administrador' },
    { id: 2, name: 'Financeiro' },
    { id: 3, name: 'Comercial' },
    { id: 4, name: 'Suporte' },
  ];

  const [selected, setSelected] = useState<{ [key: string]: number }>({});
  const [step, setStep] = useState(2);
  const handleSelect = (permissionId: any, checkboxName: any) => {
    setSelected({ ...selected, [checkboxName]: permissionId });
  };

  return (
    <Box pt="20px">
      {step === 1 && (
        <>
          {' '}
          <Flex gap={5} justify="flex-end">
            <Button
              bg={button}
              color="#fff"
              w={['100%', '150px', '150px', '150px']}
              border="0"
              borderRadius="6px"
              onClick={() => setStep(2)}
            >
              Adicionar
            </Button>
          </Flex>
          <Box overflowX="auto" borderRadius="15px 15px 0px 0px" mt="20px">
            <Flex alignItems="center" bg={table_header} h="50px">
              {' '}
              <Text fontWeight={600} px="20px">
                Categoria
              </Text>
            </Flex>{' '}
            <Table variant="simple">
              <Tbody>
                {categories.map((category) => (
                  <Tr key={category.id}>
                    <Td>
                      <Flex justify="flex-start">{category.name}</Flex>
                    </Td>
                    <Td>
                      <Flex justify="flex-end" gap={4}>
                        <Box cursor="pointer">
                          <Icon icon="ant-design:edit-twotone" width="18px" />
                        </Box>
                        <Box cursor="pointer">
                          <Icon
                            icon="lucide:trash-2"
                            width="18px"
                            cursor="pointer"
                          />{' '}
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </>
      )}
      {step === 2 && (
        <>
          {' '}
          <Flex
            justify="space-between"
            alignItems="center"
            gap={5}
            flexDir={['column', 'column', 'row', 'row']}
          >
            <Box w={['100%', '100%', 'max', 'max']}>
              {' '}
              <Input name="category" label="Categoria" />{' '}
            </Box>
            <Flex
              gap={5}
              mt={['0px', '0px', '30px', '30px']}
              w={['100%', '100%', 'max', 'max']}
            >
              <Switch size="md" />
              <Text>Permissão total</Text>
            </Flex>
            <Flex
              gap={5}
              mt={['0px', '0px', '30px', '30px']}
              justify="flex-end"
              w={['100%', '100%', 'max', 'max']}
            >
              <Button
                bg={button}
                color="#fff"
                w={['100%', '150px', '150px', '150px']}
                border="0"
                borderRadius="6px"
              >
                Adicionar
              </Button>
            </Flex>
          </Flex>
          <Box overflowX="auto" borderRadius="15px 15px 0px 0px" mt="20px">
            <Flex alignItems="center" bg={table_header} h="50px">
              {' '}
              <Text fontWeight={600} px="20px">
                Permissões
              </Text>
            </Flex>{' '}
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th />
                  <Th
                    fontWeight="600"
                    fontSize="14px"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    Visualizar
                  </Th>
                  <Th
                    fontWeight="600"
                    fontSize="14px"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    Editar
                  </Th>
                  <Th
                    fontWeight="600"
                    fontSize="14px"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    Excluir
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {permissions.map((permission) => (
                  <Tr key={permission.id}>
                    <Td>{permission.name}</Td>
                    <Td textAlign="center">
                      <Checkbox
                        name={`visualizar-${permission.id}`}
                        isChecked={
                          selected[`visualizar-${permission.id}`] ===
                          permission.id
                        }
                        onChange={() =>
                          handleSelect(
                            permission.id,
                            `visualizar-${permission.id}`
                          )
                        }
                      />
                    </Td>
                    <Td textAlign="center">
                      <Checkbox
                        name={`editar-${permission.id}`}
                        isChecked={
                          selected[`editar-${permission.id}`] === permission.id
                        }
                        onChange={() =>
                          handleSelect(permission.id, `editar-${permission.id}`)
                        }
                      />
                    </Td>
                    <Td textAlign="center">
                      <Checkbox
                        name={`excluir-${permission.id}`}
                        isChecked={
                          selected[`excluir-${permission.id}`] === permission.id
                        }
                        onChange={() =>
                          handleSelect(
                            permission.id,
                            `excluir-${permission.id}`
                          )
                        }
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <Flex gap={5} justify="flex-start" pt="20px">
            <Button
              variant="outline"
              color={button}
              w={['100%', '100px', '100px', '100px']}
              borderRadius="6px"
              border="1px"
              borderColor={button}
              onClick={() => setStep(1)}
            >
              Voltar
            </Button>
          </Flex>
        </>
      )}
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
