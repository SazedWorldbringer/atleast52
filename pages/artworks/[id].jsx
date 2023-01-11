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
  const postData = await getPostData(params.id);

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
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export default Artwork
