import { useContext } from "react";


const Navbar = () => {
  const { items } = useContext(ListContext);
  return (
    <div className="navbar">
      <h1 className="text-l font-bold underline">React ToDo List</h1>
      <p>Currently you have {items.length} things to do...</p>
    </div>
  );
};

export default Navbar;
