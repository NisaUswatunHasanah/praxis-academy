1. Callback

function halo(nama) {
    alert('Halo, ${nama}');
}

function tampilkanPesan(callback){
    const nama = prompt('Masukkan Nama : ');
    callback(nama);
}
//nama nya akan masuk sebagai parameter function

tampilkanPesan(halo);
