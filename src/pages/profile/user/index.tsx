import {
  Flex,
  Center,
  Button,
  Box,
  Text,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { Input, Layout, VerifyPassword } from '@/components';

export default function Home() {
  const text = useColorModeValue('light.text', 'dark.text');
  const card = useColorModeValue('light.card', 'dark.card');
  const card_border = useColorModeValue(
    'light.card_border',
    'dark.card_border'
  );
  const button = useColorModeValue('light.button', 'dark.button');
  const { register, watch } = useForm();

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
            {' '}
            <Box pt="20px" w="100%">
              <Text pb="20px" fontSize="20px" fontWeight={600}>
                Configurar senha
              </Text>
              <Box w={['100%', '100%', '60%', '60%']}>
                <Box>
                  <Input
                    label="Senha"
                    type="password"
                    placeholder="*********"
                    {...register('password')}
                  />
                </Box>{' '}
                <Box py="20px">
                  <Input
                    label="Confirmar Senha"
                    type="password"
                    placeholder="*********"
                    {...register('password_confirmation')}
                  />
                </Box>{' '}
                <VerifyPassword verify={watch('password')} />
              </Box>
              <Flex gap={5} justify="flex-end" pb="20px" pt="40px">
                <Button
                  bg={button}
                  color="#fff"
                  w={['100%', '100%', '150px', '150px']}
                  border="0"
                  borderRadius="6px"
                >
                  Salvar
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
