import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container';
import SearchBar from '../Searchbar';
import ImageGallery from '../ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
  };

  hadleSubmit = searchQuery => {
    this.setState({ searchQuery: searchQuery.toLowerCase() });
  };

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.hadleSubmit}></SearchBar>
        <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
        <ToastContainer autoClose={4500} style={{ width: '700px' }} />
      </Container>
    );
  }
}

export default App;
