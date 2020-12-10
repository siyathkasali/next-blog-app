import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Post from './components/postCard';
import UserInfo from './components/userInfoCard';

import { getPost } from '../../apis/post';
import { getUserDetails } from '../../apis/users';

import './PostInfo.module.scss';
import Loader from '../Loader';

export default function PostInfo(props) {
  const { userId, postId } = props;
  const [postDetails, setPostDetails] = useState({});
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    getPost(postId).then(res => {
      setPostDetails(res);
    });

    const userParams = { id: userId };

    getUserDetails(userParams).then(res => {
      setUserDetails(res);
    });
  }, []);


  return (
    <div className="post-info">
      {
        (Object.keys(postDetails).length === 0 || userDetails.length < 0) ? <Loader /> :
        <>
          <Post postDetails={postDetails} />
          { userDetails.length ? <UserInfo userDetails={userDetails} /> : null }
        </>
      }
    </div>
  );
}

PostInfo.propTypes = {
  userId: PropTypes.string,
  postId: PropTypes.string,
};
