import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CMZCASINO1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src = "https://drive.google.com/uc?id=18i6_m7HzMEOPX9oTbnbiqt9jToQIxq4U&export=download" width={700} />
        <h1 className={styles.title}>
          MM88 <a href="https://lin.ee/5McV2on">CASINO1</a>
        </h1>

        <p className={styles.description}>
          เว็บตรง ระบบฝากถอนอัตโนมัติ 24 ชม.
        </p>
        <img src = "https://drive.google.com/uc?id=18i6_m7HzMEOPX9oTbnbiqt9jToQIxq4U&export=download" width={500} />
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
