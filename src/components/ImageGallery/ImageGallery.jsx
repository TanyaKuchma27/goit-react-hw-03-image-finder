import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ result }) => {  
    return (
        <ul className={s.ImageGallery}>        
            {result.map(({ webformatURL, largeImageURL, tags}, index) => (
                <ImageGalleryItem 
                    key={index}
                    web={webformatURL}
                    large={largeImageURL}
                    tags={tags}                    
                />    
            ))}
        </ul>);
};

ImageGallery.propTypes = {
    result: PropTypes.arrayOf(PropTypes.object.isRequired),    
};

export default ImageGallery;