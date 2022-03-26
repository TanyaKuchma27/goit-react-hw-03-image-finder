// import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({web, large, tags}) => {
    return (
      <li className={s.ImageGalleryItem}>
        <img src={web} alt={tags} className={ s.ImageGalleryItemImage}/>
            
      </li>);
};

// ContactItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,        
//     onDeleteContact: PropTypes.func.isRequired,
// };

export default ImageGalleryItem;