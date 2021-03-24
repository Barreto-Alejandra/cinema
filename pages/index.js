import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque
        </h1>

        <Link href="/busca">Ir para a busca</Link>

        <ul>
          {list.map(item=>(
            <li>
              <a href={`/movie/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /> <br/>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </main>

    </div>
  )
}

//quando a gente exporta isso fica sendo renderizado com "server side rendering"
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  };
}