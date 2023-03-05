import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'import/styles/Home.module.css'
import Featured from 'import/components/Featured'
import ProductList from 'import/components/ProductList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurant App</title>
        <meta name="description" content="Best Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList />

    </>
  )
}
