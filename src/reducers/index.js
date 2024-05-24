import { combineReducers } from 'redux';
import AnimeListReducer from './AnimeListReducer';

const reducer = combineReducers({
  AnimeListReducer: AnimeListReducer,
});

export default reducer;