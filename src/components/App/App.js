import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import Container from '../Container';
import SearchBar from '../Searchbar';
import ImageGallery from '../ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
  };

  hadleSubmit = queryValue => {
    this.setState({ searchQuery: queryValue.toLowerCase() });
  };

  notify = message => {
    toast.warn(message, { className: `${s.notify}` });
  };

  render() {
    const { searchQuery, page } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.hadleSubmit} notify={this.notify} />
        <ImageGallery
          searchQuery={searchQuery}
          page={page}
          notify={this.notify}
        />
        <ToastContainer autoClose={4500} style={{ width: '700px' }} />
      </Container>
    );
  }
}

export default App;
