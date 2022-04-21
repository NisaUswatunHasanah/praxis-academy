--- Belajar Prototype ----

Pada dasarnya properti Prototype adalah sebuah objek (juga dikenal sebagai objek Prototipe), di mana kita dapat melampirkan metode dan properti dalam sebuah prototipe objek, yang memungkinkan semua objek lain untuk mewarisi metode dan properti ini.

# membuat objek menggunakan konstruktor fungsi

            <script>
            // function constructor
            function Person(name, job, yearOfBirth){
	            this.name= name;
	            this.job= job;
	            this.yearOfBirth= yearOfBirth;
            }
            // this will show Person's prototype property.
            console.log(Person.prototype);
            </script>

maka akan terlihat didalam konsole bahwa 'person' memliki properti prototype yang memiliki objek konstruktor yang sekali lagi menunjuk ke fungsi konstruktor Person.
Saat kita membuat objek menggunakan konstruktor fungsi person, JavaScript Engine akan menambahkan proto dunder atau __proto__ di objek yang akan menunjuk ke objek konstruktor prototipe. sebagai contoh kita akan menambahkan metode countAge() ke properti Prototype dalam konstruktor fungsi Person yang akan diwarisi oleh objek yang berbeda. Dengan kode dibawah ini:
 
            <script>
                    function Person(nama, pekerjaan, tahunLahir){   
                        this.nama= nama;
                        this.pekerjaan= pekerjaan;
                        this.tahunLahir= tahunLahir;
                    }
                    Person.prototype.calculateAge= function(){
                console.log('The current age is: '+(2022- this.tahunLahir));
            }
                    console.log(Person.prototype);
            </script>

Kemudian kita akan membuat 2 objek berbeda yang akan mewarisi metode countAge() dan ingat, Ketika metode (atau properti) tertentu dipanggil, pertama-tama ia memeriksa di dalam objek tetapi ketika tidak ditemukan, kemudian pencarian bergerak pada prototipe Objek.

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Prototype</title>
            </head>

            <body>
                <script>
                     // function constructor
                    function Person(nama, pekerjaan, tahunLahir){   
                        this.nama= nama;
                        this.pekerjaan= pekerjaan;
                        this.tahunLahir= tahunLahir;
                    }
                    // adding calculateAge() method to the Prototype property
                    Person.prototype.calculateAge= function(){
                console.log('The current age is: '+(2022- this.tahunLahir));
            }
                    console.log(Person.prototype);

                    // creating Object Person1
                    let Person1= new Person('Nike', 'Mahasiswa', 1997); 
            console.log(Person1)
            let Person2= new Person('Ike', 'Pemulung', 1999);
            console.log(Person2)
              
            Person1.calculateAge();
            Person2.calculateAge();
                    </script>
               <script src="main.js";></script> 
            </body>
            </html>



