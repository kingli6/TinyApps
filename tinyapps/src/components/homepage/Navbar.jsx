import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Memory Spelet', 'testapp2', 'testapp3'];

  const handleDropdownChange = (option) => {
    setSelectedOption(option.value);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          Home
        </Link>
        
        <div className="flex space-x-4">
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
