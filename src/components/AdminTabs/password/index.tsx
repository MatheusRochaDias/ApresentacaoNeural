import { Flex, Button, Box, useColorModeValue } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Input, VerifyPassword } from '@/components';

export default function PasswordTab() {
  const button = useColorModeValue('light.button', 'dark.button');
  const { register, watch } = useForm();

  return (
    <Box pt="20px">
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
  );
}
