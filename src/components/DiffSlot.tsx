import React from 'react';

export type Champion = {
  Name: string;
  'Base Stats'?: {
    Old: string;
    New: string;
  };
  Q?: {
    Old: string;
    New: string;
  };
  W?: {
    Old: string;
    New: string;
  };
  E?: {
    Old: string;
    New: string;
  };
};



const getIcon = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championName}.png`;
};

const DiffSlot: React.FC<{champion: Champion}> = ({ champion }) => {
  
  return (

    <main className="flex flex-col items-center border-2 border-white p-1 m-2" style={{ maxWidth: "200px" }}> 
      
      <header className="justify-items-stretch">
        <img src={getIcon(champion.Name)} className="w-12 h-12 justify-start" />
        <div className="text-lg uppercase font-medium mb-2">{champion.Name}</div>
      </header>

      <ul className="max-w-full items-center">
            
        {champion['Base Stats'] && (
          <li className='flex'>
            <p className='text-sm font-bold'>AD Growth:</p>
            <p className='text-xs'>{champion['Base Stats'].Old} {'->'} {champion['Base Stats'].New}</p>
          </li>
        )}
            
        {champion.Q && (
          <li className='flex'> 
            <p className='text-sm font-bold'>Q: </p>
            <p className='text-xs'>{champion.Q?.Old} {'->'} {champion.Q.New}</p>
          </li>
        )}
            
        {champion.W && (
          <li className='flex'> 
            <p className='text-sm font-bold'>W: </p>
            <p className='text-xs'>{champion.W.Old} {'->'} {champion.W.New}</p>
          </li>
        )}

        {champion.E && (
          <li className='flex'>
            <p className='text-sm font-bold'>E:</p>
            <p className='text-xs'>{champion.E.Old} {'->'} {champion.E.New}</p>
          </li>
        )}
      </ul>

    </main>
  );
};

export default DiffSlot;
