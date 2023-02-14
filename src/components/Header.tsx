import Head from 'next/head';
import { useState } from 'react';

export const Header =(props: any) => {
  return  (
    <>
      <Head>
        <title>LOLDIFF</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <header className="mt-8 mb-8 max-w-screen-md mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-bold text-white text-center">LOL<span className='text-orange-900'>diff</span></h1>
        <SearchBar />
        <h2 className='flex flex-row items-center'><pre className='text-sm'>PATCH: </pre> <span className='text-orange-900'>13.3</span></h2>
      </header>
    
    </>
  )

}

const SearchBar = (champions: any) => {
  const [searchChampions, setSearchChampions] = useState('');
  const [searchedChampions, setSearchedChampions] = useState(champions);

  const handleSearch = (event: any) => {
    const searchChampion = event.target.value.toLowerCase();
    setSearchChampions(searchChampion);

    const filteredChampions = champions.filter(
      (champion: any) => champion.name.toLowerCase().includes(searchChampions)
    );
    setSearchedChampions(filteredChampions);
  };

  return (
    <form className="flex items-center border-b border-gray-300 py-2">
      <input
        type="text"
        placeholder="search a champion, items, runes, etc..."
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
        value={searchedChampions}
        onChange={handleSearch}
      />
    </form>
  );
};