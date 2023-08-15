"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Aset {
  id: string;
  name: string;
  imageUrl: string;
  alamat: string;
  noHp: string;
  description: string;
}

async function fetchAset(id: string): Promise<Aset> {
  const res = await fetch(`http://localhost:4000/data/${id}`);
  const data = await res.json();
  return data;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const dataAsets: Aset[] = await fetch('http://localhost:4000/data').then((res) => res.json());
  return dataAsets.map((aset) => ({
    id: aset.id,
  }));
}

export default function AsetDetail({ params }: { params: { id: string } }) {
  const [dataAset, setDataAset] = useState<Aset | null>(null); // Inisialisasi dataAset sebagai null

  useEffect(() => {
    // Ambil data dan perbarui state ketika komponen dimuat
    fetchAset(params.id)
      .then(data => setDataAset(data))
      .catch(error => console.error('Kesalahan saat mengambil data:', error));
  }, [params.id]); // Memastikan efek ini hanya dijalankan ketika params.id berubah

  return (
    <div>
      {dataAset ? (
       <div className='aset-detail'>
       <div className='aset-detail__image'>
         <Image
           src={dataAset.imageUrl}
           width={607}
           height={406}
           alt='gambar-aset'
           priority={true}
         />
       </div>
       <div className='aset-detail__content'>
         <h2>{dataAset.name}</h2>
         <h3> Alamat </h3>
         <p>{dataAset.alamat}</p>
         <h3>Nomor Telepon</h3>
         <p>{dataAset.noHp}</p>
         <h3>Deskripsi</h3>
         <p>{dataAset.description}</p>
       </div>

     </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );

  
}
