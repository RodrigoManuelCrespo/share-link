import axios from 'axios';
import { headers } from 'next/dist/client/components/headers';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

interface Metadata {
  title: string;
  description?: string;
  image: string;
}

const MyPage = ({ metadata }: { metadata: Metadata }) => {
  const router = useRouter();

  useEffect(() => {
    if (isMobile) {
      window.location.href = `${process.env.CLIENT}://share?type=${router.query.type}&id=${router.query.id}`;
    }

    router.push(`${process.env.CLIENT_URL}share?type=${router.query.type}&id=${router.query.id}`);
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
      </Head>
    </>
  );
};


export async function getServerSideProps(context: any) {
  const { query } = context;
  const { id, blockchain, network, type } = query;
  const headers = { headers: { wallet: process.env.CLIENT_ID || "" } }
  let url = process.env.API_URL || ""

  switch (type) {
    case 'nft': url = `${process.env.API_URL}api/${blockchain}/${network}/nft/${id}`
      break;
    case 'post': url = `${process.env.API_URL}api/posts/${id}`
      break;
    default:
      break;
  }

  const response = await axios(url, headers)

  const metadata: Metadata = {
    title: response.data.metadata.name || "",
    description: response.data.metadata.description || "",
    image: response.data.metadata.image || "",
  }

  return {
    props: {
      metadata: metadata,
    }
  };
}

export default MyPage;

