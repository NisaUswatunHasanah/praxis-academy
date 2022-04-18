1. Pengendalian alur:

//if...else

let hour = 8;
if (hour >= 17) {
  console.log("selamat sore");
} else if (hour >= 12) {
  console.log("selamat siang");
} else {
  console.log("selamat pagi");
}

//switch

switch (hari) {
  case 1:
    console.log('senin');
    break;
  case 2:
    console.log('selasa');
    break;
  case 3:
    console.log('rabu');
    break;
  case 4:
    console.log('kamis');
    break;
  case 5:
    console.log('jumat');
    break;
  case 6:
    console.log('sabtu');
    break;
  case 7:
    console.log('minggu');
    break;
  default:
    console.log('Maaf, harus angka 1 - 7');
}
maka jika dibagian const kita menuliskan angka case yang ingin diketahui maka akan muncul keterangan dari case tersebut
CONTOH SOAL :
// diketahui pak maman memiliki 7 angkot

// angkot 1 dan angkot 2 adalah angkot yang belum berangkat

// angkot 3, 4, dan angkot 5 adalah angkot yang beroperasi dengan baik

// dan

// angkot 6 dan angkot 7 adalah angkot requestIdleCallback

// soal : pak maman ingin mengetahui angkot yang rusak

PENYELESAIAN :

		const angkot = 'rusak';

		switch (angkot) {
		  case 'rusak':
		    console.log('angkot 6 & 7 rusak')
		    break;
		  case 'baik':
		    console.log('angkot 3, 4 & 5 beroperasi dengan baik')
		    break;
		  case 'males':
		    console.log('angkot 1 & 2 belum berangkat ')
		    break;
		  
		  default:
		     console.log(`Maaf angkot pak maman hanya 7 ${angkot}.`);
		    break
		}

2. Iterasi dan Looping


// while dan for

var jumlahAngkot = 10;
var angkotBeroperasi = 4;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik. ');

    noAngkot++
}

for( noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++ ) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}
 
//maka result yang akan keluar adalah

Angkot No. 1 beroperasi dengan baik.
Angkot No. 2 beroperasi dengan baik. 
Angkot No. 3 beroperasi dengan baik. 
Angkot No. 4 beroperasi dengan baik. 
Angkot No. 5 sedang tidak beroperasi 
Angkot No. 6 sedang tidak beroperasi 
Angkot No. 7 sedang tidak beroperasi 
Angkot No. 8 sedang tidak beroperasi 
Angkot No. 9 sedang tidak beroperasi 
Angkot No. 10 sedang tidak beroperasi

// do...while

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 13);
