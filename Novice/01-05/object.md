  1. OBJECT  

               var mhs = {
                      nama : "Nisa Uswatun Hasanah",
                      Sapa : "Nisa",
                      ips : [3.00, 3.40, 3.20],
                      alamat : {
                        jalan : "Ronggokesumo",
                        kota : "Pati",
                        provinsi : "Jawa Tengah"

                      }

                    };

jika ingin memanggil di konsol, maka menuliskan : mhs.nama/sapa/ip dan seterusnya.
jika ingin menampilkan salah satu ip maka panggil beserta indexnya. 
contoh, jika ingin menampilkan ip semester 3 maka, tulis : mhs.ips[2] 
* Variable yang ada didalam object meupakan properti

# Object literal

            var mhs = {
              nama : 'Ike Adelia',
              nim : '17210002',
              email : 'ikeadelly@gmail.com',
              jurusan : 'Perbankan Syariah'

            }

# Function Declaration

            function buatObjectMahasiswa(nama, nim, email, jurusan) {
              var mhs = {};
              mhs.nama = nama;
              mhs.nim = nim;
              mhs.email = email;
              mhs.jurusan = jurusan;
              return mhs;
            }

            var mhs2 = buatObjectMahasiswa('Nike Prasilia', '172100235', 'nikeprasilia@gmail.com', ,'Zawa')

jika ingin membuat mahasiswa berikutnya maka tulis saja

            var mhs3 = buatObjectMahasiswa('Farida Kusuma Dewi', '172100234', 'faridakusuma@gmail.com', 'Zawa')

# Constructor
adalah function yang khusus untuk membuat object

            function Mahasiswa(nama, nim, email, jurusan) {
              this.nama = nama;
              this.nim = nim;
              this.email = email;
              this.jurusan =jurusan;
            }
// cara manggilnya menggunakan "new"

            var mhs4 = new Mahasiswa('Nisa', '172100236', 'nisaneyzo@gmail.com', 'Perbankan Syariah');

