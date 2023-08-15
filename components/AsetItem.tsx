import React from 'react';
import AsetContent from './AsetContent';
import AsetImage from './AsetImage';

const AsetItem: React.FC<{
  name: string;
  imageUrl: string;
  alamat: string;
  description: string;
  onClick: () => void;
}> = ({ name, imageUrl, alamat, description, onClick }) => {
  return (
    <div className='aset-item' onClick={onClick}>
      <AsetImage imageUrl={imageUrl} />
      <AsetContent name={name} alamat={alamat} description={description} />
    </div>
  );
};

export default AsetItem;
