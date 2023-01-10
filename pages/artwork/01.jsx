import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

const whatIsThis = () => {
  return (
    <Layout>
      <Head>
        <title>Artwork 01</title>
      </Head>

      <h1>What even is this? How did I make this?!</h1>
      <h2>
        <Link href="/">Back home</Link>
      </h2>
    </Layout>
  )
}

export default whatIsThis
