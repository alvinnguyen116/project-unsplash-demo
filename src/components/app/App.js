import React, {useState} from 'react';
import './App.scss';
import Search from '../search/search';
import Photos from "../photos/photos";
import fetchPhotos from '../../redux/actions/dispatchPhotos';
import {connect} from 'react-redux';
import {CSSTransition} from "react-transition-group";

function App({photos, dispatch}) {
  const PHOTO_LENGTH = 12;
  const [photoLimit, setPhotoLimit] = useState(PHOTO_LENGTH);
  const [firstSearch, setFirstSearch] = useState(true);

  const handleKeyUp = e => {
    if (firstSearch) setFirstSearch(false);
    try {
      dispatch(fetchPhotos(e.target.value));
      setPhotoLimit(PHOTO_LENGTH);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLastRow = () => {
    setPhotoLimit(photoLimit + PHOTO_LENGTH);
  };

  let style = {
    'top': '50px'
  };
  if (firstSearch) {
    style = {
      'top': '50%'
    }
  }

  return (
      <main>
        <div className={"query-container"} style={style}>
          <Search handleKeyUp={handleKeyUp} firstSearch={firstSearch}/>
        </div>
        <CSSTransition in={!firstSearch} timeout={500} classNames={'photos'}>
          <Photos photos={photos.slice(0,photoLimit)} handleLastRow={handleLastRow}/>
        </CSSTransition>
      </main>

  );
}

const mapPropsToState = (state) => {
  return {
    photos: state.photos.photos
  }
};

export default connect(mapPropsToState)(App);
