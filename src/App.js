
import Add from "./Add"
import ListContextProvider from './contexts/ListContext';
import Navbar from './components/Navbar.';
import ListDisplay from "./components/ListDisplay";

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Navbar />
        <ListDisplay />
      </ListContextProvider>
      
     {/* <Add /> */}
    </div>
  );
}

export default App;
