import * as React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import HomePage from '../../components/HomePage/index';
import FooterCustom from '../../components/Footer/index';
import { useRouter } from 'next/dist/client/router';

const Home: NextPage = () => {
  const router = useRouter()
  const { type } = router.query;

  const [group, setGroup] = React.useState()

  const fetchPapers = () => {
    fetch(`https://admin.hainn.dev/groups/${type}`, {
      method: 'GET'
    }).then(ress => ress.json())
      .then(res => {
        setGroup(res.group)
      })
      .catch(err => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    if (type) {
      fetchPapers()
    }
  }, [type])

  return (
    <div>
      <Head>
        <title>GIẤY DÁN TƯỜNG HÀN QUỐC</title>
        <meta name="description" content="GIẤY DÁN TƯỜNG ĐẸP, Giấy dán tường Hàn Quốc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <HomePage group={group} />
        <FooterCustom />
      </main>
    </div>
  )
}

export default Home
