import {
  Text,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Modal as ChakraModal,
  ModalProps as ModalChakraModal,
  ModalCloseButton,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

interface ModalProps extends ModalChakraModal {
  title?: string;
  icon: string;
  padding?: string;
  size?: string | string[];
}

export function IconModal({
  children,
  title,
  isOpen,
  icon,
  onClose,
  padding,
  size = '400px',
  ...rest
}: ModalProps) {
  const card = useColorModeValue('light.card', 'dark.card');
  const text = useColorModeValue('light.text', 'dark.text');
  const border_modal = useColorModeValue(
    'light.border_modal',
    'dark.border_modal'
  );

  return (
    <ChakraModal isCentered isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />

      <ModalContent
        m={['10px', '10px', '0px', '0px']}
        maxW="max-content"
        minW={size}
      >
        {' '}
        <ModalHeader
          bg={card}
          borderTopRadius="6px"
          borderBottom="1px"
          borderColor={border_modal}
          fontSize="26px"
          fontWeight="600"
          padding={padding || ''}
        >
          <Flex gap={2} alignItems="center">
            <Icon icon={icon} width="28px" />
            <Text color={text} textAlign="center">
              {title}
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton
          size="sm"
          position="absolute"
          top={['0px', '0px', '-20px', '-20px']}
          right={['0px', '0px', '-20px', '-20px']}
        />
        <ModalBody
          bg={card}
          borderBottomRadius="6px"
          padding={padding || ''}
          p="20px"
        >
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}
