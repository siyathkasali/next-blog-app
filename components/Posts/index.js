import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Table from '../Table';
import { getPosts } from '../../apis/posts';
import { postHeader } from '../../constants'

import styles from './Posts.module.scss';

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [goingDown, setGoingDown] = useState(false);

  useEffect(() => {
    if(currentPage <= 5) {
      onFetchPosts();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [goingDown]);


  const onFetchPosts = () => {

    setIsPostLoading(true);

    const params = {
      _page: currentPage + 1,
      _limit: 20,
    };

    getPosts(params).then(res => {
      setPosts([...posts, ...res]);
      setIsPostLoading(false);
      setCurrentPage(currentPage + 1);
    });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if ((window.innerHeight + currentScrollY) >= document.body.offsetHeight) {
      setGoingDown(true);
      setGoingDown(false);
    }
  };

  const renderPostColumn = (post) => (
    <Link
      key={post.id}
      href={{
        pathname: '/post/[postId]/',
        query: { postId: post.id, user: post.userId, },
      }}
    >
      <tr className={styles.tr}>
        <td className={styles.td}>{post.id}</td>
        <td className={styles.td}>{post.userId}</td>
        <td className={styles.td}>{post.title}</td>
      </tr>
    </Link>
  );

  return (
    <div className={styles.posts}>
      <Table
        tableHeader={postHeader}
        tableData={posts}
        renderTableColumn={renderPostColumn}
        lsLoading={isPostLoading}
      />
    </div>
  );
}
