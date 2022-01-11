import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  createChangeInputValue,
  createSearchIpAddress,
} from '../../store/action';

import Arrow from '../../images/icon-arrow.svg';
import './searchBar.css';

function SearchBar() {
  const inputValue = useSelector((state) => state.inputValue);
  const isLoad = useSelector((state) => state.isLoad);

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(createSearchIpAddress());
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
          placeholder="Recherchez n'importe quelle adresse IP"
          value={inputValue}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button 
          className='searchBar__form--button' 
          type="submit"
          onClick={handleFormSubmit}
        >
          {
            isLoad
            ? <div id="circleSpinner"></div>
            : <img src={Arrow} alt="Flèche pour rechercher l'IP" />
          }
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
