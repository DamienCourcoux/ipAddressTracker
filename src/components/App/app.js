import SearchBar from '../SearchBar/searchBar';
import Information from '../Information/information';
import Map from '../Map/map';

import './app.css';

function App() {
  return (
    <div className="App">
      ip address tracker
      <SearchBar />
      <Information />
      <Map />
    </div>
  );
}

export default App;
