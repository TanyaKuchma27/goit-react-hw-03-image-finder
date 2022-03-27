import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import photoAPI from '../services/photoApi';
import s from './App.module.css';

class App extends Component {
  state = {
    photo: '',
    result: [],
    isLoading: false,
    page: 1,
    modalPhoto: '',
    showModal: false
  };

  componentDidUpdate(prevProps, prevState) {
    const {photo} = this.state;
    const prevPhoto = prevState.photo;    

    if (photo !== prevPhoto) {
      this.setState({ isLoading: true, page: 1 });
        photoAPI
          .fetchPhoto(photo)
          .then(data => this.setState({ result: data.hits, isLoading: false }))      
    }
  }

  handleFormSubmit = photo => {
    this.setState({ photo });
  };

  handleLoadMore = () => {
    this.setState({
      isLoading: true,
      page: this.state.page + 1
    })
    photoAPI
      .fetchPhoto(this.state.photo, this.state.page + 1)
      .then(data => this.setState({ result: [...this.state.result, ...data.hits], isLoading: false }));
  };

  setModalPhoto = modalPhoto => {
    this.setState({ modalPhoto });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

   render() {
     const { photo, result, isLoading, showModal, modalPhoto } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          result={result}
          setModalPhoto={this.setModalPhoto}
          openModal={this.toggleModal}
        />
        {result.length > 0 && !isLoading && <Button onClick={this.handleLoadMore}/>}
        {isLoading && <Loader />}
        {showModal && <Modal photo={photo} modalPhoto={modalPhoto} onClose={this.toggleModal}/>}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
};

export default App;