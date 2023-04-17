import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Flex,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
// import { FieldError } from 'react-hook-form';

interface IInputProps extends ChakraInputProps {
  name: string;
  iconColor?: string;
  labelColor?: string;
  bgHover?: string;
  bgFocus?: string;
  bgPlaceholder?: string;
  label?: string;
  error?: any;
  search?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  {
    name,
    iconColor,
    bgHover,
    bgFocus,
    bgPlaceholder,
    label,
    error = null,
    search,
    ...rest
  },
  ref
) => {
  const [visible, setVisible] = useState(false);
  const backgroundInput = useColorModeValue('light.input', 'dark.input');
  const labelInput = useColorModeValue(
    'light.input_header',
    'dark.input_header'
  );

  return (
    <Box pos="relative">
      <FormControl isInvalid={!!error}>
        {!!label && (
          <FormLabel htmlFor={name} color={labelInput}>
            {label}
          </FormLabel>
        )}
        <ChakraInput
          pr={rest.type === 'password' ? '35px' : ''}
          name={name}
          id={name}
          fontSize="14px"
          variant="filled"
          bg={backgroundInput}
          _hover={{
            bg: bgHover,
          }}
          borderColor="#363C4F"
          borderRadius="4px"
          border="1px"
          _focus={{
            bg: bgFocus,
          }}
          _placeholder={{
            color: bgPlaceholder,
          }}
          ref={ref}
          {...rest}
          type={
            rest.type === 'password'
              ? visible
                ? 'text'
                : 'password'
              : rest.type
          }
        />
        {rest.type === 'password' && (
          <Flex position="absolute" right="10px" top={error ? '53%' : '60%'}>
            <Icon
              width="20px"
              cursor="pointer"
              color={iconColor || '#444'}
              onClick={() => setVisible((previous) => !previous)}
              icon={
                visible ? 'ant-design:eye-invisible-outlined' : 'akar-icons:eye'
              }
            />
          </Flex>
        )}
        {search && (
          <Flex position="absolute" right="10px" top={error ? '53%' : '20%'}>
            <Icon width="20px" cursor="pointer" icon="ic:baseline-search" />
          </Flex>
        )}
        {!!error && (
          <FormErrorMessage mb="5px">{error.message}</FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );
};

export const Input = forwardRef(InputBase);
