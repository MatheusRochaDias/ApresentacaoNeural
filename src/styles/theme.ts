import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  colors: {
    light: {
      primary: '#826AF9',
      secondary: '#3498db',
      background: '#F8F8FB',
      text: '#61696D',
      button: '#485EC4',
      input: '#ffffff',
      input_header: '#61696D',
      header_background: '#F8F8FB',
      header_background_hover: '#556EE6',
      navbar_background: '#556EE6',
      navbar_icons: '#B5BEF3',
      navbar_selected: '#ffffff',
      card: '#FFFFFF',
      card_border: '#E5E5E5',
      text_area_border: '#E5E5E5',
      tab: '#A6B0CF',
      tab_selected: '#485EC4',
      table_header: '#D4DBF9',
      border_modal: '#E5E5E5',
      border: '#E5E5E5',
      title: '#61696D',
      subtitle: '#78788D',
      client_box: '#FFFFFF',
    },
    dark: {
      primary: '#FFFFFF',
      secondary: '#3498db',
      background: '#212735',
      text: '#FFFFFF',
      button: '#485EC4',
      input: '#252B3B',
      input_header: '#ffffff',
      header_background: '#2A2F42',
      header_background_hover: '#212735',
      navbar_background: '#363C4F',
      navbar_icons: '#ffffff',
      navbar_selected: '#556EE6',
      card: '#252B3B',
      card_border: '#252B3B',
      text_area_border: '#363C4F',
      tab: '#A6B0CF',
      tab_selected: '#FFFFFF',
      table_header: '#2A3042',
      border_modal: '#363C4F',
      border: '#363C4F',
      title: '#FFFFFF',
      subtitle: '#A6B0CF',
      client_box: '#2A3042',
    },
  },
});
