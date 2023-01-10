import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
    </Layout>
  );
}
