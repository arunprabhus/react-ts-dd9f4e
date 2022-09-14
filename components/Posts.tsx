import React from 'react';
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <div>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Posts;
