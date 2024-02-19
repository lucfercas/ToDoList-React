
import Add from "./Add"
import ListContextProvider from './contexts/ListContext';
import Navbar from './components/Navbar.';

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Navbar />


      </ListContextProvider>
      
     {/* <Add /> */}
    </div>
  );
}

export default App;
