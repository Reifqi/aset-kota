import React from 'react';
import AsetContent from './AsetContent';
import AsetImage from './AsetImage';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import ViewButton from './ViewButton';

interface AsetItemAdminProps {
  name: string;
  imageUrl: string;
  alamat: string;
  description: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
  id: number;
  onClick: () => void;
}

const AsetItemAdmin: React.FC<AsetItemAdminProps> = ({
  name,
  imageUrl,
  alamat,
  description,
  onEdit,
  onDelete,
  onView,
  id,
}) => {
  return (
    <div className='aset-item card aset-item-admin' >
      <AsetImage imageUrl={imageUrl} />
      <AsetContent name={name} alamat={alamat} description={description} />
      <div className="d-flex mt-2 admin-button card-footer d-flex justify-content-between">
        <ViewButton id={id} onView={onView} />
        <EditButton id={id} onEdit={onEdit} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default AsetItemAdmin;
