import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    searchQuery: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      const PUBLIC_URL = 'https://pixabay.com/api/';
      const KEY = '19018418-5cf416ff9d3b144c810bafa25';
      const url = `${PUBLIC_URL}?q=${this.props.searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

      fetch(url)
        .then(response => response.json())
        .then(response => this.setState({ searchQuery: response }));
    }
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        {searchQuery && (
          <ul className={s.list}>
            {searchQuery.hits.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem key={id} image={webformatURL} alt={tags} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
