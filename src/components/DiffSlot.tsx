import React from 'react';

const getIcon = (championName: string) => {
  return `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championName}.png`;
};

const DiffSlot: React.FC = ({ champion }) => {
  
  return (

    <div className="flex flex-col w-1/5 items-center border-2 border-white p-4 m-6"> 
      <div className="flex items-center">
        <img src={getIcon(champion.Name)} alt="Champion Icon" className="w-12 h-12" />
        <div className="text-lg uppercase font-medium ml-4">{champion.Name}</div>
      </div>

      <div className="mt-4 flex flex-col w-full items-center">
        
        {champion['Base Stats'] && (
          <p className='text-sm'>AD Growth: {champion['Base Stats'].Old} {'->'} {champion['Base Stats'].New}</p>
        )}

        {champion.Q && (
          <p className='text-sm'>Q: {champion.Q.Old} {'->'} {champion.Q.New}</p>
        )}

        {champion.W && (
          <p className='text-sm'>W: {champion.W.Old} {'->'} {champion.W.New}</p>
        )}

        {champion.E && (
          <p className='text-sm'>E: {champion.E.Old} {'->'} {champion.E.New}</p>
        )}


      </div>
    </div>
  );
};

export default DiffSlot;
