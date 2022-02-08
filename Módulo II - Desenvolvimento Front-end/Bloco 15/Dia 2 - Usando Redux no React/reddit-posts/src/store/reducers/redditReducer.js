import { GETTING_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from '../actions';

const INITIAL_STATE = {
  loading: false,
  error: '',
  data: [],
};

const redditReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case GETTING_POSTS:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
    return {
      ...state,
      loading: false,
      error: '',
      data: [...actions.posts],
    };
    case GET_POSTS_FAIL:
    return {
      ...state,
      loading: false,
      error: 'Você pode conferir o que deu errado no console',
    };
    default:
      return state;
  }
}

export default redditReducer;