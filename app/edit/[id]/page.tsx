"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function EditAset({ params }: { params: { id: string } }) {
  const [dataAset, setDataAset] = useState<Aset | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Ambil data aset berdasarkan ID dari params
    fetchAset(params.id)
      .then((data) => setDataAset(data))
      .catch((error) => console.error("Kesalahan saat mengambil data:", error));
  }, [params.id]);

  // Handle fungsi simpan perubahan pada halaman edit
  const handleSaveChanges = () => {
    // Kirim data aset yang telah diedit ke server menggunakan PUT request
    fetch(`http://localhost:4000/data/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataAset),
    })
      .then((response) => {
        if (response.ok) {
          // Jika berhasil, kembali ke halaman utama
          router.push("/dashboard");
        } else {
          console.error("Gagal menyimpan perubahan:", response.statusText);
        }
      })
      .catch((error) => console.error("Gagal menyimpan perubahan:", error));
  };

  // Handle perubahan nilai input pada form edit
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataAset((prevData) => ({ ...prevData, [name]: value }));
  };

  if (!dataAset) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Edit Aset {dataAset.name}</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nama</label>
          <input
            type="text"
            name="name"
            value={dataAset.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">URL Gambar</label>
          <input
            type="text"
            name="imageUrl"
            value={dataAset.imageUrl}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="alamat" className="form-label">Alamat</label>
          <input
            type="text"
            name="alamat"
            value={dataAset.alamat}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="noHp" className="form-label">No. HP</label>
          <input
            type="text"
            name="noHp"
            value={dataAset.noHp}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Deskripsi</label>
          <textarea
            type="text"
            name="description"
            value={dataAset.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="button" onClick={handleSaveChanges} className="btn btn-primary">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
