/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import './App.css';
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <FormControl>
          <FormLabel> Email address </FormLabel>
          {' '}
          <Input type="email" variant="flushed" />
          <FormHelperText> We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel> First name </FormLabel>
          <Input variant="flushed" placeholder="First name" />
        </FormControl>
        <FormControl>
          <FormLabel> Country </FormLabel>
          <Select variant="flushed" placeholder="Select country">
            <option> United Arab Emirates </option>
            <option> Nigeria </option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel> Text in textarea </FormLabel>
          <Textarea variant="outlined" resize="none" placeholder="Here is a sample placeholder" />
        </FormControl>
      </div>
      <Stack spacing={4} direction="row" align="center">
        <Button>
          Button
        </Button>
      </Stack>
    </div>
  );
}

export default App;
