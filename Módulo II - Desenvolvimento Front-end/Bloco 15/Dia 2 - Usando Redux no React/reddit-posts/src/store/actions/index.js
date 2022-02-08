import getSubredditPosts from '../../services/redditAPI';

// Actions types
export const GETTING_POSTS = 'GETTING_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

// Action Creators
export const gettingPosts = () => ({
  type: GETTING_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  posts,
});

export const getPostsFail = () => ({
  type: GET_POSTS_FAIL,
});

export const getPostsThunk = () => {
  return async (dispatch) => {
    dispatch(gettingPosts());
    try {
      const posts = await getSubredditPosts();
      dispatch(getPostsSuccess(posts.data.children));      
    } catch (error) {
      console.log(error);
      dispatch(getPostsFail());      
    }
  }
};