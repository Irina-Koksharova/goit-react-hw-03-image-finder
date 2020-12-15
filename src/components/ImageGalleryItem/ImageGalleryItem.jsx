import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, alt, id }) => {
  return (
    <li className={s.item} id={id}>
      <img className={s.image} src={image} alt={alt} id={id} />
    </li>
  );
};

export default ImageGalleryItem;
