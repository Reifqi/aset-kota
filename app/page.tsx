'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import AsetList from '@/components/AsetList';
import AsetTengah from '@/components/AsetTengah';

async function fetchAsets() {
  const res = await fetch('http://localhost:4000/data');
  const data = await res.json();
  return data;
}

export default function Home() {
  const [dataAsets, setDataAsets] = useState<any[]>([]);
  const [filteredAsets, setFilteredAsets] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Ambil data dan perbarui state ketika komponen dimuat
    fetchAsets()
      .then(data => {
        setDataAsets(data);
        setFilteredAsets(data);
      })
      .catch(error => console.error('Kesalahan saat mengambil data:', error));
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredData = dataAsets.filter(aset => {
      // Implement your search logic here
      return aset.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredAsets(filteredData);
  };

  return (
    <div>
       <div className={styles.header}>
        <div className={styles.contentLeft}>
          <h2>Aset Kota Banda Aceh</h2>
          <p>
            Banda Aceh adalah ibu kota dari Provinsi Aceh dan memiliki peran penting dalam pemerintahan daerah. Sebagai pusat administrasi, kota ini menjadi tempat berkumpulnya lembaga-lembaga pemerintahan, kantor-kantor publik, dan institusi pendidikan. Pemerintah Kota Banda Aceh berkomitmen untuk membangun tata kelola yang baik, memberikan pelayanan publik yang efisien, serta mendorong pertumbuhan ekonomi dan pembangunan infrastruktur yang berkelanjutan. Dalam konteks pemerintahan, Banda Aceh memainkan peran strategis dalam mengimplementasikan kebijakan dan program-program yang bertujuan meningkatkan kualitas hidup masyarakat serta menciptakan iklim investasi yang kondusif.
          </p>
        </div>
        <Image
          className="asetTengahImage img-fluid"
          src="/images/banda-hd.jpg"
          width={500}
          height={397}
          alt='mesjid-raya'
          priority={true}
        />
      </div>

      <AsetTengah />

      <div className='aset-list__parent' id='daftar-aset'>
        <h1>Daftar Aset:</h1>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <input
            className="form-control me-2 w-50 border border-dark"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari aset..."
          />
        </div>
        {filteredAsets ? <AsetList asets={filteredAsets} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}

