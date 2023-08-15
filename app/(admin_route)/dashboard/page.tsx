"use client";
import React, { useEffect, useState } from 'react';
import AsetListAdmin from '@/components/AsetListAdmin';
import {useRouter} from 'next/navigation';


async function fetchAsets() {
  const res = await fetch('http://localhost:4000/data');
  const data = await res.json();
  return data;
}

export default function Home() {
  const router = useRouter();
  const [dataAsets, setDataAsets] = useState<any[]>([]); // Inisialisasi dataAsets sebagai array kosong
  const [showModal, setShowModal] = useState(false);
  const [newAsetData, setNewAsetData] = useState({
    name: '',
    alamat: '',
    noHp: '',
    imageUrl: '',
    description: '',
  });

  useEffect(() => {
    // Ambil data dan perbarui state ketika komponen dimuat
    fetchAsets()
      .then(data => setDataAsets(data))
      .catch(error => console.error('Kesalahan saat mengambil data:', error));
  }, []); // Array dependency kosong memastikan efek ini hanya dijalankan sekali, mirip dengan componentDidMount

  const handleAddData = () => {
    setShowModal(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewAsetData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Kirim data baru ke server menggunakan POST request
    fetch('http://localhost:4000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAsetData),
    })
      .then(response => response.json())
      .then(data => {
        // Setelah data berhasil ditambahkan, tutup modal dan perbarui daftar aset
        setShowModal(false);
        setDataAsets(prevData => [...prevData, data]);
      })
      .catch(error => console.error('Gagal menambahkan data:', error));
  };

  const handleEdit = (id: number) => {
    // Find the asset with the given ID
    const assetToEdit = dataAsets.find((asset) => asset.id === id);
    if (!assetToEdit) {
      console.error('Asset not found');
      return;
    }
  
    // Implement your logic to handle editing the asset, for example:
    // Redirect to a page where the asset can be edited with its details
    router.push(`/edit/${id}`);
  };

  const handleView = (id: number) => {
    router.push(`/${id}`)
  }

  const handleDelete = (id: number) => {
    // Confirm deletion with the user
    if (window.confirm('Are you sure you want to delete this asset?')) {
      // Send a DELETE request to the server to delete the asset
      fetch(`http://localhost:4000/data/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // If deletion is successful, remove the asset from the state
            setDataAsets((prevData) => prevData.filter((asset) => asset.id !== id));
          } else {
            console.error('Failed to delete asset:', response.statusText);
          }
        })
        .catch((error) => console.error('Failed to delete asset:', error));
    }
  };
  
  

  return (
    <div>
      {/* ... */}
      {/* Tombol untuk menambah data */}
      <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={handleAddData}
          >
            Tambah Data Aset
          </button>
        </div>
      </div>


      {/* Modal untuk menambah data */}
      {showModal && (
    <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block" }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Tambah Data Aset Baru</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setShowModal(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Nama</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={newAsetData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Alamat</label>
            <input
              type="text"
              name="alamat"
              className="form-control"
              value={newAsetData.alamat}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>No. HP</label>
            <input
              type="text"
              name="noHp"
              className="form-control"
              value={newAsetData.noHp}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>URL Gambar</label>
            <input
              type="text"
              name="imageUrl"
              className="form-control"
              value={newAsetData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Deskripsi</label>
            <textarea
              name="description"
              className="form-control"
              value={newAsetData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Batal
          </button>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      <div className='aset-list__parent' id='daftar-aset'>
        <AsetListAdmin asets={dataAsets} onEdit={handleEdit} onDelete={handleDelete} onView={handleView}/>
      </div>
    </div>
  );
}
