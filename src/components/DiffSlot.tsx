import React, { useEffect } from 'react';

export type Champion = {
  Name: string;
  'Base Stats'?: {
    Old: string | number;
    New: string | number;
  },
  Q?: {
    Old: string | number;
    New: string | number;
  },
  W?: {
    Old: string | number;
    New: string | number;
  },
  E?: {
    Old: string | number;
    New: string | number;
  },
};



const getIcon = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championName}.png`;
};

const DiffSlot: React.FC<{champion: Champion}> = ({ champion }) => {
  const [isExpanded, setExpanded] = React.useState(false);
  
  return (

    <main className="flex flex-col border-2 border-white p-2 m-2 max-w-md flex-grow flex-shrink hover:scale-150 transition duration-500 ease-in-out bg-black" >
      
      <header className='flex-row flex mb-4'>
        <img src={getIcon(champion.Name)} className="w-12 h-12 float-left"  />
        <div className="text-lg uppercase mt-2 font-medium">{champion.Name}</div>
      </header>

      <ul className="max-w-full items-center">
            
        {champion['Base Stats'] && (
          <li className='flex'>
            <pre className='text-sm font-bold'>AD Growth: </pre>
            <p className='text-xs'>{champion['Base Stats'].Old} {'->'} {champion['Base Stats'].New}</p>
          </li>
        )}
            
        {champion.Q && (
          <li className='flex'> 
            <pre className='text-sm font-bold'>Q: </pre>
            <p className='text-xs'>{champion.Q?.Old} {'->'} {champion.Q.New}</p>
          </li>
        )}
            
        {champion.W && (
          <li className='flex'> 
            <pre className='text-sm font-bold'>W: </pre>
            <p className='text-xs'>{champion.W.Old} {'->'} {champion.W.New}</p>
          </li>
        )}

        {champion.E && (
          <li className='flex'>
            <pre className='text-sm font-bold'>E: </pre>
            <p className='text-xs'>{champion.E.Old} {'->'} {champion.E.New}</p>
          </li>
        )}
      </ul>
      <button className='mt-4 text-xs uppercase font-medium' onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? 'hide' : 'show'}
      </button>

      {isExpanded && (
        <div>
          {}
        </div>
      )}

    </main>
  );
};

export default DiffSlot;
