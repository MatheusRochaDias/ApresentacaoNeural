import {
  Flex,
  Box,
  Text,
  useColorModeValue,
  Button,
  SimpleGrid,
  Center,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Layout } from '@/components';

export default function Charge() {
  const text = useColorModeValue('light.text', 'dark.text');
  const card = useColorModeValue('light.card', 'dark.card');
  const card_border = useColorModeValue(
    'light.card_border',
    'dark.card_border'
  );
  const subtitle = useColorModeValue('light.subtitle', 'dark.subtitle');
  const title = useColorModeValue('light.title', 'dark.title');
  const border = useColorModeValue('light.border', 'dark.border');
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
          <SimpleGrid columns={[1, 2, 2, 4]} gap="5">
            <Box
              border="1px"
              pt="40px"
              pb="20px"
              borderColor={border}
              color={title}
            >
              <Center flexDir="column">
                <Text fontSize="20px" fontWeight="400" textAlign="center">
                  Business Starter
                </Text>
                <Box h="80px">
                  <Flex alignItems="baseline" gap={1} justifyContent="center">
                    <Text
                      fontSize="35px"
                      fontWeight="400"
                      color={button}
                      textAlign="center"
                    >
                      R$28
                    </Text>
                    <Text fontSize="15px" color={subtitle} fontWeight="600">
                      BRL
                    </Text>
                  </Flex>
                  <Center>
                    <Text
                      fontSize="18px"
                      textAlign="center"
                      color={subtitle}
                      as="s"
                    >
                      R$35 *
                    </Text>
                  </Center>
                </Box>
                <Text>mensais por usuário</Text>
                <Center borderBottom="1px" borderColor={border} w="80%">
                  <Button
                    my="20px"
                    variant="outline"
                    color={button}
                    w={['100%', '150px', '150px', '150px']}
                    borderRadius="6px"
                    border="1px"
                    borderColor={button}
                  >
                    Iniciar agora
                  </Button>
                </Center>
                <Item text="E-mail comercial personalizado e seguro" />
                <Item text="Videochamadas com cem participantes" />
                <Item text="30 GB de armazenamento por usuário" />
                <Item text="Controles de segurança e gerenciamento" />
                <Item text="Suporte Padrão" />
              </Center>
            </Box>
            <Box
              border="1px"
              pt="40px"
              pb="20px"
              borderColor={border}
              color={title}
            >
              <Center flexDir="column">
                <Text fontSize="20px" fontWeight="400" textAlign="center">
                  Business Standard
                </Text>
                <Box h="80px">
                  <Flex alignItems="baseline" gap={1} justifyContent="center">
                    <Text
                      fontSize="35px"
                      fontWeight="400"
                      color={button}
                      textAlign="center"
                    >
                      R$70
                    </Text>
                    <Text fontSize="15px" color={subtitle} fontWeight="600">
                      BRL
                    </Text>
                  </Flex>
                </Box>
                <Text>mensais por usuário</Text>

                <Center borderBottom="1px" borderColor={border} w="80%">
                  <Button
                    my="20px"
                    variant="outline"
                    color={button}
                    w={['100%', '150px', '150px', '150px']}
                    borderRadius="6px"
                    border="1px"
                    borderColor={button}
                  >
                    Iniciar agora
                  </Button>
                </Center>
                <Item text="E-mail comercial personalizado e seguro" />
                <Item text="Videochamadas com 150 participantes + gravação" />
                <Item text="2 TB de armazenamento por usuário**" />
                <Item text="Controles de segurança e gerenciamento" />
                <Item text="Suporte Padrão (upgrade pago para o suporte aprimorado)" />
              </Center>
            </Box>
            <Box
              border="1px"
              pt="40px"
              pb="20px"
              borderColor={border}
              color={title}
            >
              <Center flexDir="column">
                <Text fontSize="20px" fontWeight="400" textAlign="center">
                  Business Standard
                </Text>
                <Box h="80px">
                  <Flex alignItems="baseline" gap={1} justifyContent="center">
                    <Text
                      fontSize="35px"
                      fontWeight="400"
                      color={button}
                      textAlign="center"
                    >
                      R$70
                    </Text>
                    <Text fontSize="15px" color={subtitle} fontWeight="600">
                      BRL
                    </Text>
                  </Flex>
                </Box>
                <Text>mensais por usuário</Text>

                <Center borderBottom="1px" borderColor={border} w="80%">
                  <Button
                    my="20px"
                    variant="outline"
                    color={button}
                    w={['100%', '150px', '150px', '150px']}
                    borderRadius="6px"
                    border="1px"
                    borderColor={button}
                  >
                    Iniciar agora
                  </Button>
                </Center>
                <Item text="E-mail comercial personalizado e seguro" />
                <Item text="Videochamadas com 150 participantes + gravação" />
                <Item text="2 TB de armazenamento por usuário**" />
                <Item text="Controles de segurança e gerenciamento" />
                <Item text="Suporte Padrão (upgrade pago para o suporte aprimorado)" />
              </Center>
            </Box>
            <Box
              border="1px"
              pt="40px"
              pb="20px"
              borderColor={border}
              color={title}
            >
              <Center flexDir="column">
                <Text fontSize="20px" fontWeight="400" textAlign="center">
                  Business Standard
                </Text>
                <Box h="80px">
                  <Flex alignItems="baseline" gap={1} justifyContent="center">
                    <Text
                      fontSize="35px"
                      fontWeight="400"
                      color={button}
                      textAlign="center"
                    >
                      R$70
                    </Text>
                    <Text fontSize="15px" color={subtitle} fontWeight="600">
                      BRL
                    </Text>
                  </Flex>
                </Box>
                <Text>mensais por usuário</Text>

                <Center borderBottom="1px" borderColor={border} w="80%">
                  <Button
                    my="20px"
                    variant="outline"
                    color={button}
                    w={['100%', '150px', '150px', '150px']}
                    borderRadius="6px"
                    border="1px"
                    borderColor={button}
                  >
                    Iniciar agora
                  </Button>
                </Center>
                <Item text="E-mail comercial personalizado e seguro" />
                <Item text="Videochamadas com 150 participantes + gravação" />
                <Item text="2 TB de armazenamento por usuário**" />
                <Item text="Controles de segurança e gerenciamento" />
                <Item text="Suporte Padrão (upgrade pago para o suporte aprimorado)" />
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  );
}
interface ItemProps {
  text: string;
}
const Item = ({ text }: ItemProps) => {
  return (
    <Flex alignItems="flex-start" py="5px" gap={2} w="80%">
      <Box w="10%" mt="4px">
        <Icon icon="material-symbols:check" color="#485EC4" />
      </Box>
      <Text w="90%" fontSize="14px">
        {text}
      </Text>
    </Flex>
  );
};
