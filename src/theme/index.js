import { extendTheme } from '@chakra-ui/react';

// Global style overrides
// import styles from "./styles"
// Foundational style overrides
// import borders from "./foundations/borders"
// Component style overrides
import Button from './button';
import Input from './input';

const theme = {
  // styles,
  // borders,
  // Other foundational style overrides go here
  components: {
    Button,
    Input,
    // Other components go here
  },
};
export default extendTheme(theme);
