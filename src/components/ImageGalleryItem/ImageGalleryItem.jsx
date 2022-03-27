import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({web, large, tags, setModalPhoto, openModal}) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={web}
        alt={tags}
        className={s.ImageGalleryItemImage}
        onClick={() => {
          setModalPhoto(large)
          openModal()          
        }}   
      />    
    </li>);
};

ImageGalleryItem.propTypes = {
  web: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setModalPhoto: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,  
};

export default ImageGalleryItem;