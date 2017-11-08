export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const REQUEST_SINGLE_ARTICLE = 'REQUEST_SINGLE_ARTICLE';

export const requestArticles = () => ({ type: REQUEST_ARTICLES });
export const receiveArticles = data => ({ type: RECEIVE_ARTICLES, data });
export const requestSingleArticle = payload => ({ type: REQUEST_SINGLE_ARTICLE, payload });
