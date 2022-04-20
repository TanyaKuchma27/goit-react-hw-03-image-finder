import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal';

class ImageGalleryItem extends Component {
  static propTypes = {
    web: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,     
  };
  
  state = {    
    showModal: false    
  };

  render() {
    const { web, tags, large } = this.props;
    return (
    <li className={s.ImageGalleryItem}>
      <img
          src={web}
          alt={tags}
          className={s.ImageGalleryItemImage}
          onClick={() => { this.setState({ showModal: true }) }}
      />
      {this.state.showModal && <Modal modalPhoto={large} alt={tags} onClose={() => { this.setState({ showModal: false }) }}/>}
    </li>);
  }  
};

export default ImageGalleryItem;