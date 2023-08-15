import React from 'react';
import Image from 'next/image';

const AsetImage: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className='aset-image img-fluid'>
      <Image src={imageUrl} width={100} height={100} alt='gambar-aset' />
    </div>
  );
};

export default AsetImage;
