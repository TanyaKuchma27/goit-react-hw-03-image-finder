// import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = () => {
    return (
        <button type="button" className={s.Button}>
            Load more            
        </button>);
};

// ContactItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,        
//     onDeleteContact: PropTypes.func.isRequired,
// };

export default Button;