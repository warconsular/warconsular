import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import ThemeToggleButton from './components/ThemeToggleButton';
import Navigation from './components/navigation';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <ColorModeProvider>
        <ChakraProvider>
          <ThemeToggleButton />
          <Navigation />
          <Description />
        </ChakraProvider>
      </ColorModeProvider>
    </div>
  );
}

export default App;