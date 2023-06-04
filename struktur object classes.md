{
 classCode: string,
 className: string,
 lecturer: string,
 material: string,
 startedAt: string,
 finishAt: string,
 room: string,
 <!-- status: string, -->
},

{
 classCode: 'TIF414020 A22232 4',
 className: 'Perancangan Algoritma dan Pemrograman A',
 lecturer: 'Dwi Otik Kurniawati, M.Eng.',
 material: 'Hello World C++',
 startedAt: 'Sabtu, 20 Mei 2023 22:42 WIB',
 finishAt: 'Sabtu, 20 Mei 2023 22:42 WIB',
 room: 'FST 404',
 status: 'Hadir',
},

curl -X POST -H "Content-Type: application/json" -d "{\"title\":\"Sons Of Anarchy\",\"body\":\"Body text goes here...\"}" http://localhost:3000/api/database

curl -X POST -H "Content-Type: application/json" -d "{\"className\":\"Metode Pengembangan Perangkat Lunak A\",\"lecturer\":\"Pak Galih\",\"material\":\"SDLC\",\"startedAt\":\"2023-05-25 09:00\",\"finishAt\":\"2023-05-25 11:00\",\"room\":\"Room 101\"}" https://simak-back-end.cyclic.app/api/jadwal

curl -X POST -H "Content-Type: application/json" -d "{\"nim\":\"21106050048\",\"classCode\":\"Kode Kelas Grafis dan Visualisasi A\"}" https://simak-back-end.cyclic.app/api/presensi

{"status":"success","message":"Jadwal Kelas berhasil ditambahkan","data":{"classCode":"Kode Kelas Metode Pengembangan Perangkat Lunak A"}}

username, password, email, nama, nim_nip, role,

curl -X POST -H "Content-Type: application/json" -d "{\"username\":\"21106050048\",\"password\":\"21106050048\",\"email\":\"21106050048@student.uin-suka.ac.id\",\"nama\":\"Nanda Arya Putra\",\"nim_nip\":\"21106050048\",\"role\":\"mahasiswa\"}" https://simak-back-end.cyclic.app/api/users/register

keytool -genkey -v -keystore simak_keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias nandaaryaputra