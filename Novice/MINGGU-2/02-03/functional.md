Functional proggraming adalah gaya penulisan program dimana sebuah solusi itu sederhana, fungsi yang terisolasi tannpa adanya efek samping diluar dari lingkup konsepnya
Didalam functional programming merapihkan dan menjadikan kodingan kita menjadi fungsi-fungsi dasar yang kecil. yang nantinya bisa kita kombinasikan menjadi program yang kompleks.
Konsep utama dari functional  programing yang disebut dengan pure function (bagaimana menghindari mutasi/perubahan nilai didalam program kita. dan bagaimana menuliskan pemograman kita agar menjadi lebih bersih menggunakan metode seperti .map() dan .filter()).

contoh kasus:
member praxis sangat menyukai  teh. Didalam kode editor terdapat function prepareTea dan getTea, perintahnya adalah untuk memanggil fungsi getTea nya untuk mengambil 40 gelas teh untuk dibagikan ke tim, dan simpan variabel tea4Team:

            const prepareTea = () => 'greenTea';

            const getTea = (numOfCups) => {
                const teaCups = [];

                for(let cups = 1; cups <= numOfCups; cups += 1){
                    const teaCup = prepareTea();
                    teaCups.push(teaCup);
                }
                return teaCups;
            }

            const tea4TeamFCC = getTea(40)

            console.log(tea4TeamFCC);

Mamber Praxis memiliki mood yang berbeda beda. Terkadang menginginkan blacktea kadang juga menginginkan greentea. Siapkan 27 gelas greeantea dan 13 gelas blacktea simpan kedalam variabel teamBlackTea dan teamGreenTea. catatan : data atau berapa jumlah teh dikirimkan sebagai parameter terakhir.


            const prepareGreenTea = () => 'greenTea';
            const prepareBlackTea = () => 'blackTea';

            const getTea = (prepareTea, numOfCups) => {
                const teaCups = [];

                for(cup = 1; cup <= numOfCups; cup += 1) {
                    const teaCup = prepareTea();
                    teaCups.push(teaCup);
                }
                return teaCups;
            };

            const teamBlacktea = getTea(prepareBlackTea, 27);
            const teamGreentea = getTea(prepareGreenTea, 13)

            console.log(teamBlacktea, teamGreentea);

