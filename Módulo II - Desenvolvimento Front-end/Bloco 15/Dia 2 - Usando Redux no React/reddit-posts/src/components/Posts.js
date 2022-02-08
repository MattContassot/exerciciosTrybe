import React from 'react';
import { connect } from 'react-redux';
import { getPostsThunk } from '../store/actions';

class Posts extends React.Component {
  componentDidMount() {
    const { getPostsProp } = this.props;
    getPostsProp();
  }

  render() {
    const { loading, error, data } = this.props;

    if(loading) return <p>Carregando...</p>;
    if(error !== '') return <p>{ error }</p>;
    else {
      return (
        data.map((post, index) => (<p key={index}>{post.data.title}</p>))
      );
    }
  }
}

const mapStateToProps = (state) => ({
  loading: state.redditReducer.loading,
  error: state.redditReducer.error,
  data: state.redditReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPostsProp: () => dispatch(getPostsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);