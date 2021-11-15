import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wellness DAO</title>
        <meta name="description" content="A DAO dedicated to providing and normalizing Mental Health Care as a Public Good" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://wellnessdao.xyz">Wellness DAO!</a>
        </h1>

        <p className={styles.description}>
          We are Normalizing and Publicizing{' '}
          <code className={styles.code}>Healthcare/Mental.js</code>
        </p>

        <div className={styles.grid}>
        <a href="https://checkpoint.carrd.co/" className={styles.card}>
          <h2>Get Help Now &rarr;</h2>
          <p>Access free resources today.</p>
        </a>

        <a
          href="https://t.me/joinchat/VVzBgaurKJUyMjZh"
          className={styles.card}
        >
        <h2>Contact Us &rarr;</h2>
        <p> 
          Contact the Wellness DAO instantly and anonymously.
        </p>
        </a>

        <a
         href="https://t.me/joinchat/VVzBgaurKJUyMjZh"
         className={styles.card}
         >
        <h2>Join Us &rarr;</h2>
        <p>Discover more in our Telegram. Free. Anonymous.</p>
        </a>

        <a href="https://twitter.com/wellness_dao" className={styles.card}>
        <h2>Twitter &rarr;</h2>
        <p>Follow us for daily updates and motivations.</p>
          </a>
  
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://jcstein.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/jcs.svg" alt="jcs.sol Logo" width={44} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
