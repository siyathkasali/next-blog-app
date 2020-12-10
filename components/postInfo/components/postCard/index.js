import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.module.scss';

const Post = ({ postDetails }) => {
  const { title, body } = postDetails;

  return (
    <div className={styles.post}>
      <div className={styles.postTitle}>{title}</div>
      <div>
        <p className={styles.postDescription}><strong>Description</strong></p>
        <p className={styles.postBody}>{body}</p>
      </div>
    </div>
  )
}

Post.propTypes = {
  postDetails: PropTypes.object,
};

export default Post;
