import { Component } from 'react';
import Container from '../Container';
import SearchBar from '../Searchbar';
import ImageGallery from '../ImageGallery';

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar></SearchBar>
        <ImageGallery></ImageGallery>
      </Container>
    );
  }
}

export default App;
