import React from 'react';
import AsetItem from './AsetItem';
import { useRouter } from 'next/navigation';

const AsetList: React.FC<{ asets: Array<any> }> = ({ asets }) => {
  const router = useRouter();

  if (!asets || asets.length === 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '50vh' }}
      >
        <div className="text-center">
          <h3>Tidak ada aset yang tersedia</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="aset-list">
      {asets.map((aset) => (
        <AsetItem key={aset.id} onClick={() => router.push(`/${aset.id}`)} {...aset} />
      ))}
    </div>
  );
};

export default AsetList;
