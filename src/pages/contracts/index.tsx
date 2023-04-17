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
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ReactNode, useEffect, useState } from 'react';
import { IconModal, InfoCard, Input, Layout, SimpleModal } from '@/components';

export default function Contracts() {
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
      plan: 'Premium',
      created_at: '28/02/2023',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'Ativo',
    },
    {
      id: 2,
      name: 'Contabilidade Diamond',
      plan: 'Premium',
      created_at: '28/02/2023',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'Finalizado',
    },
    {
      id: 3,
      name: 'Contabilidade Diamond',
      plan: 'Premium',
      created_at: '31/12/2023',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'Finalizado',
    },
    {
      id: 4,
      name: 'Contabilidade Diamond',
      plan: 'Premium',
      created_at: '31/12/2023',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'Vencido',
    },
    {
      id: 5,
      name: 'Contabilidade Diamond',
      plan: 'Premium',
      created_at: '31/12/2023',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'Ativo',
    },
    {
      id: 6,
      name: 'Contabilidade Diamond',
      plan: 'Premium',
      created_at: '31/12/2023',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'Vencido',
    },
    {
      id: 7,
      name: 'Contabilidade Diamond',
      plan: 'Premium',
      created_at: '31/12/2023',
      value: 'R$ 300,00',
      due_date: '31/12/24',
      status: 'Ativo',
    },
  ];
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const {
    isOpen: isOpenRenewContract,
    onClose: onCloseRenewContract,
    onOpen: onOpenRenewContract,
  } = useDisclosure();
  const {
    isOpen: isOpenSuccess,
    onClose: onCloseSuccess,
    onOpen: onOpenSuccess,
  } = useDisclosure();
  useEffect(() => {
    if (isSuccessModalOpen) {
      onOpenSuccess();
      setIsSuccessModalOpen(false);
    }
  }, [isSuccessModalOpen]);

  return (
    <Layout>
      <Box color={text}>
        <Text fontWeight={700} fontSize="22px">
          CONTRATOS
        </Text>
        <SimpleGrid pt={['30px', '40px']} gap={5} columns={[1, 2, 2, 4]}>
          <InfoCard number={150} text="Total de contratos" />
          <InfoCard number={100} text="Contratos vigentes" />
          <InfoCard number={60} text="Próximo do vencimento" />
          <InfoCard number={10} text="Novos contratos no mês" />
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
                  <TableTh minW="220px">Cliente</TableTh>
                  <TableTh minW="120px">Plano</TableTh>
                  <TableTh minW="100px">Criado em</TableTh>
                  <TableTh minW="100px">Valor</TableTh>
                  <TableTh minW="100px">Vencimento</TableTh>
                  <TableTh minW="150px">Status</TableTh>
                  <TableTh minW="10px" maxW="20px" />
                </Tr>
              </Thead>
              <Tbody fontSize="12px">
                {data.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.name}</Td>
                    <Td>{item.plan}</Td>
                    <Td>{item.created_at}</Td>
                    <Td>{item.value}</Td>
                    <Td color={item.status === 'Finalizado' ? 'red' : ''}>
                      {item.due_date}
                    </Td>
                    <Td>
                      {item.status === 'Ativo' ? (
                        <Badge
                          variant="subtle"
                          colorScheme="green"
                          textAlign="center"
                          w="100px"
                          borderRadius="30px"
                        >
                          ATIVO
                        </Badge>
                      ) : item.status === 'Finalizado' ? (
                        <Badge
                          variant="subtle"
                          colorScheme="red"
                          textAlign="center"
                          w="100px"
                          borderRadius="30px"
                        >
                          FINALIZADO
                        </Badge>
                      ) : (
                        <Badge
                          variant="subtle"
                          colorScheme="yellow"
                          textAlign="center"
                          w="100px"
                          borderRadius="30px"
                        >
                          À VENCER
                        </Badge>
                      )}
                    </Td>
                    <Td>
                      {item.status === 'Finalizado' && (
                        <Center gap={4}>
                          <Box
                            cursor="pointer"
                            onClick={() => onOpenRenewContract()}
                          >
                            <Tooltip
                              hasArrow
                              label="Renovar contrato"
                              placement="top"
                            >
                              <Icon icon="mdi:restore" hFlip width="18px" />
                            </Tooltip>
                          </Box>
                        </Center>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>{' '}
      <RenewContract
        isOpen={isOpenRenewContract}
        onClose={onCloseRenewContract}
        setIsSuccessModalOpen={setIsSuccessModalOpen}
      />
      <SuccessModal isOpen={isOpenSuccess} onClose={onCloseSuccess} />
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

type RenewContractModalProps = {
  isOpen: boolean;
  onClose(): void;
  setIsSuccessModalOpen: (status: boolean) => void;
};

const RenewContract = ({
  isOpen,
  onClose,
  setIsSuccessModalOpen,
}: RenewContractModalProps) => {
  const subtitle = useColorModeValue('light.subtitle', 'dark.subtitle');
  const title = useColorModeValue('light.title', 'dark.title');
  const button = useColorModeValue('light.button', 'dark.button');

  return (
    <SimpleModal
      isCentered
      title="Renovar contrato"
      isOpen={isOpen}
      onClose={onClose}
      size={['min', 'min', 'min', '550px']}
    >
      <Box>
        <Flex flexDir="column">
          <SimpleGrid gap={4} columns={[1, 1, 2, 2]} w="100%" pb="30px">
            <Box gap={2}>
              <Text color={title} fontSize="14px" fontWeight="600">
                Razão social
              </Text>
              <Text color={subtitle} fontSize="14px">
                Contabilidade Diamond
              </Text>
            </Box>
            <Box gap={2}>
              <Text color={title} fontSize="14px" fontWeight="600">
                CNPJ
              </Text>
              <Text color={subtitle} fontSize="14px">
                89.007.367/0001-40
              </Text>
            </Box>
            <Box gap={2}>
              <Text color={title} fontSize="14px" fontWeight="600">
                E-mail
              </Text>
              <Text color={subtitle} fontSize="14px">
                debbie.baker@example.com
              </Text>
            </Box>
            <Box gap={2}>
              <Text color={title} fontSize="14px" fontWeight="600">
                Telefone
              </Text>
              <Text color={subtitle} fontSize="14px">
                (48) 999999999
              </Text>
            </Box>
          </SimpleGrid>
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
        </Flex>
        <Flex gap={5} justify="flex-end" pb="20px" pt="20px">
          <Button
            bg={button}
            color="#fff"
            w={['100%', '100%', '150px', '150px']}
            border="0"
            borderRadius="6px"
            onClick={() => {
              setIsSuccessModalOpen(true);
              onClose();
            }}
          >
            Renovar
          </Button>
        </Flex>
      </Box>{' '}
    </SimpleModal>
  );
};

type successModalProps = {
  isOpen: boolean;
  onClose(): void;
};

const SuccessModal = ({ isOpen, onClose }: successModalProps) => {
  const text = useColorModeValue('light.text', 'dark.text');
  const button = useColorModeValue('light.button', 'dark.button');
  return (
    <IconModal
      isCentered
      title="Excelente!"
      isOpen={isOpen}
      onClose={onClose}
      icon="material-symbols:check-circle-outline"
      size={['min', 'min', 'min', '500px']}
    >
      <Box color={text}>
        <Text py="20px">Contrato renovado com sucesso!</Text>
        <Flex gap={5} justify="flex-end" pb="20px" pt="20px">
          <Button
            bg={button}
            color="#fff"
            w={['100%', '100px', '100px', '100px']}
            border="0"
            borderRadius="6px"
            onClick={() => onClose()}
          >
            Fechar
          </Button>
        </Flex>
      </Box>
    </IconModal>
  );
};
