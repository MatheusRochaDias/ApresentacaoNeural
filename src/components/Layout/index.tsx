import { Box, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { NavBar } from '../NavBar';

interface layoutProps {
  children: ReactNode;
}

export function Layout({ children }: layoutProps) {
  const background = useColorModeValue('light.background', 'dark.background');
  return (
    <Box w="100%" bg={background} minH="100vh" pb="20px">
      <NavBar />
      <Box
        maxW="1200px"
        px={{ base: '10px', md: '40px' }}
        mx="auto"
        w={{ base: '95%', md: '95%', lg: '100%', xl: '85%' }}
        py="40px"
      >
        {children}
      </Box>
    </Box>
  );
}
