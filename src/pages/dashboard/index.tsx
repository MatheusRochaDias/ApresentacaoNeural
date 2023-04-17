import {
  Box,
  Text,
  useColorModeValue,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';

import {
  AreaChart,
  BarChart,
  DonutChart,
  InfoCard,
  Layout,
} from '@/components';

export default function Financial() {
  const text = useColorModeValue('light.text', 'dark.text');
  const card = useColorModeValue('light.card', 'dark.card');
  const card_border = useColorModeValue(
    'light.card_border',
    'dark.card_border'
  );

  return (
    <Layout>
      <Box color={text}>
        <SimpleGrid pt={['30px', '40px']} gap={5} columns={[1, 2, 2, 4]}>
          <InfoCard number="300" text="Clientes ativos" />
          <InfoCard number="150" text="Assinaturas" />
          <InfoCard number="R$ 470,00" text="Ticket médio" />
          <InfoCard number="10" text="Contratos pendentes" />
        </SimpleGrid>
        <Flex gap={5} flexDir={['column', 'column', 'row', 'row']}>
          <Box
            w={['100%', '100%', '40%', '40%']}
            mt={['30px', '40px']}
            p={['20px', '30px']}
            bg={card}
            border="1px"
            borderRadius="8px"
            borderColor={card_border}
          >
            <Text fontWeight={700}>Quantidade de vendas</Text>
            <AreaChart />
          </Box>
          <Box
            w={['100%', '100%', '60%', '60%']}
            mt={['30px', '40px']}
            p={['20px', '30px']}
            bg={card}
            border="1px"
            borderRadius="8px"
            borderColor={card_border}
          >
            <Text fontWeight={700}>Cobranças previstas x recebidas</Text>
            <Flex flexDir={['column', 'column', 'row', 'row']}>
              <Box pt="20px" width={['100%', '100%', '50%', '50%']}>
                <DonutChart />
              </Box>
              <Box pt="20px" width={['100%', '100%', '50%', '50%']}>
                <BarChart />
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex gap={5}>
          <Box
            w="100%"
            mt={['30px', '40px']}
            p={['20px', '30px']}
            bg={card}
            border="1px"
            borderRadius="8px"
            borderColor={card_border}
          >
            <SimpleGrid columns={[1, 1, 3, 3]} gap={5}>
              <Box>
                <Text textAlign="center" fontWeight={700}>
                  Clientes por planos
                </Text>
                <DonutChart />
              </Box>
              <Box>
                <Text textAlign="center" fontWeight={700}>
                  Receita por plano em janeiro
                </Text>
                <DonutChart />
              </Box>
              <Box>
                <Text textAlign="center" fontWeight={700}>
                  Inadimplência por plano em janeiro
                </Text>
                <DonutChart />
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
