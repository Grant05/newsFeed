import { RECEIVE_TOPICS } from './actions';

const topicsReducer = (state = [], { type, data }) => {
  switch (type) {
    case RECEIVE_TOPICS:
      return data.data;
    default:
      return state;
  }
};

export default topicsReducer;
