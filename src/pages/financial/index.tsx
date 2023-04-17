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
  Td,
  Badge,
  Select,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ReactNode } from 'react';
import { IconModal, InfoCard, Input, Layout, SimpleModal } from '@/components';

export default function Financial() {
  const text = useColorModeValue('light.text', 'dark.text');
  const card = useColorModeValue('light.card', 'dark.card');
  const table_header = useColorModeValue(
    'light.table_header',
    'dark.table_header'
  );
  const card_border = useColorModeValue(
    'light.card_border',
    'dark.card_border'
  );
  const input_border = useColorModeValue('light.border', 'dark.border');
  const data = [
    {
      id: 1,
      name: 'Contabilidade Diamond',
      type: '01 Aberto / 03 Atraso / 01 Pendente',
      mensal: '0000003601',
      plan: 'Premium',
      due_date: '31/12/24',
      value: 'R$ 300,00',
      status: 'PAGO',
    },
    {
      id: 2,
      name: 'Contabilidade Diamond',
      type: '01 Aberto / 03 Atraso / 01 Pendente',
      mensal: '0000003601',
      plan: 'Premium',
      due_date: '31/12/24',
      value: 'R$ 300,00',
      status: 'ATRASADO',
    },
    {
      id: 3,
      name: 'Contabilidade Diamond',
      type: '01 Aberto / 03 Atraso / 01 Pendente',
      mensal: '0000003601',
      plan: 'Premium',
      due_date: '31/12/24',
      value: 'R$ 300,00',
      status: 'PENDENTE',
    },
    {
      id: 4,
      name: 'Contabilidade Diamond',
      type: '01 Aberto / 03 Atraso / 01 Pendente',
      mensal: '0000003601',
      plan: 'Premium',
      due_date: '31/12/24',
      value: 'R$ 300,00',
      status: 'PAGO',
    },
    {
      id: 5,
      name: 'Contabilidade Diamond',
      type: '01 Aberto / 03 Atraso / 01 Pendente',
      mensal: '0000003601',
      plan: 'Premium',
      due_date: '31/12/24',
      value: 'R$ 300,00',
      status: 'PAGO',
    },
    {
      id: 6,
      name: 'Contabilidade Diamond',
      type: '01 Aberto / 03 Atraso / 01 Pendente',
      mensal: '0000003601',
      plan: 'Premium',
      due_date: '31/12/24',
      value: 'R$ 300,00',
      status: 'PAGO',
    },
    {
      id: 7,
      name: 'Contabilidade Diamond',
      type: '01 Aberto / 03 Atraso / 01 Pendente',
      mensal: '0000003601',
      plan: 'Premium',
      due_date: '31/12/24',
      value: 'R$ 300,00',
      status: 'PAGO',
    },
  ];
  const {
    isOpen: isOpenDetailModal,
    onClose: onCloseDetailModal,
    onOpen: onOpenDetailModal,
  } = useDisclosure();
  const {
    isOpen: isOpenCancel,
    onClose: onCloseCancel,
    onOpen: onOpenCancel,
  } = useDisclosure();

  return (
    <Layout>
      <Box color={text}>
        <Text fontWeight={700} fontSize="22px">
          FINANCEIRO
        </Text>
        <SimpleGrid pt={['30px', '40px']} gap={5} columns={[1, 2, 2, 4]}>
          <InfoCard number="R$ 1.500,00" text="Previsto para o mês" />
          <InfoCard number="R$ 1.000,00" text="Recebido" />
          <InfoCard number="R$ 500,00" text="Em aberto" />
          <InfoCard number={10} text="Pagamentos pendentes" />
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
            width={['100%', '80%']}
            flexDir={['column', 'column', 'row', 'row']}
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
          <Box overflowX="auto" borderRadius="15px 15px 0px 0px" mt="20px">
            <Table variant="simple" width="100%">
              <Thead>
                <Tr bg={table_header}>
                  <TableTh minW="240px">Cliente</TableTh>
                  <TableTh minW="120px">Mensalidade</TableTh>
                  <TableTh minW="100px">Plano</TableTh>
                  <TableTh minW="100px">Vencimento</TableTh>
                  <TableTh minW="100px">Valor</TableTh>
                  <TableTh minW="100px">Status</TableTh>
                  <TableTh minW="10px" maxW="20px" />
                </Tr>
              </Thead>
              <Tbody fontSize="12px">
                {data.map((item) => (
                  <Tr key={item.id}>
                    <Td>
                      <Box>
                        <Text fontSize="16px">{item.name}</Text>
                        <Text fontSize="12px">{item.type}</Text>
                      </Box>
                    </Td>
                    <Td>{item.mensal}</Td>
                    <Td>{item.plan}</Td>
                    <Td>{item.due_date}</Td>
                    <Td>{item.value}</Td>

                    <Td>
                      {item.status === 'PAGO' ? (
                        <Badge
                          variant="subtle"
                          colorScheme="green"
                          textAlign="center"
                          w="100px"
                          borderRadius="30px"
                        >
                          PAGO
                        </Badge>
                      ) : item.status === 'ATRASADO' ? (
                        <Badge
                          variant="subtle"
                          colorScheme="red"
                          textAlign="center"
                          w="100px"
                          borderRadius="30px"
                        >
                          ATRASADO
                        </Badge>
                      ) : (
                        <Badge
                          variant="subtle"
                          colorScheme="yellow"
                          textAlign="center"
                          w="100px"
                          borderRadius="30px"
                        >
                          PENDENTE{' '}
                        </Badge>
                      )}
                    </Td>
                    <Td>
                      <Center gap={4}>
                        <Box
                          cursor="pointer"
                          onClick={() => onOpenDetailModal()}
                        >
                          <Tooltip hasArrow label="Detalhes" placement="top">
                            <Icon icon="akar-icons:eye" hFlip width="18px" />
                          </Tooltip>
                        </Box>
                        <Box cursor="pointer">
                          <Tooltip hasArrow label="Enviar NF" placement="top">
                            <Icon icon="ic:baseline-whatsapp" width="18px" />
                          </Tooltip>
                        </Box>
                        <Box cursor="pointer" onClick={() => onOpenCancel()}>
                          <Tooltip
                            hasArrow
                            label="Cancelar cobrança"
                            placement="top"
                          >
                            <Icon
                              icon="mdi:block"
                              width="18px"
                              cursor="pointer"
                            />
                          </Tooltip>
                        </Box>
                      </Center>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>{' '}
      <DetailModal isOpen={isOpenDetailModal} onClose={onCloseDetailModal} />
      <CancelModal isOpen={isOpenCancel} onClose={onCloseCancel} />
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

type DetailModalProps = {
  isOpen: boolean;
  onClose(): void;
};

const DetailModal = ({ isOpen, onClose }: DetailModalProps) => {
  const table_header = useColorModeValue(
    'light.table_header',
    'dark.table_header'
  );
  const data = [
    {
      id: 2,
      mensal: '0000003601',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'PAGO',
    },
    {
      id: 3,
      mensal: '0000003601',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'ATRASADO',
    },
    {
      id: 4,
      mensal: '0000003601',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'PENDENTE',
    },
    {
      id: 5,
      mensal: '0000003601',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'PAGO',
    },
    {
      id: 6,
      mensal: '0000003601',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'PAGO',
    },
    {
      id: 7,
      mensal: '0000003601',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'PAGO',
    },
  ];
  return (
    <SimpleModal
      isCentered
      title="Detalhes"
      isOpen={isOpen}
      onClose={onClose}
      size={['90%', '90%', 'min', '550px']}
    >
      <Box>
        <Box overflowX="auto" borderRadius="15px 15px 0px 0px" mt="20px">
          <Table variant="simple">
            <Thead>
              <Tr bg={table_header}>
                <TableTh>Mensalidade</TableTh>
                <TableTh>Valor</TableTh>
                <TableTh>Vencimento</TableTh>
                <TableTh>Status</TableTh>
                <TableTh />
              </Tr>
            </Thead>
            <Tbody fontSize="12px">
              {data.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.mensal}</Td>
                  <Td>{item.value}</Td>
                  <Td>{item.due_date}</Td>
                  <Td>
                    {item.status === 'PAGO' ? (
                      <Badge
                        variant="subtle"
                        colorScheme="green"
                        textAlign="center"
                        w="100px"
                        borderRadius="30px"
                      >
                        PAGO
                      </Badge>
                    ) : item.status === 'ATRASADO' ? (
                      <Badge
                        variant="subtle"
                        colorScheme="red"
                        textAlign="center"
                        w="100px"
                        borderRadius="30px"
                      >
                        ATRASADO
                      </Badge>
                    ) : (
                      <Badge
                        variant="subtle"
                        colorScheme="yellow"
                        textAlign="center"
                        w="100px"
                        borderRadius="30px"
                      >
                        PENDENTE{' '}
                      </Badge>
                    )}
                  </Td>
                  <Td>
                    <Center gap={4}>
                      <Box cursor="pointer">
                        <Tooltip hasArrow label="Detalhes" placement="top">
                          <Icon icon="akar-icons:eye" hFlip width="18px" />
                        </Tooltip>
                      </Box>
                    </Center>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </SimpleModal>
  );
};

type CancelModalProps = {
  isOpen: boolean;
  onClose(): void;
};

const CancelModal = ({ isOpen, onClose }: CancelModalProps) => {
  const text = useColorModeValue('light.text', 'dark.text');
  const button = useColorModeValue('light.button', 'dark.button');
  return (
    <IconModal
      isCentered
      title="Cobrança"
      isOpen={isOpen}
      onClose={onClose}
      icon="ant-design:question-circle-outlined"
      size={['min', 'min', 'min', '500px']}
    >
      <Box color={text}>
        <Text py="20px">Tem certeza que deseja cancelar essa cobrança?</Text>
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
