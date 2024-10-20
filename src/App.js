import AppRoutes from "./AppRoutes/AppRoutes";
import Navbar from "./Main/Components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Sidebar from "./Main/Components/sidebar/Sidebar";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="navbar-container">
          <Navbar />
        </div>

        <div className="app-body" id="app-body">
          <AppRoutes />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
