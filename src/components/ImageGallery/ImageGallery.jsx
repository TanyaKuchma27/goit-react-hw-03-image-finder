import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ result, setModalPhoto, openModal }) => {  
    return (
        <ul className={s.ImageGallery}>        
            {result.map(({ id, webformatURL, largeImageURL, tags}) => (
                <ImageGalleryItem 
                    key={id}
                    web={webformatURL}
                    large={largeImageURL}
                    tags={tags}
                    setModalPhoto={setModalPhoto}
                    openModal={openModal}
                />    
            ))}
        </ul>);
};

ImageGallery.propTypes = {
    result: PropTypes.arrayOf(PropTypes.object.isRequired),
    setModalPhoto: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGallery;