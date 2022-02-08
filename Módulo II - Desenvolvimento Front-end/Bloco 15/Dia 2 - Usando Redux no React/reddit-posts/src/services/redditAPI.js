const getSubredditPosts = async (subreddit = 'reactjs') => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const posts = await response.json();
  return posts;
};

export default getSubredditPosts;