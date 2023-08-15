import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const AsetTengah: React.FC = () => {
  return (
    <div className={styles.asetTengah}>
      <Image
        className='img-fluid logoBNA'
        src='/images/logoBNA.png'
        width={500}
        height={500}
        alt='gambar-logo'
        priority={true}
      />

      <h4>
        Website ini dibuat untuk memberikan informasi kepada masyarakat akan aset-aset yang dimiliki oleh pemerintah Kota Banda Aceh berupa alamat, nomor telepon, serta deskripsi dari aset tersebut.
      </h4>
    </div>
  );
};

export default AsetTengah;
