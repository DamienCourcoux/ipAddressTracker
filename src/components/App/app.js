import SearchBar from '../SearchBar/searchBar';
import Information from '../Information/information';
import Map from '../Map/map';
import Footer from '../Footer/footer';

import './app.css';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <Information />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
