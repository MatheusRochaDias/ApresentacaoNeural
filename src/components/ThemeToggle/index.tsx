import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} size="sm">
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
