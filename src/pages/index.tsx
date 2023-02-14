import React, { useState } from 'react';
import DiffSlot from '../components/DiffSlot';
import newjson from '../data/new.json'
import { Header } from '../components/Header';

const Home = () => {
  const [champions] = useState(newjson);

  const filteredChampions = Object.entries(champions).filter(([championName, patches]) => {
    return patches.Patches.hasOwnProperty("13.3");
  });

  return (
    <>
      <Header />

      <main className="flex flex-row flex-wrap justify-center">
        {filteredChampions.map(([championName, patches], i) => (
          <DiffSlot key={i} championName={championName} patches={patches.Patches} />
        ))}
      </main>
    </>
  );
};

export default Home;



