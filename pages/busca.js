import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home({list}) {
    const [ searchText, setSearchText ] = useState('');

    const handleSearch = async () => {
        if (searchText !== '') {

        }
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca
        </h1>

        <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} />
        <button onClick={handleSearch}>Buscar</button>
      </main>

    </div>
  )
}
