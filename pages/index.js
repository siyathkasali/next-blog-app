import Layout from '../components/globals/Layout';
import Posts from '../components/Posts';

function Home() {
  return (
    <Layout>
      <div className="home-container my-5">
        <Posts />
      </div>
    </Layout>
  )
}

export default Home;