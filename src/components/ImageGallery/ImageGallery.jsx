import ImageGalleryItem from 'components/ImageGalleryItem';
// import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ result }) => {  
    return (
      <ul className={s.ImageGallery}>        
            {result.map(({ id, webformatURL, largeImageURL, tags}) => (
                <ImageGalleryItem 
                        key={id}
                        web={webformatURL}
                        large={largeImageURL}
                        tags={tags}
                    />    
            ))}
        </ul>);
};

// ImageGallery.propTypes = {
//     visibleContacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,            
//         }))    
// };

export default ImageGallery;