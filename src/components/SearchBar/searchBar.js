import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  createChangeInputValue,
} from '../../store/action';

import Arrow from '../../images/icon-arrow.svg';
import './searchBar.css';

function SearchBar() {
  const inputValue = useSelector((state) => state.inputValue);

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO mettre la requete de recherche ip (middleware)
  };

  const handleInputChange = (event) => {
    dispatch(createChangeInputValue(event.target.value));
  };

  return (
    <section className="searchBar">
      <h1 className="searchBar__title">IP Address Tracker</h1>
      <form 
        className='searchBar__form'
        onSubmit={handleFormSubmit}
      >
        <input 
          className='searchBar__form--input' 
          type="text"
          placeholder="Recherchez n'importe quelle adresse IP ou domaine"
          value={inputValue}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button 
          className='searchBar__form--button' 
          type="submit"
        >
          <img src={Arrow} alt="Flèche pour rechercher l'IP" />
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
