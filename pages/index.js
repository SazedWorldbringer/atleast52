import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/artworks.js'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Matt Pearson&apos;s <Link href="https://zenbullets/abandonedart">100 Abandoned Artworks</Link> inspired this project.
          I will post at least one artwork a week, more if I can manage
        </p>
      </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
     <h2 className={utilStyles.headingLg}>Artworks</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
    </section>
    </Layout>
  );
}
