import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, alt }) => {
  return (
    <li className={s.item}>
      <img className={s.image} src={image} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
