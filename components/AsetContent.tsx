import React from 'react';

interface AsetContentProps {
  name: string;
  alamat: string;
  description: string;
}

const AsetContent: React.FC<AsetContentProps> = ({ name, alamat, description }) => {
  return (
    <div className='aset-content'>
      <h3 className='aset-content__name'>{name}</h3>
      <h6 className='aset-content__alamat'>{alamat}</h6>
      <p className='aset-content__description'>{description}</p>
    </div>
  );
};

export default AsetContent;
