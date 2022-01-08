import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../../components/Header'
import FooterCustom from '../../../components/Footer/index';
import Detail from '../../../components/Detail/index';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giấy dán tường Hàn Quốc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Detail />
        <FooterCustom />
      </main>
    </div>
  )
}

export default Home