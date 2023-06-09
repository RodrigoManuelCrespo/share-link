import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Metadata {
  title: string;
  description: string;
  image: string;
  // Agrega otras propiedades de metadata si las tienes
}

const MyPage = ({ metadata }: { metadata: Metadata }) => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('http://localhost:19006/nft?type=nft&id=0xeb0c72328771ee802d2c052531478ecef755e39916');
    }, 0);

    return () => clearTimeout(redirectTimer); // Limpia el temporizador al desmontar el componente
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        {/* ... otras metadatas que necesites ... */}
      </Head>
      {/* Resto del contenido de la página */}
    </>
  );
};

export async function getServerSideProps() {
  // Realizar la solicitud HTTP al servidor para obtener los datos de las metadatas
  // const response = await axios.get('https://api.example.com/metadata');
  const response = {
    description: "Works of great realism, inspired by a dystopian Japanese anime",
    image: "https://ipfs.io/ipfs/QmfQE6WQJjB5Z8mEJxVSVZjDYfgHVYZBUYzjRyX4fPck5U",
    title: "Illustrations of Japan"
  }

  // Extraer los datos de las metadatas de la respuesta
  const metadata: Metadata = response;

  // Devolver los datos como prop para el componente
  return {
    props: {
      metadata
    }
  };
}

export default MyPage;
