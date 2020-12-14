import { Component } from 'react';
import s from './ImageGallery.module.css';
import Spinner from '../Loader';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

class ImageGallery extends Component {
  state = {
    searchQuery: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, notify } = this.props;
    const PUBLIC_URL = 'https://pixabay.com/api/';
    const KEY = '19018418-5cf416ff9d3b144c810bafa25';
    const url = `${PUBLIC_URL}?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const clientError =
      'Sorry, the service cannot process your request😨. Try again, please';
    const serverError =
      'Sorry, there are some technical problems 😱😱😱. Please, try again later';

    if (searchQuery !== prevProps.searchQuery) {
      this.setState({ status: 'pending' });

      if (searchQuery !== '') {
        fetch(url)
          .then(response => response.json())
          .then(response => {
            this.setState({ status: 'resolved', searchQuery: response });
            if (this.state.searchQuery.hits.length === 0) {
              notify(clientError);
            }
          })
          .catch(error => {
            this.setState({ status: 'rejected' });
            notify(serverError);
          });
      } else {
        this.setState({ status: 'rejected' });
        return;
      }
    }
  }

  render() {
    const { searchQuery, status } = this.state;

    if (status === 'idle' || status === 'rejected') {
      return <></>;
    }

    if (status === 'pending') {
      return <Spinner />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.list}>
            {searchQuery.hits.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem key={id} image={webformatURL} alt={tags} />
            ))}
          </ul>
          <Button />
        </>
      );
    }
  }
}

export default ImageGallery;
