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
  };

  hadleSubmit = queryValue => {
    this.setState({ searchQuery: queryValue.toLowerCase() });
  };

  notify = message => {
    toast.warn(message, { className: `${s.notify}` });
  };

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.hadleSubmit} notify={this.notify}></SearchBar>
        <ImageGallery
          searchQuery={this.state.searchQuery}
          notify={this.notify}
        ></ImageGallery>
        <ToastContainer autoClose={4500} style={{ width: '700px' }} />
      </Container>
    );
  }
}

export default App;
