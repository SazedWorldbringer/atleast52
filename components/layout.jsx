import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const title = 'At least 52'
const subTitle = 'Generative Artworks'
export const siteTitle = "At least 52 Generative Artworks 2023 | Atharva Pardeshi"

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        <meta name="description" content="Display of generative artworks by Atharva Pardeshi" />
        <meta name="og:image" content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
            <h2 className={utilStyles.headingXl} style={{ margin: '-1rem 0 2rem' }}>{subTitle}</h2>
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          {/*<Link href="/" className={utilStyles.colorInherit}>*/}
          <Link className={utilStyles.headingXl} href="/">
            {title}
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
