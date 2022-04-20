import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
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
    showModal: false,
    end: false
  };

  async componentDidUpdate(_, prevState) {
    const {photo, page} = this.state;
    const prevPhoto = prevState.photo; 
    const prevPage = prevState.page;    

    if (photo !== prevPhoto || page !== prevPage) {
      this.setState({ isLoading: true });
      try {
        const result = await photoAPI.fetchPhoto(photo, page);
        const photos = result.hits;
        const totalHits = result.totalHits;
        const maxPage = Math.ceil(totalHits / 12);        

        if (totalHits === 0) {
          toast.error('Sorry, there are no images matching your search query. Please try again.');
          return;
        };
                
        if (maxPage === 1) {
          this.setState({ result: photos, end: true });
          toast("We're sorry, but you've reached the end of search results.");
          return
        };

        if (maxPage === this.state.page) {
          this.setState({ result: [...this.state.result, ...photos], end: true });
          toast("We're sorry, but you've reached the end of search results.");
          return;          
        };

        this.setState({ result: [...this.state.result, ...photos], end: false });
      } catch(error) {
          console.log(error);
      } finally {
        this.setState({isLoading: false });        
      };   
    }
  }

  handleFormSubmit = photo => {
    this.setState({
      photo: photo,
      page: 1,
      result: []
    })
  };

  handleLoadMore = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }    

  setModalPhoto = modalPhoto => {
    this.setState({ modalPhoto });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { photo, result, isLoading, showModal, modalPhoto, end } = this.state;
   
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          result={result}
          setModalPhoto={this.setModalPhoto}
          openModal={this.toggleModal}
        />
        {result.length > 0 && !isLoading && !end && <Button onClick={this.handleLoadMore}/>}
        {isLoading && <Loader />}
        {showModal && <Modal photo={photo} modalPhoto={modalPhoto} onClose={this.toggleModal}/>}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
};

export default App;