export default async function getAset(id: string) {
    const res = await fetch(`http://localhost:4000/data/${id}`);
    if(!res.ok) throw new Error('Kesalahan saat mengambil data');
    return res.json();
}