1. Callback
 Adalah function yang yang dikirimkan sebagai parameter function yang lain. Contoh:

            function halo(nama) {
                alert(`Halo, ${nama}`);
            }

//function ini akan dikirimkan sebagai parameter dari function yang lain

            function tampilkanPesan(callback) {
                const nama = prompt('Masukkan Nama : ');
                callback(nama);
            }
//jadi parametenya adalah funtion diatas, functionnya dipanggil didalam funtion.

//nama nya akan masuk sebagai parameter function

            tampilkanPesan(halo);

"halo" bukan merupakan variabel, tetapi function/

#code Shyncrhonous Callback

            function halo(nama) {
                alert(`Halo, ${nama}`);
            }

            function tampilkanPesan(callback) {
                const nama = prompt('Masukkan Nama : ');
                callback(nama);
            }

            tampilkanPesan(halo);

Sebenarnya kita bisa aja tidak membuat funtion baru dan diganti dengan anonymous funtion.

            function tampilkanPesan(callback) {
                const nama = prompt('Masukkan Nama : ');
                callback(nama);
            }

            tampilkanPesan(nama => alert(`Halo, ${nama}`));
