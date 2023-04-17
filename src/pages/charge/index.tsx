import {
  Flex,
  Box,
  Input,
  Text,
  useColorModeValue,
  Select,
  Switch,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Layout } from '@/components';

export default function Charge() {
  const text = useColorModeValue('light.text', 'dark.text');
  const card = useColorModeValue('light.card', 'dark.card');
  const text_area_border = useColorModeValue(
    'light.text_area_border',
    'dark.text_area_border'
  );
  const inside_card = useColorModeValue('light.background', 'dark.background');
  const card_border = useColorModeValue(
    'light.card_border',
    'dark.card_border'
  );
  const button = useColorModeValue('light.button', 'dark.button');
  return (
    <Layout>
      <Box color={text}>
        <Text fontWeight={700} fontSize="22px">
          COBRANÇA
        </Text>
        <Box
          mt={['30px', '40px']}
          p={['20px', '30px']}
          bg={card}
          border="1px"
          borderRadius="8px"
          borderColor={card_border}
        >
          <Text fontWeight={600} fontSize="20px">
            Régua de cobrança
          </Text>
          <Text pt={['9px', '10px', '15px']}>
            Configure abaixo em quais períodos e a forma que deseja cobrar os
            clientes.
          </Text>
          <Flex
            justify="space-between"
            bg={inside_card}
            border="1px"
            borderRadius="10px"
            borderColor={card_border}
            h={['auto', 'auto', 'auto', '60px']}
            px={['20px', '30px']}
            mt={['30px', '60px']}
            alignItems={['initial', 'initial', 'initial', 'center']}
            direction={['column', 'column', 'column', 'row']}
          >
            <Flex
              direction={['column', 'column', 'column', 'row']}
              gap={2}
              alignItems={['initial', 'initial', 'initial', 'center']}
              mb={['10px', '0']}
              flex={['initial', '1']}
            >
              {' '}
              <Flex
                gap={2}
                pt={['20px', '20px', '20px', '0px']}
                alignItems="center"
              >
                <Text>Enviar notificações</Text>
                <Input width="60px" placeholder="00" />
              </Flex>
              <Flex gap={2} pt={['10px', '0px']} alignItems="center">
                <Text>dia(s)</Text>
                <Select
                  placeholder="Selecione"
                  w={['150px', '250px']}
                  sx={{ option: { fontFamily: 'Inter' } }}
                >
                  <option value="option1">Antes de vencer</option>
                  <option value="option2">Depois de vencer</option>
                </Select>
              </Flex>
              <Flex gap={2} pt={['10px', '0px']} alignItems="center">
                <Switch pl={['0px', '0px', '0px', '30px']} size="md" />
                <Text>E-mail</Text>
              </Flex>
              <Flex gap={2} pt={['10px', '0px']} alignItems="center">
                <Switch colorScheme="blue" size="md" />
                <Text>SMS</Text>
              </Flex>
            </Flex>
            <Flex alignItems="center" py={['20px', '20px', '20px', '0px']}>
              <Icon icon="lucide:trash-2" width="18px" cursor="pointer" />
            </Flex>
          </Flex>
          <Text pt={['30px', '40px']}>Mensagem da notificação</Text>
          <Textarea
            mt="15px"
            w={['100%', '50%']}
            border="1px"
            borderRadius="8px"
            borderColor={text_area_border}
            placeholder="Olá [name], evite pagar juros por atraso. Acesse seu e-mail e realize o pagamento da fatura deste mês."
          />
          <Flex
            gap={2}
            color={button}
            pt={['20px', '30px']}
            cursor="pointer"
            alignItems="center"
          >
            <Icon width="18px" icon="mdi:plus-circle-outline" />
            <Text>Adicionar etapa</Text>
          </Flex>
          <Flex justify={['center', 'end']} mt={['30px', '40px']}>
            <Button
              w={['100%', '150px']}
              bg={button}
              color="#FFF"
              borderRadius="6px"
            >
              Salvar
            </Button>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
}
