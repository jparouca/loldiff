import React, { useEffect } from 'react';

interface Patch {
  Changes: string[]
}

interface Patches {
  [patch: string]: Patch
}



const DiffSlot: React.FC<{ championName: string, patches: Patches }> = ({ championName, patches }) => {
  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <main className="flex flex-col border-2 border-white p-2 m-2 max-w-md flex-grow flex-shrink hover:scale-150 transition duration-500 ease-in-out bg-black">
      <header className="flex-row flex mb-4">
        <img src={getIcon(championName)} className="w-12 h-12 float-left" />
        <div className="text-lg uppercase mt-2 font-medium">{championName}</div>
      </header>
      <ul className="max-w-full items-center">
        {Object.keys(patches).map((patch) => (
          <li key={patch} className="flex">
            <pre className="text-sm font-bold">{patch}: </pre>
            <ul>
              { patches[patch]?.Changes  && patches[patch]?.Changes.map((change: string , index: number ) => (
                <li key={index} className="text-xs text-gray-">
                  {change}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 text-xs uppercase font-medium"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "hide" : "show"}
      </button>
    </main>
  );
};


export default DiffSlot;


const getIcon = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championName}.png`;
};