import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';

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
        <div className="flex items-center">
          <Link to="/" className="text-yellow-300 font-bold text-lg mr-4">
            <Dropdown
              o
              ptions={options}
              onChange={handleDropdownChange}
              value={selectedOption}
              placeholder="TinyApps"
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/login" className="text-white">
            Empty
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
