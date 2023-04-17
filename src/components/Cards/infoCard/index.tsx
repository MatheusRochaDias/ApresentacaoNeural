import { Flex, useColorModeValue, Text } from '@chakra-ui/react';

interface infoCardProps {
  text: string;
  number: number | string;
}
export default function InfoCard({ text, number }: infoCardProps) {
  const card = useColorModeValue('light.card', 'dark.card');
  const subtitle = useColorModeValue('light.subtitle', 'dark.subtitle');
  const title = useColorModeValue('light.title', 'dark.title');
  return (
    <Flex
      px="30px"
      flexDir="column"
      bg={card}
      borderRadius="8px"
      h="120px"
      justifyContent="center"
      gap={2}
    >
      <Text fontWeight={700} color={title} fontSize="22px">
        {number}
      </Text>
      <Text fontSize="18px" color={subtitle}>
        {text}
      </Text>
    </Flex>
  );
}
