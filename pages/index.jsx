import Head from 'next/head'
import styles from '@/styles/Home.module.css';
import {GraphQLClient, gql} from 'graphql-request';

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clfh7d7rx0awl01ue235sa78t/master"
);

const QUERY = gql`
{
  posts{
    id,
    title,
    datePublished,
    slug,
    content {
      html
    }
    author{
      name,
      avatar{
        url
      }
    }
    coverPhoto{
      publishedAt{
        createdBy{
          id
        }
        url
      }
    }
  }
}
`

export default function Home() {

  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
      </main>
    </>
  )
}
