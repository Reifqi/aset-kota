import React from 'react';
import AsetItemAdmin from './AsetItemAdmin';
import { useRouter } from 'next/navigation';

const AsetListAdmin: React.FC<{ asets: Array<any>; onView: (id: number) => void; onEdit: (id: number) => void; onDelete: (id: number) => void;}> = ({ asets, onView, onDelete, onEdit }) => {
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
        <AsetItemAdmin key={aset.id} {...aset} onView={onView} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default AsetListAdmin;
