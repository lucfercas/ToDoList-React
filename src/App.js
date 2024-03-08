import ListContextProvider from "./contexts/ListContext";
import Navbar from "./components/Navbar.";
import ListDisplay from "./components/ListDisplay";
import AddItemFrom from "./components/AddItemForm";

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <Navbar />
        <ListDisplay />
        <AddItemFrom />
      </ListContextProvider>

      {/* <Add /> */}
    </div>
  );
}
export default App;
