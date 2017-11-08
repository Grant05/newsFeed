import { RECEIVE_ARTICLES } from './actions'

const articlesReducer = (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_ARTICLES:
      return data.data;
    default:
      return state;
  };
};

export default articlesReducer
