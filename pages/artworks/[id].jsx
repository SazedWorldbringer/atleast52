import Image from "next/image";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/artworks";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    }
  }
}

const Artwork = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      <Image
        priority
        src={postData.preview}
        alt={postData.title}
        width={300}
        height={300}
      />
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export default Artwork
