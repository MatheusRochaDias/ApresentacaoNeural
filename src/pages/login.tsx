import {
  Flex,
  Box,
  Text,
  Image,
  useColorModeValue,
  Center,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input, ThemeToggle } from '@/components';

export default function Home() {
  const textColor = useColorModeValue('light.text', 'dark.text');
  const backgroundColor = useColorModeValue(
    'light.background',
    'dark.background'
  );
  const button = useColorModeValue('light.button', 'dark.button');
  const imageMobile = useColorModeValue(
    '/assets/navbarLogoBlack.png',
    '/assets/navbarLogoWhite.png'
  );
  return (
    <Flex w="100vw" h="100vh">
      <Flex
        w={['0%', '50%', '50%', '70%']}
        backgroundImage="../assets/login.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        // backgroundPosition="right"
      >
        <Image
          src="/assets/logo.png"
          objectFit="contain"
          w="360px"
          position="absolute"
          pt="50px"
          px="50px"
          display={['none', 'block', 'block']}
        />
      </Flex>
      <Center w={['100%', '50%', '50%', '30%']} bg={backgroundColor}>
        <Flex
          position="absolute"
          justify="space-between"
          top={['5%', '7%']}
          left={['10%', '94%']}
          right={['10%']}
        >
          <Image
            src={imageMobile}
            objectFit="contain"
            w="200px"
            display={['show', 'none']}
          />
          <ThemeToggle />
        </Flex>
        <Box w="80%">
          <Text
            color={textColor}
            textAlign="center"
            fontSize="24px"
            fontWeight="600"
            pb="70px"
          >
            Bem-vindo à NeuralX
          </Text>
          <Box w="100%">
            <Box>
              <Input name="email" label="E-mail" />
            </Box>
            <Box pt="10px">
              <Input name="password" label="Senha" type="password" />
            </Box>
            <Link href="/dashboard">
              <Button
                mt="40px"
                bg={button}
                color="#FFF"
                w="100%"
                borderRadius="6px"
              >
                Entrar
              </Button>
            </Link>
            <Box pt="10px" cursor="pointer">
              <Text color={button} as="u">
                Esqueci minha senha
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
}
