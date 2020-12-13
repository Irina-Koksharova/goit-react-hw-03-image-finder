import { Component } from 'react';
import s from './Searchbar.module.css';

class SearchBar extends Component {
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm}>
          <button type="submit" className={s.searchFormButton}>
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
