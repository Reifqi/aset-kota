const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

// Data dummy sebagai contoh
const data = [
  {
    id: 1,
    name: 'Dinas Kependudukan dan Pencatatan Sipil',
    alamat: 'Jalan Tgk. Abu No.7, Lam Teeh, Baiturrahman, Kp. Baru, Banda Aceh',
    noHp: '065121765',
    imageUrl: 'https://i.imgur.com/R25gZya.jpg',
    description: 'Dinas ini bertanggung jawab atas pencatatan kependudukan dan administrasi sipil di kota Banda Aceh. Tugas utama DISDUKCAPIL adalah mengelola data kependudukan, melayani pendaftaran penduduk baru, perekaman data kependudukan, dan penerbitan dokumen kependudukan seperti kartu tanda penduduk (KTP), akta kelahiran, akta kematian, serta akta perkawinan.'
  },
  {
    id: 2,
    name: 'Dinas Pendidikan',
    alamat: 'Jl. Teuku Moh. Daud Beureueh, Bandar Baru, Kec. Kuta Alam, Kota Banda Aceh',
    noHp: '065122620',
    imageUrl: 'https://i.imgur.com/QxEujl7.jpg',
    description: 'Dinas Pendidikan bertanggung jawab untuk mengelola sistem pendidikan di kota Banda Aceh, termasuk sekolah dasar, sekolah menengah, dan institusi pendidikan lainnya. Tugasnya meliputi pengawasan kurikulum, peningkatan kualitas pengajaran, pelatihan guru, dan penyediaan fasilitas pendidikan yang memadai.'

  },
  {
    id: 3,
    name: 'Dinas Kesehatan',
    alamat: 'Jl. Kulu II Suka Ramai, Blower, Sukaramai, Kec. Baiturrahman, Kota Banda Aceh',
    noHp: '065141086',
    imageUrl: 'https://i.imgur.com/k5Yh72A.png',
    description: 'Dinas Kesehatan bertugas untuk mengawasi layanan kesehatan masyarakat di Banda Aceh. Tanggung jawabnya mencakup perawatan kesehatan, program vaksinasi, penanggulangan wabah penyakit, promosi kesehatan, serta pemantauan dan pengendalian lingkungan yang berdampak pada kesehatan.'
  },
  {
    id: 4,
    name: 'Dinas Perhubungan',
    alamat: 'Jalan Mayjend T. Hamzah Bendahara No.52, Kuta Alam, Kec. Kuta Alam, Kota Banda Aceh',
    noHp: '065122110',
    imageUrl: 'https://i.imgur.com/wjyzXg0.png',
    description: 'Dinas Perhubungan bertanggung jawab atas pengaturan dan pengelolaan transportasi di kota, termasuk regulasi transportasi umum, lalu lintas, dan infrastruktur transportasi seperti terminal bus dan pelabuhan.'
  },
  {
    id: 5,
    name: 'Dinas Sosial',
    alamat: 'Jalan Residen Danubroto No.5, Geuceu Kompleks, Banda Raya, Lam Lagang, Banda Aceh, Kota Banda Aceh',
    noHp: '065148853',
    imageUrl: 'https://i.imgur.com/1xPW5SD.jpg',
    description: 'Dinas Sosial berperan dalam memberikan bantuan sosial kepada masyarakat yang membutuhkan, termasuk program bantuan ekonomi, perlindungan anak dan perempuan, rehabilitasi sosial, dan layanan untuk kelompok rentan.'
  },
  {
    id: 6,
    name: 'Dinas Perumahan Rakyat dan Kawasan Permukiman',
    alamat: 'Jl. Imam Bonjol, Kp. Baru, Kec. Baiturrahman, Kota Banda Aceh',
    noHp: '06518082967',
    imageUrl: 'https://i.imgur.com/fMfINhB.jpg',
    description: 'Dinas Perumahan dan Kawasan Permukiman kota Banda Aceh bertanggung jawab atas pengembangan, perencanaan, dan pengelolaan perumahan serta kawasan permukiman di wilayah kota tersebut. Dinas ini memiliki peran penting dalam menciptakan lingkungan hunian yang layak, berkelanjutan, dan berfungsi sebagai tempat tinggal yang nyaman bagi penduduk kota.'
  },
  {
    id: 7,
    name: 'Dinas Pariwisata dan Kebudayaan',
    alamat: 'Deah Baro, Meuraxa, Kota Banda Aceh',
    noHp: '-',
    imageUrl: 'https://i.imgur.com/bqRAthW.jpg',
    description: 'Dinas Pariwisata dan Kebudayaan berperan dalam mengembangkan potensi pariwisata dan kebudayaan di Banda Aceh. Tugasnya mencakup promosi pariwisata, pelestarian warisan budaya, dan pengelolaan destinasi pariwisata.'
  },
  {
    id: 8,
    name: 'Dinas Lingkungan Hidup, Kebersihan dan Keindahan',
    alamat: 'Jalan Pocut Baren No.30, Keuramat, Kuta Alam, Laksana, Kec. Kuta Alam, Kota Banda Aceh',
    noHp: '065131217',
    imageUrl: 'https://i.imgur.com/rKqLMPS.jpg',
    description: 'Dinas Lingkungan Hidup bertanggung jawab atas pengelolaan dan perlindungan sumber daya alam dan lingkungan hidup di suatu wilayah. Tugas utamanya adalah memastikan bahwa aktivitas manusia dan pembangunan berjalan seimbang dengan pelestarian lingkungan alam, sehingga dapat memberikan manfaat jangka panjang bagi masyarakat dan generasi mendatang'
  },
  {
    id: 9,
    name: 'Dinas Komunikasi, Informatika dan Statistik',
    alamat: 'H829+29F, Kp. Baru, Kec. Baiturrahman, Kota Banda Aceh',
    noHp: '-',
    imageUrl: 'https://i.imgur.com/z5rUu25.jpg',
    description: 'Diskominfotik adalah dinas pemerintahan yang berperan dalam mengelola dan mengembangkan sektor komunikasi, informatika, dan statistik di suatu wilayah. Tugasnya mencakup program komunikasi pemerintah, pembangunan teknologi informasi, pengumpulan data statistik, serta pengelolaan aplikasi dan sistem informasi untuk mendukung pelayanan publik dan kegiatan pemerintahan. Dinas ini juga bertanggung jawab atas keamanan informasi dan transparansi data untuk mendukung pembangunan yang berkelanjutan dan keterbukaan pemerintahan.'
  },
];

app.use(express.json());
app.use(cors());

// Mengatur route untuk endpoint GET /
app.get('/', (req, res) => {
  res.send('Selamat datang di API sederhana');
});

// Mengatur route untuk endpoint GET /data
app.get('/data', (req, res) => {
  res.json(data);
});

app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = data.find((item) => item.id === id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// Mengatur route untuk endpoint POST /data
app.post('/data', (req, res) => {
  const newData = req.body; // Data yang dikirim oleh klien dalam permintaan POST

  // Cek apakah data yang diberikan lengkap (misalnya: name, alamat, noHp, imageUrl, description)
  if (
    newData.name &&
    newData.alamat &&
    newData.noHp &&
    newData.imageUrl &&
    newData.description
  ) {
    // Generasi ID baru untuk data baru yang akan ditambahkan
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    // Tambahkan data baru ke dalam array data
    const newEntry = {
      id: newId,
      name: newData.name,
      alamat: newData.alamat,
      noHp: newData.noHp,
      imageUrl: newData.imageUrl.toString(),
      description: newData.description,
    };
    data.push(newEntry);

    res.status(201).json({ message: 'Data berhasil ditambahkan', data: newEntry });
  } else {
    res.status(400).json({ message: 'Data tidak lengkap' });
  }
});

app.delete('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    res.json({ message: 'Data berhasil dihapus' });
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

app.put('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newData = req.body; // Data yang dikirim oleh klien dalam permintaan PUT

  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    // Cek apakah data yang diberikan lengkap (misalnya: name, alamat, noHp, imageUrl, description)
    if (
      newData.name &&
      newData.alamat &&
      newData.noHp &&
      newData.imageUrl &&
      newData.description
    ) {
      // Update data aset dengan data baru
      data[index] = {
        ...data[index],
        name: newData.name,
        alamat: newData.alamat,
        noHp: newData.noHp,
        imageUrl: newData.imageUrl.toString(),
        description: newData.description,
      };
      res.json({ message: 'Data berhasil diperbarui', data: data[index] });
    } else {
      res.status(400).json({ message: 'Data tidak lengkap' });
    }
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});



// Mengatur server untuk mendengarkan pada port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});