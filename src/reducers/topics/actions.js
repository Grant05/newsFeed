export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';

export const requestTopics = () => ({ type: REQUEST_TOPICS });
export const receiveTopics = data => ({ type: RECEIVE_TOPICS, data });
