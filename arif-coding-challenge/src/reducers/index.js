import { SELECT_COUNTRY, REQUEST_DEVICES, RECEIVE_DEVICES, FILTER_DEVICES } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return { ...state, country: action.country };
    case REQUEST_DEVICES:
      return { ...state, loading: true };
    case RECEIVE_DEVICES:
      return { ...state, json: action.json, loading: false };
	 case FILTER_DEVICES:
		return { ...state, country: action.country, loading: false};
    default:
      return state;
  }
};

export default reducer;
