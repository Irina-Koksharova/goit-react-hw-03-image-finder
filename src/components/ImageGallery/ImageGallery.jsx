import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className={s.imageGallery}>
      <ImageGalleryItem></ImageGalleryItem>
    </ul>
  );
};

export default ImageGallery;
