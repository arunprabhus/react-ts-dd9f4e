import React, { FC, useEffect, useState } from 'react';

import './style.css';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchP = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchP();
  }, []);

  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const cPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (page) => setPage(page);

  console.log(indexOfFirstPost);
  console.log(postPerPage);
  console.log(cPosts);
  console.log(posts.length);
  console.log(indexOfLastPost);
  console.log(page);

  return (
    <div>
      <h1>Welcome to Counter</h1>
      <Posts posts={cPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
