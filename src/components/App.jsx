import React, { Component } from 'react';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import photoAPI from '../services/photoApi';
import Searchbar from './Searchbar';
import Button from './Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';

class App extends Component {
  state = {
    photo: '',
    result: [],
    isLoading: false,
    page: 1
  };

  componentDidUpdate(prevProps, prevState) {
    const {photo} = this.state;
    const prevPhoto = prevState.photo;    

    if (photo !== prevPhoto) {
      this.setState({ isLoading: true, page: 1 });
      setTimeout(() => {
        photoAPI
          .fetchPhoto(photo)
          .then(data => this.setState({ result: data.hits, isLoading: false }))         
      },2000);
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
  }

  render() {
    const { result, isLoading} = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery result={result} />
        {result.length > 0 && !isLoading && <Button onClick={this.handleLoadMore}/>}
        {isLoading && <Loader />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
};

export default App;