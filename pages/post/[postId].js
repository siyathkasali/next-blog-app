import { useRouter } from 'next/router';
import Layout from '../../components/globals/Layout';
import PostInfo from '../../components/postInfo';

export default function Post() {
  const router = useRouter()
  const userId = router.query.user;
  const postId = router.query.postId;

  return (
    <Layout>
      <div className="home-container my-5">
        <PostInfo userId={userId} postId={postId} />
      </div>
    </Layout>
  );
}
