import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <p>Mi boletera</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        value={search}
      />
    </div>
  );
};

export default Navbar;
