import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeForm = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    if (searchQuery.trim() === '') {
      toast.warn(
        'Incorrect query! Please enter your request in the correct form.',
        {
          className: `${s.notify}`,
        },
      );
      return;
    }
    this.props.onSubmit(searchQuery);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      searchQuery: '',
    });
  };

  render() {
    return (
      <header className={s.container}>
        <form className={s.form} onSubmit={this.handleSubmitForm}>
          <button type="submit" className={s.button}>
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className={s.input}
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeForm}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
