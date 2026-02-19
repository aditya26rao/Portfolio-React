import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '@fontsource/roboto/500.css';
import { ChakraProvider } from '@chakra-ui/react';

// Correct: use createRoot directly
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
