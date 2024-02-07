import { Link } from 'react-router-dom';

const BrowseAppsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Browse Apps</h2>
        <div className="flex justify-center space-x-4">
          <Link to="/work-clock" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Workout-Clock
          </Link>
          <Link to="/memory-game" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Memory
          </Link>
          <Link to="/reactBasics" className="bg-yellow-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            WebPageTemplate
          </Link>
          {/* Add more buttons for other apps as needed */}
        </div>
      </div>
    </section>
  );
};

export default BrowseAppsSection;
