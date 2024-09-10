import './App.css';
import AppRoutes from './AppRoutes/AppRoutes';
import Main from './Main/Main';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
         <AppRoutes />
    </ChakraProvider>
  )
}

export default App;
