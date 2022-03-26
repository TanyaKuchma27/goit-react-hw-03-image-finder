import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';


class Searchbar extends Component {
    state = {
        photo: '',
    };

    handlePhotoChange = event => {
        this.setState({ photo: event.currentTarget.value.toLowerCase() });          
    };

    handleSubmit = event => {
    event.preventDefault();

    if (this.state.photo.trim() === '') {
        toast.error('Please, enter data');        
        return;
    }

    this.props.onSubmit(this.state.photo);
    this.setState({ photo: '' });
  };

  render() {
      return (
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={s.SearchFormButton}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 20 }}/>
                    <span className={s.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={s.SearchFormInput}
                    type="text"
                    name="photo"
                    value={this.state.photo}
                    onChange={this.handlePhotoChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
  }
}

export default Searchbar;