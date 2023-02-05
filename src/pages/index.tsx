import { useState, useEffect } from 'react';
import DiffSlot from '../components/DiffSlot';
import Head from 'next/head';

import datajson from '../data/13_1B.json';

const Home = () => {
  const [data, setData] = useState(datajson);

  return (
    <>
      <Head>
        <title>LOLDIFF</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mt-8 flex justify-center">
        <h1 className="text-6xl font-bold text-white">LOLdiff</h1>
      </header>

      <main className="flex max-w-5xl flex-wrap justify-center">
      
      {data.Champions.map((champion) => (
        <DiffSlot
          key={champion.Name}
          champion={champion}
        />
      ))}
      </main>
    </>
  );
};

export default Home;