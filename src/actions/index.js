import * as actionTypes from '../utils/actionTypes';
import axios from 'axios' // API取得用

const ANIMELIST_API_URL = process.env.REACT_APP_ANIMELIST_API_URL

// 非同期取得操作
export const getAnimes = () => {
  return (dispatch) => {
    dispatch(getAnimesRequest());
    
    return axios.get(ANIMELIST_API_URL)
      .then(response => dispatch(getAnimesSuccess(response.data)))
      .catch(error => dispatch(getAnimesFailure(error)))
  };
};

export const getAnimesRequest = () => ({
  type: actionTypes.GET_ANIMES_REQUEST,
});

export const getAnimesSuccess = (json) => ({
  type: actionTypes.GET_ANIMES_SUCCESS,
  items: json,
});

export const getAnimesFailure = (error) => ({
  type: actionTypes.GET_ANIMES_FAILURE,
  error: error,
});